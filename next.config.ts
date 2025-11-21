import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import { withPostHogConfig } from "@posthog/nextjs-config";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    typedEnv: true,
    turbopackFileSystemCacheForDev: true,
    turbopackFileSystemCacheForBuild: true,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/magare/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/magare/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};
let finalConfig: NextConfig = withPayload(nextConfig, {
  devBundleServerPackages: false,
});
if (process.env.POSTHOG_SOURCEMAPS === "production")
  finalConfig = withPostHogConfig(finalConfig, {
    personalApiKey: process.env.POSTHOG_API_KEY!, // Personal API Key
    envId: process.env.POSTHOG_ENV_ID!, // Environment ID
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST, // (optional), defaults to https://us.posthog.com
    sourcemaps: {
      // (optional)
      enabled: true, // (optional) Enable sourcemaps generation and upload, default to true on production builds
      project: "my-application", // (optional) Project name, defaults to repository name
      version: "1.0.0", // (optional) Release version, defaults to current git commit
      deleteAfterUpload: true, // (optional) Delete sourcemaps after upload, defaults to true
    },
  });
export default finalConfig;
