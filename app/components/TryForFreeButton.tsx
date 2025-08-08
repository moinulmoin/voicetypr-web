"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TryForFreeButton() {
  return (
    <Button className="w-full group" variant="outline" asChild>
      <Link href="/download">
        Try for free
      </Link>
    </Button>
  );
}