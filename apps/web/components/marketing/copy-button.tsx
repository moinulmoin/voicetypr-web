"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyButtonProps = {
  value: string;
  label?: string;
  className?: string;
};

/** Copies `value` to the clipboard and briefly confirms. */
export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          /* clipboard unavailable — no-op */
        }
      }}
      aria-label={label ? `Copy ${label}` : "Copy"}
      className={className}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" aria-hidden /> Copied
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" aria-hidden /> {label ?? "Copy"}
        </>
      )}
    </button>
  );
}
