'use client';

import { useEffect, useRef, useState } from 'react';

type SubmitState = 'idle' | 'sending' | 'sent' | 'error';

const RESET_DELAY_MS = 2500;
const DEFAULT_IDEA = 'I wish VoiceTypr could ';

export default function FeatureIdeaForm() {
  const [idea, setIdea] = useState(DEFAULT_IDEA);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const trimmedIdea = idea.trim();
  const isSending = submitState === 'sending';

  async function handleSubmit() {
    if (isSending) return;

    if (!trimmedIdea || trimmedIdea === DEFAULT_IDEA.trim()) {
      textareaRef.current?.focus();
      return;
    }

    setSubmitState('sending');

    try {
      const response = await fetch('/api/feature-ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea: trimmedIdea }),
      });

      if (!response.ok) throw new Error('Feature idea submission failed');

      setSubmitState('sent');
      setIdea(DEFAULT_IDEA);
      resetTimerRef.current = setTimeout(() => setSubmitState('idle'), RESET_DELAY_MS);
    } catch {
      setSubmitState('error');
    }
  }

  return (
    <div className="rounded-xl bg-white p-4 text-sm shadow-sm">
      <label htmlFor="feature-idea" className="sr-only">
        Feature idea
      </label>
      <textarea
        ref={textareaRef}
        id="feature-idea"
        value={idea}
        onChange={(event) => {
          setIdea(event.target.value);
          if (submitState === 'error') setSubmitState('idle');
        }}
        onFocus={() => {
          if (submitState === 'sent') setSubmitState('idle');
        }}
        aria-label="Feature idea"
        rows={2}
        className="min-h-20 w-full resize-none rounded-lg border border-editorial-line bg-editorial-surface-2 p-3 leading-relaxed text-editorial-ink outline-none transition placeholder:text-editorial-ink-3 focus:border-editorial-ink/40 focus:bg-white"
      />
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSending}
        className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-editorial-ink px-3 py-2 text-xs font-semibold text-white transition hover:bg-black disabled:cursor-wait disabled:opacity-70"
      >
        {submitState === 'sending' ? 'Sending…' : submitState === 'sent' ? 'Sent — thank you' : 'Send idea'}
      </button>
      {submitState === 'error' ? (
        <p className="mt-2 text-xs leading-relaxed text-red-700">
          Couldn&apos;t send. Email support@voicetypr.com instead.
        </p>
      ) : null}
    </div>
  );
}
