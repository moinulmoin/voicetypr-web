"use client";

import { Shield, Github, Cpu, DollarSign } from "lucide-react";

const badges = [
  {
    icon: Github,
    label: "Open Source",
    description: "Transparent code"
  },
  {
    icon: Shield,
    label: "100% Private",
    description: "Your device only"
  },
  {
    icon: Cpu,
    label: "Native & Fast",
    description: "Built with Tauri"
  },
  {
    icon: DollarSign,
    label: "One-time Purchase",
    description: "No subscriptions"
  }
];

export default function TrustBadges() {
  return (
    <section className="relative py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-3">
                {/* Icon container with gradient border */}
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-[1px] group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <badge.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-sm font-semibold mb-1">
                {badge.label}
              </h3>
              <p className="text-xs text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}