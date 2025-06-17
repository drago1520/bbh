// app/providers.jsx
'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export function PostHogProvider({ children }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: '/relay-unEN',
      ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: 'history_change',
      capture_pageleave: true, // Enable pageleave capture
      capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
      capture_dead_clicks: true,
      debug: process.env.NODE_ENV === 'development',
      defaults: '2025-05-24',
      fetch_options: {
        cache: 'force-cache', // Use Next.js cache
        next_options: {
          // Passed to the `next` option for `fetch`P
          revalidate: 60, // Cache for 60 seconds
          tags: ['posthog'], // Can be used with Next.js `revalidateTag` function
        },
      },
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
