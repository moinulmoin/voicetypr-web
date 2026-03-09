import { describe, it, expect, beforeEach } from "vitest";
import {
  createOffer,
  resolveStoredOffer,
  readStore,
  readVisitCount,
  writeVisitCount,
  getDurationForVisit,
  formatCountdown,
  _resetForTests,
  LS_KEY,
} from "./flash-offer-store";
import { FLASH_OFFER_DURATIONS_MS } from "./pricing";

beforeEach(() => {
  localStorage.clear();
  _resetForTests();
});

/* ── getDurationForVisit ── */

describe("getDurationForVisit", () => {
  it("returns the first duration for visit 0", () => {
    expect(getDurationForVisit(0)).toBe(FLASH_OFFER_DURATIONS_MS[0]);
  });

  it("returns progressively shorter durations", () => {
    for (let i = 0; i < FLASH_OFFER_DURATIONS_MS.length; i++) {
      expect(getDurationForVisit(i)).toBe(FLASH_OFFER_DURATIONS_MS[i]);
    }
  });

  it("clamps to the floor (last entry) for visits beyond the schedule", () => {
    const floor = FLASH_OFFER_DURATIONS_MS[FLASH_OFFER_DURATIONS_MS.length - 1];
    expect(getDurationForVisit(100)).toBe(floor);
    expect(getDurationForVisit(999)).toBe(floor);
  });
});

/* ── createOffer ── */

describe("createOffer", () => {
  it("creates an offer with duration matching visit 0 on first call", () => {
    const offer = createOffer();
    const expectedDuration = FLASH_OFFER_DURATIONS_MS[0]!;
    expect(offer.expiresAt - offer.activatedAt).toBe(expectedDuration);
  });

  it("increments the visit count after creating an offer", () => {
    expect(readVisitCount()).toBe(0);
    createOffer();
    expect(readVisitCount()).toBe(1);
  });

  it("persists the offer to localStorage", () => {
    createOffer();
    expect(readStore()).not.toBeNull();
  });
});

/* ── resolveStoredOffer ── */

describe("resolveStoredOffer", () => {
  it("returns null when no offer exists", () => {
    expect(resolveStoredOffer()).toBeNull();
  });

  it("returns the offer when it is still live", () => {
    const offer = createOffer();
    const resolved = resolveStoredOffer();
    expect(resolved).not.toBeNull();
    expect(resolved!.expiresAt).toBe(offer.expiresAt);
  });

  it("returns null and clears store when the offer has expired", () => {
    createOffer();

    // Fast-forward past expiry
    const stored = readStore()!;
    const expired = { ...stored, expiresAt: Date.now() - 1000 };
    localStorage.setItem(LS_KEY, JSON.stringify(expired));

    expect(resolveStoredOffer()).toBeNull();
    expect(readStore()).toBeNull();
  });
});

/* ── Full lifecycle: the core scenario ── */

describe("offer lifecycle with decreasing durations", () => {
  it("visit 1: activates with 8h, returning mid-timer preserves the offer", () => {
    const offer = createOffer();
    const expectedDuration = FLASH_OFFER_DURATIONS_MS[0]!;
    expect(offer.expiresAt - offer.activatedAt).toBe(expectedDuration);

    // Simulate "user returns while timer is running"
    const resumed = resolveStoredOffer();
    expect(resumed).not.toBeNull();
    expect(resumed!.expiresAt).toBe(offer.expiresAt);

    // Visit count should still be 1 (not incremented again)
    expect(readVisitCount()).toBe(1);
  });

  it("visit 2: after expiry, next offer uses 6h duration", () => {
    // Visit 1
    createOffer();

    // Simulate expiry
    const stored = readStore()!;
    localStorage.setItem(
      LS_KEY,
      JSON.stringify({ ...stored, expiresAt: Date.now() - 1000 })
    );
    resolveStoredOffer(); // clears expired offer

    // Visit 2
    const offer2 = createOffer();
    const expectedDuration = FLASH_OFFER_DURATIONS_MS[1]!;
    expect(offer2.expiresAt - offer2.activatedAt).toBe(expectedDuration);
    expect(readVisitCount()).toBe(2);
  });

  it("full schedule: durations decrease until hitting the floor", () => {
    for (let visit = 0; visit < FLASH_OFFER_DURATIONS_MS.length + 2; visit++) {
      const offer = createOffer();
      const expectedIdx = Math.min(visit, FLASH_OFFER_DURATIONS_MS.length - 1);
      const expectedDuration = FLASH_OFFER_DURATIONS_MS[expectedIdx]!;

      expect(offer.expiresAt - offer.activatedAt).toBe(expectedDuration);

      // Simulate expiry before next iteration
      localStorage.setItem(
        LS_KEY,
        JSON.stringify({ ...offer, expiresAt: Date.now() - 1000 })
      );
      resolveStoredOffer();
    }
  });

  it("mid-timer return never changes the visit count or duration", () => {
    const offer = createOffer();
    const countAfterActivation = readVisitCount();

    // Simulate 5 "returns" while the timer is still running
    for (let i = 0; i < 5; i++) {
      const resumed = resolveStoredOffer();
      expect(resumed).not.toBeNull();
      expect(resumed!.expiresAt).toBe(offer.expiresAt);
      expect(readVisitCount()).toBe(countAfterActivation);
    }
  });

  it("floor duration persists indefinitely for visits beyond the schedule", () => {
    const floor = FLASH_OFFER_DURATIONS_MS[FLASH_OFFER_DURATIONS_MS.length - 1]!;

    // Fast-forward visit count past the schedule
    writeVisitCount(50);

    const offer = createOffer();
    expect(offer.expiresAt - offer.activatedAt).toBe(floor);

    // Expire and create another — still floor
    localStorage.setItem(
      LS_KEY,
      JSON.stringify({ ...offer, expiresAt: Date.now() - 1000 })
    );
    resolveStoredOffer();

    const offer2 = createOffer();
    expect(offer2.expiresAt - offer2.activatedAt).toBe(floor);
  });
});

/* ── formatCountdown ── */

describe("formatCountdown", () => {
  it("formats zero as 00:00:00", () => {
    expect(formatCountdown(0)).toBe("00:00:00");
  });

  it("formats negative values as 00:00:00", () => {
    expect(formatCountdown(-5000)).toBe("00:00:00");
  });

  it("formats 1 hour correctly", () => {
    expect(formatCountdown(3600_000)).toBe("01:00:00");
  });

  it("formats mixed hours/minutes/seconds", () => {
    expect(formatCountdown(8 * 3600_000 + 30 * 60_000 + 15_000)).toBe(
      "08:30:15"
    );
  });
});
