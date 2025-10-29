"use client";

import { useActionState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribeToWaitlist } from "@/app/actions/waitlist";

export default function WindowsWaitlist() {
  const [state, formAction, isPending] = useActionState(subscribeToWaitlist, {});

  return (
    <div className="mt-16 max-w-md mx-auto">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-bold flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              viewBox="0 0 88 88"
              xmlns="http://www.w3.org/2000/svg"
              height="88"
              width="88"
            >
              <path
                d="m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z"
                fill="currentColor"
              />
            </svg>
            Get Notified For Windows Version
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Be the first to know when VoiceTypr launches on Windows
          </p>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="flex gap-2">
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                className="flex-1"
                required
                disabled={isPending}
              />
              <Button
                type="submit"
                disabled={isPending}
                className="px-6"
                data-umami-event="windows-waitlist-submit"
              >
                {isPending ? "..." : "Subscribe"}
              </Button>
            </div>
            {state.success && (
              <p className="text-sm text-green-500 text-center">
                ✓ You&apos;re on the list! We&apos;ll notify you when it is ready.
              </p>
            )}
            {state.error && (
              <p className="text-sm text-red-500 text-center">
                {state.error}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}