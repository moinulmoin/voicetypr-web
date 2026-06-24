"use client";

import { useTheme } from "next-themes";
import { useEffect, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
const themeOptions = ["system", "light", "dark"] as const;

type ThemeOption = (typeof themeOptions)[number];

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

function labelForTheme(theme: ThemeOption) {
  if (theme === "system") return "System";
  if (theme === "light") return "Light";
  return "Dark";
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;

  const tagName = target.tagName.toLowerCase();
  return (
    target.isContentEditable ||
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select"
  );
}

function ThemeIcon({ theme }: { theme: ThemeOption }) {
  if (theme === "system") {
    return (
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="12" height="8" rx="1.6" />
        <path d="M6.5 13h3M8 11v2" />
      </svg>
    );
  }

  if (theme === "light") {
    return (
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="8" cy="8" r="3" />
        <path d="M8 1.5v1.2M8 13.3v1.2M1.5 8h1.2M13.3 8h1.2M3.4 3.4l.85.85M11.75 11.75l.85.85M3.4 12.6l.85-.85M11.75 4.25l.85-.85" />
      </svg>
    );
  }

  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13.5 9.7A5.8 5.8 0 016.3 2.5 5.8 5.8 0 108 14a5.77 5.77 0 005.5-4.3z" />
    </svg>
  );
}

export function ThemeHotkey() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  useEffect(() => {
    if (!mounted) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.key !== "d" ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey ||
        isEditableTarget(event.target)
      ) {
        return;
      }

      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mounted, resolvedTheme, setTheme]);

  return null;
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const activeTheme = mounted && theme ? theme : "system";

  return (
    <div
      className="inline-flex rounded-lg border border-border bg-muted p-0.5 text-[11px] font-medium text-muted-foreground shadow-sm"
      aria-label="Theme preference"
      role="radiogroup"
    >
      {themeOptions.map((option) => {
        const active = activeTheme === option;

        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={active}
            disabled={!mounted}
            onClick={() => setTheme(option)}
            className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 leading-none transition-colors disabled:cursor-default ${
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "hover:bg-muted hover:text-foreground"
            }`}
          >
            <ThemeIcon theme={option} />
            <span>{labelForTheme(option)}</span>
          </button>
        );
      })}
    </div>
  );
}
