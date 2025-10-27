export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Base background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-pink-500/5" />
      
      {/* Main grid pattern */}
      <div 
        className="absolute inset-0 bg-[size:50px_50px] [background-position:-1px_-1px]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`
        }}
      />
      
      {/* Secondary finer grid */}
      <div 
        className="absolute inset-0 opacity-30 bg-[size:10px_10px] [background-position:-1px_-1px]"
        style={{
          backgroundImage: `linear-gradient(color-mix(in oklch, var(--border) 50%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, var(--border) 50%, transparent) 1px, transparent 1px)`
        }}
      />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/20" />
      
      {/* Vignette for focus */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, color-mix(in oklch, var(--background) 40%, transparent) 100%)`
        }}
      />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}