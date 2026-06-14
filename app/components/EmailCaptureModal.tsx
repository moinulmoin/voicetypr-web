"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useActionState, useEffect } from "react";
import { saveDownloadEmail } from "@/app/actions/download-emails";

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload?: () => void;
}

export default function EmailCaptureModal({
  isOpen,
  onClose,
  onDownload,
}: EmailCaptureModalProps) {
  const [state, formAction, isPending] = useActionState(saveDownloadEmail, null);

  useEffect(() => {
    if (state?.success && onDownload) {
      onDownload();
      onClose();
    }
  }, [state, onDownload, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[18px] font-semibold">Get Voicetypr</DialogTitle>
          <DialogDescription className="text-editorial-ink-2">
            Get the download link and occasional product updates. Unsubscribe anytime.
          </DialogDescription>
        </DialogHeader>

        <form action={formAction} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-editorial-ink-3" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="pl-10"
              required
            />
          </div>

          {state?.error && (
            <p className="text-sm text-red-600">{state.error}</p>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
            data-track="email-capture-submit"
          >
            {isPending ? "Please wait..." : "Download"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
