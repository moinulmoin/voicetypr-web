import { AudioLines, Github, ShieldCheck, Sparkles } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";

async function getWaitlistCount() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/waitlist/count`, {
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: ['waitlist-count'] 
      }
    });
    const data = await response.json();
    return data.count || 0;
  } catch (error) {
    console.error("Error fetching waitlist count:", error);
    return 0;
  }
}

export default async function Page() {
  const waitlistCount = await getWaitlistCount();

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Grid background pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Gradient orb */}
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl animate-pulse"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-neutral-400 to-neutral-600 dark:from-neutral-600 dark:to-neutral-800 opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>

      {/* Main content */}
      <main className="flex-1 px-4 md:px-6 flex items-center justify-center">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm px-3 py-1 text-sm text-neutral-600 dark:text-neutral-400">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Coming Soon
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-500 to-neutral-300 dark:from-white dark:via-neutral-400 dark:to-neutral-600">
                VoiceTypr
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-neutral-600 text-balance dark:text-neutral-400 max-w-3xl mx-auto">
              Open source <span className="font-semibold text-neutral-900 dark:text-neutral-100">AI voice to text</span> dictation tool, alternative to{" "}
              <span className="font-medium text-neutral-800 dark:text-neutral-200">Wispr Flow</span>,{" "}
              <span className="font-medium text-neutral-800 dark:text-neutral-200">SuperWhisper</span>, made for{" "}
              <span className="font-medium text-neutral-800 dark:text-neutral-200">vibe coders</span>,{" "}
              <span className="font-medium text-neutral-800 dark:text-neutral-200">super AI users</span> in macOS, Windows.
            </p>

            {/* Features */}
            <div className="mt-10 flex items-center justify-center gap-x-8 gap-y-4 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 transition-all hover:text-neutral-900 dark:hover:text-neutral-100">
              <AudioLines  className="w-4 h-4" />
                Voice to Text
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 transition-all hover:text-neutral-900 dark:hover:text-neutral-100">
                <ShieldCheck className="w-4 h-4" />
                Privacy First
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 transition-all hover:text-neutral-900 dark:hover:text-neutral-100">
                <Github className="w-4 h-4" />
                Open Source
              </div>
            </div>

            {/* Waitlist form */}
            <WaitlistForm waitlistCount={waitlistCount} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6">
        <div className="flex flex-col items-center gap-4">
          {/* Copyright */}
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
            Built by{" "}
            <a
              href="https://moinulmoin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              Moinul Moin
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}