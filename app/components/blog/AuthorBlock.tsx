/**
 * Author byline. Mirrors the visual treatment of FounderNote so readers
 * recognize the same person across the homepage and the blog.
 */
export function AuthorBlock() {
  return (
    <div className="flex items-center gap-3 mt-12 pt-8 border-t border-editorial-line">
      <div className="w-11 h-11 rounded-full bg-editorial-accent text-white grid place-items-center font-serif text-[22px]">
        M
      </div>
      <div className="leading-tight">
        <a
          href="https://twitter.com/immoinulmoin"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-editorial-ink hover:underline"
          data-track="blog-author-twitter-click"
        >
          Moinul Moin
        </a>
        <div className="text-xs text-editorial-ink-3">
          Solo founder · VoiceTypr ·{" "}
          <a
            href="https://ideaplexa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            data-track="blog-author-ideaplexa-click"
          >
            @Ideaplexa
          </a>
        </div>
      </div>
    </div>
  );
}
