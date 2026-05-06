/**
 * Minimal author byline. Single line, no card, no border.
 */
export function AuthorBlock() {
  return (
    <div className="flex items-center gap-3 mt-12">
      <div className="w-9 h-9 rounded-full bg-editorial-accent text-white grid place-items-center text-[14px] font-medium">
        M
      </div>
      <div className="text-[14px] leading-tight">
        <a
          href="https://twitter.com/immoinulmoin"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-editorial-ink hover:underline"
          data-track="blog-author-twitter-click"
        >
          Moinul Moin
        </a>
        <span className="text-editorial-ink-3">
          {" "}· Founder, VoiceTypr
        </span>
      </div>
    </div>
  );
}
