import type { ReactNode } from "react";
import { Section, Container } from "@/components/marketing/section";

/**
 * The two-column FAQ block used across SEO/landing pages.
 *
 * Left column: a title (<h2>) and optional intro paragraph. Right column:
 * a `<details>` accordion (first item open) over the supplied `faqs`, followed
 * by a "Not answered here? Email support" mailto footer.
 *
 * All copy (title, intro, answers) is passed in by the page so per-page
 * wording is preserved verbatim during migration; the markup and classes
 * reproduce the canonical (air-gapped) block exactly.
 */

/** A single FAQ entry, written either as an object or a [question, answer] tuple. */
export type Faq = { q: string; a: ReactNode };
export type FaqInput = Faq | readonly [string, ReactNode];

function isTupleFaq(item: FaqInput): item is readonly [string, ReactNode] {
  return Array.isArray(item);
}

function toFaq(item: FaqInput): Faq {
  return isTupleFaq(item) ? { q: item[0], a: item[1] } : item;
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

const SUMMARY_CLASS =
  "flex list-none items-start justify-between gap-6 text-lg font-semibold leading-snug text-foreground [&::-webkit-details-marker]:hidden";

const ANSWER_CLASS =
  "max-w-[640px] pt-3.5 text-[15px] leading-relaxed text-muted-foreground";

type FaqSectionProps = {
  /** FAQ entries; the first item renders open. */
  faqs: ReadonlyArray<FaqInput>;
  /** Section title (<h2>). Pass JSX with <em> for the emphasized serif word. */
  title: ReactNode;
  /** Intro paragraph beneath the title. Omitted from the DOM when absent. */
  intro?: ReactNode;
  /** Support address for the footer mailto link. @default "support@voicetypr.com" */
  supportEmail?: string;
};

export function FaqSection({
  faqs,
  title,
  intro,
  supportEmail = "support@voicetypr.com",
}: FaqSectionProps) {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <h2 className={H2_CLASS}>{title}</h2>
            {intro ? (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
            ) : null}
          </div>

          <div>
            {faqs.map((item, i) => {
              const faq = toFaq(item);
              return (
                <details
                  key={faq.q}
                  open={i === 0}
                  className="group cursor-pointer border-t border-border py-5 last:border-b last:border-border"
                >
                  <summary className={SUMMARY_CLASS}>
                    <span>{faq.q}</span>
                    <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-muted text-base font-light text-muted-foreground transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className={ANSWER_CLASS}>{faq.a}</div>
                </details>
              );
            })}

            <div className="mt-8 text-sm text-muted-foreground">
              Not answered here?{" "}
              <a
                href={`mailto:${supportEmail}`}
                className="text-foreground underline-offset-4 hover:underline"
              >
                Email support
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
