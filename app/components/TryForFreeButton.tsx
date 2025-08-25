"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TryForFreeButton() {
  return (
    <Button className="w-full group" variant="outline" asChild>
      <Link href="/download" data-umami-event="try-free-click">
        Try for free
      </Link>
    </Button>
  );
}