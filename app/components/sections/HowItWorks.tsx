"use client";

import { Button } from "@/components/ui/button";
import { Cpu, Download, Keyboard, Sparkles } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Install VoiceTypr",
    description: "Download for your OS and launch the app.",
    icon: Download,
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "Download model",
    description: "Download and select a model for your language and speed.",
    icon: Cpu,
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    id: 3,
    title: "Set your hotkey",
    description: "Pick a global shortcut to toggle/push to dictation anywhere.",
    icon: Keyboard,
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: 4,
    title: "Speak & ship",
    description: "Hold the hotkey and talk; now polished text anywhere.",
    icon: Sparkles,
    gradient: "from-pink-600 to-indigo-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four quick steps to start writing 3x faster.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[32px] left-0 right-0 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
          </div>
          <div className="relative flex justify-between items-start">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group relative flex flex-col items-center text-center"
                style={{ flex: "1 1 0" }}
              >
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} opacity-20 blur-lg group-hover:opacity-30 transition-opacity`}
                  />
                  <div
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} p-[1px] group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-base mb-2 px-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-[220px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden relative">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative mb-4">
                  <div
                    className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} opacity-20 blur-lg group-hover:opacity-30 transition-opacity`}
                  />
                  <div
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} p-[1px] group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <step.icon className="w-6 h-6 stroke-current fill-current" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button
            size="lg"
            className="group"
            data-umami-event="how-it-works-cta-click"
            asChild
          >
            <Link href="/download">Start in 2 minutes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
