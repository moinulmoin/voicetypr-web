"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const competitors = [
  {
    name: "VoiceTypr",
    price: "$19",
    period: "once",
    yearlyTotal: "$19",
    features: {
      offline: true,
      privacy: "100% local",
      updates: "Lifetime free",
      devices: "Mac + Windows",
      accuracy: "95%+ (Whisper AI)",
      storage: "50MB",
    },
    highlighted: true,
  },
  {
    name: "Dragon",
    price: "$500",
    period: "once",
    yearlyTotal: "$500",
    features: {
      offline: true,
      privacy: "Cloud sync",
      updates: "Paid upgrades",
      devices: "Windows only",
      accuracy: "99%",
      storage: "4GB+",
    },
    highlighted: false,
  },
  {
    name: "SuperWhisper",
    price: "$9.99",
    period: "/month",
    yearlyTotal: "$120/year",
    features: {
      offline: true,
      privacy: "Local + sync",
      updates: "Included",
      devices: "Mac only",
      accuracy: "95%+ (Whisper)",
      storage: "200MB+",
    },
    highlighted: false,
  },
  {
    name: "Wispr Flow",
    price: "$15",
    period: "/month",
    yearlyTotal: "$180/year",
    features: {
      offline: false,
      privacy: "Cloud stored",
      updates: "Included",
      devices: "Mac only",
      accuracy: "95%+",
      storage: "N/A (cloud)",
    },
    highlighted: false,
  },
];

export default function CompetitorComparison() {
  return (
    <section className="relative py-24" id="comparison">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-4">
          Why pay more for less?
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          See how VoiceTypr compares to the alternatives
        </p>
        
        {/* Savings calculator */}
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full">
          <span className="text-sm font-medium">
            After 1 year: <strong className="text-green-600">Save $161-$481</strong>
          </span>
          <span className="text-muted-foreground">|</span>
          <span className="text-sm font-medium">
            After 2 years: <strong className="text-green-600">Save $341-$961</strong>
          </span>
        </div>
      </div>

      {/* Comparison Table - Desktop */}
      <div className="max-w-6xl mx-auto px-4 hidden md:block">
        <div className="overflow-hidden rounded-2xl border border-border/50">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left p-4 font-medium">Feature</th>
                {competitors.map((comp) => (
                  <th key={comp.name} className="p-4 text-center">
                    <div className={comp.highlighted ? "relative" : ""}>
                      {comp.highlighted && (
                        <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary">
                          BEST VALUE
                        </Badge>
                      )}
                      <div className="font-bold text-lg mt-2">{comp.name}</div>
                      <div className="flex items-baseline justify-center gap-1 mt-2">
                        <span className="text-2xl font-bold">{comp.price}</span>
                        <span className="text-sm text-muted-foreground">{comp.period}</span>
                      </div>
                      {comp.period === "/month" && (
                        <div className="text-xs text-muted-foreground mt-1">
                          {comp.yearlyTotal}
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border/50">
                <td className="p-4 font-medium">Works Offline</td>
                {competitors.map((comp) => (
                  <td key={comp.name} className="p-4 text-center">
                    {comp.features.offline ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-border/50 bg-muted/10">
                <td className="p-4 font-medium">Privacy</td>
                {competitors.map((comp) => (
                  <td key={comp.name} className="p-4 text-center text-sm">
                    {comp.features.privacy}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-border/50">
                <td className="p-4 font-medium">Updates</td>
                {competitors.map((comp) => (
                  <td key={comp.name} className="p-4 text-center text-sm">
                    {comp.features.updates}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-border/50 bg-muted/10">
                <td className="p-4 font-medium">Platforms</td>
                {competitors.map((comp) => (
                  <td key={comp.name} className="p-4 text-center text-sm">
                    {comp.features.devices}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-border/50">
                <td className="p-4 font-medium">Accuracy</td>
                {competitors.map((comp) => (
                  <td key={comp.name} className="p-4 text-center text-sm">
                    {comp.features.accuracy}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-border/50 bg-muted/10">
                <td className="p-4 font-medium">Storage Size</td>
                {competitors.map((comp) => (
                  <td key={comp.name} className="p-4 text-center text-sm">
                    {comp.features.storage}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Comparison Cards - Mobile */}
      <div className="max-w-6xl mx-auto px-4 md:hidden">
        <div className="grid gap-4">
          {competitors.map((comp) => (
            <Card
              key={comp.name}
              className={`p-6 ${
                comp.highlighted
                  ? "ring-2 ring-primary"
                  : "bg-card/50"
              }`}
            >
              {comp.highlighted && (
                <Badge className="mb-3">BEST VALUE</Badge>
              )}
              <h3 className="font-bold text-xl mb-2">{comp.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold">{comp.price}</span>
                <span className="text-muted-foreground">{comp.period}</span>
                {comp.period === "/month" && (
                  <span className="text-sm text-muted-foreground ml-2">
                    ({comp.yearlyTotal})
                  </span>
                )}
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Works Offline</span>
                  {comp.features.offline ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <X className="w-4 h-4 text-red-500" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span>Privacy</span>
                  <span className="text-muted-foreground">{comp.features.privacy}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Platforms</span>
                  <span className="text-muted-foreground">{comp.features.devices}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Accuracy</span>
                  <span className="text-muted-foreground">{comp.features.accuracy}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-lg font-medium mb-4">
          Stop paying monthly for something you use daily
        </p>
        <p className="text-sm text-muted-foreground">
          Join smart solo founders who own their tools
        </p>
      </div>
    </section>
  );
}