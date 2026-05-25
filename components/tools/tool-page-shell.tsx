import type { ReactNode } from 'react';

export type ToolPageShellProps = {
  title: ReactNode;
  lede: string;
  children: ReactNode;
};

export function ToolPageShell({ title, lede, children }: ToolPageShellProps) {
  return (
    <div className="rounded-[28px] border border-editorial-line bg-white/82 p-5 shadow-sm backdrop-blur md:p-8">
      <header className="mb-8 border-b border-editorial-line pb-8">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">free tool</p>
        <h1 className="mt-3 max-w-3xl text-[clamp(36px,5vw,58px)] font-semibold leading-[1.06] tracking-[-0.04em] text-editorial-ink">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-[1.65] text-editorial-ink-2">{lede}</p>
      </header>
      {children}
    </div>
  );
}
