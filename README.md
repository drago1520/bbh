This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
bun dev
```

This includes Docker containers for development with S3 buckets, email & MongoDB.
On changes to the Database structure run

```bash
bun types2
```

to generate types.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Analytics

Posthog captures every event even with Brave & Ublock origin lite ad blockers. Automatic Error tracking on Client works even with Brave & Ublock origin ad blockers.

Tested Manually capturing Exception with Posthog:

```ts
const posthog = getPostHogServer();

try {
  throw new Error("This is a test exception for error tracking");
} catch (error) {
  posthog.captureException(error, "test");
}
```

With Posthog source map upload at build time it is ~10-20% slower.

# Huge issue

It's not just about adding `.ts` extentions at this point.

```log
file:///C:/projects/research/payload/dev-server-speed-test-mongodb/next-16-from-scratch/src/collections/Attendees.ts:1
import { CollectionConfig } from 'payload';
         ^^^^^^^^^^^^^^^^

SyntaxError: The requested module 'payload' does not provide an export named 'CollectionConfig'
SyntaxError: The requested module 'payload' does not provide an export named 'CollectionConfig'
```

smth more serious is messed up. I tested with bun and pnpm.
