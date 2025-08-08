"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cpu,
  Download,
  Keyboard,
  Mic,
  MousePointer2,
  Shield,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Download & Install",
    description: "Get VoiceTypr",
    icon: Download,
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "Download AI Model",
    description: "Choose a language model",
    icon: Cpu,
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: 3,
    title: "Set Your Hotkey",
    description: "Configure global hotkey",
    icon: Keyboard,
    gradient: "from-pink-600 to-purple-500",
  },
  {
    id: 4,
    title: "Position Cursor",
    description: "Click where you want to type",
    icon: MousePointer2,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: 5,
    title: "Press & Speak",
    description: "Hit hotkey, speak up",
    icon: Mic,
    gradient: "from-indigo-600 to-blue-500",
  },
  {
    id: 6,
    title: "Text Pasted at Cursor",
    description: "Words appear at your cursor",
    icon: Sparkles,
    gradient: "from-blue-500 to-purple-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with VoiceTypr in minutes.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-[32px] left-0 right-0 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
          </div>

          {/* Steps */}
          <div className="relative flex justify-between items-start">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center relative group"
                style={{
                  flex: "1 1 0",
                }}
              >
                {/* Dot indicator */}
                <div className="relative mb-6">
                  {/* Outer glow */}
                  <div
                    className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} opacity-20 blur-lg group-hover:opacity-30 transition-opacity`}
                  />

                  {/* Icon circle */}
                  <div
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} p-[1px] group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-base mb-2 px-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-[150px] leading-relaxed">
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
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon */}
                <div className="relative mb-4">
                  {/* Outer glow */}
                  <div
                    className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} opacity-20 blur-lg group-hover:opacity-30 transition-opacity`}
                  />

                  {/* Icon circle */}
                  <div
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} p-[1px] group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Connection Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[2px] h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Button
            size="lg"
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="group"
            data-umami-event="how-it-works-cta-click"
          >
            Write 5x faster now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
