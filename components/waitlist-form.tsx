"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { joinWaitlist } from "@/app/actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="group"
      data-umami-event="join-waitlist-button"
    >
      {pending ? (
        "Joining..."
      ) : (
        <>
          Join Waitlist
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
}

interface WaitlistFormProps {
  waitlistCount: number;
}

export function WaitlistForm({ waitlistCount }: WaitlistFormProps) {
  const [state, formAction] = useActionState(joinWaitlist, { status: "idle" });

  return (
    <div className="mt-16 flex flex-col items-center gap-4">
      <form
        action={formAction}
        key={state.status === "success" ? Date.now() : "form"}
        className="flex w-full max-w-md gap-2"
      >
        <input
          autoFocus
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className="flex-1 h-9 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm px-4 text-sm outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-all hover:bg-white/60 dark:hover:bg-black/60 focus:bg-white/70 dark:focus:bg-black/70"
        />
        <SubmitButton />
      </form>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        {state.message ? (
          <span
            className={
              state.status === "success"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }
          >
            {state.message}
          </span>
        ) : (
          waitlistCount > 0
            ? `${waitlistCount}+ creators already waiting. Be next.`
            : "Be the first to get early access."
        )}
      </p>
    </div>
  );
}