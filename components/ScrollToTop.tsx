"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // 1. Tell the browser we want to handle scroll position ourselves
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Immediate scroll to top
    window.scrollTo(0, 0);

    // 3. Delayed scroll to top (catches jumps after the page finishes rendering)
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Use instant to avoid a sliding effect on load
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
