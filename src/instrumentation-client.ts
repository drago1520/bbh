import posthog from "posthog-js";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: "/magare",
  ui_host: "https://eu.posthog.com",
  capture_pageview: "history_change",
  capture_pageleave: true, // Enable pageleave capture
  capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
  capture_dead_clicks: true,
  defaults: "2025-05-24",
  debug: process.env.NODE_ENV === "development",
});
