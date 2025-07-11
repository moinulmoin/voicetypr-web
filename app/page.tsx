import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-sm text-muted-foreground">
            Built by{" "}
            <a
              href="https://x.com/immoinulmoin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Moinul Moin
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
