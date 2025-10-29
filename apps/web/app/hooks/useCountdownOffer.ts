"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// Cookie utilities
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

function setCookie(name: string, value: string, hours: number) {
  if (typeof document === 'undefined') return;
  const date = new Date();
  date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
}

interface CountdownOfferResult {
  timeLeft: string;
  offerProgress: number;
  isExpired: boolean;
}

export function useCountdownOffer(offerDurationHours: number = 6): CountdownOfferResult {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [offerProgress, setOfferProgress] = useState(75); // Start at 75%
  const [isExpired, setIsExpired] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const calculateTimeLeft = useCallback(() => {
    // Get or set first visit time using cookies
    const storedFirstVisit = getCookie("voicetypr_offer_start");
    const now = Date.now();
    
    if (!storedFirstVisit) {
      setCookie("voicetypr_offer_start", now.toString(), 24); // Cookie expires in 24 hours
      // Initial state for new visitors
      setTimeLeft(`${offerDurationHours}h 0m 0s left`);
      setOfferProgress(75);
      return;
    }
    
    const visitTime = parseInt(storedFirstVisit);
    const offerDurationMs = offerDurationHours * 60 * 60 * 1000;
    const elapsed = now - visitTime;
    const remaining = Math.max(0, offerDurationMs - elapsed);
    
    // Calculate progress as if this is the last portion of a 24-hour offer
    // Progress starts at 75% (18/24 hours) and goes to 100%
    const baseProgress = 75;
    const additionalProgress = (elapsed / offerDurationMs) * 25;
    const progress = Math.min(100, baseProgress + additionalProgress);
    setOfferProgress(progress);
    
    if (remaining === 0) {
      // Reset the timer when it expires
      setCookie("voicetypr_offer_start", now.toString(), 24);
      setTimeLeft(`${offerDurationHours}h 0m 0s left`);
      setOfferProgress(75);
      setIsExpired(false);
      return;
    }
    
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    
    // Format time string
    if (hours > 0) {
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s left`);
    } else if (minutes > 0) {
      setTimeLeft(`${minutes}m ${seconds}s left`);
    } else {
      setTimeLeft(`${seconds}s left`);
    }
  }, [offerDurationHours]);

  useEffect(() => {
    // Initial calculation
    calculateTimeLeft();
    
    // Update every second
    intervalRef.current = setInterval(calculateTimeLeft, 1000);
    
    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [calculateTimeLeft]);

  // Also update when tab becomes visible again
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        calculateTimeLeft();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [calculateTimeLeft]);

  return { timeLeft, offerProgress, isExpired };
}