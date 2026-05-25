"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

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

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const activeTheme = mounted && theme ? theme : "system";

  return (
    <div
      className="inline-flex rounded-lg border border-editorial-line bg-editorial-surface-2 p-0.5 text-[11px] font-medium text-editorial-ink-2 shadow-sm"
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
                ? "bg-editorial-ink text-white shadow-sm"
                : "hover:bg-editorial-line hover:text-editorial-ink"
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
