import { withPayload } from '@payloadcms/next/withPayload';

import redirects from './redirects.js';
import { NextConfig } from 'next';

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  webpack: (webpackConfig: any) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    };

    return webpackConfig;
  },
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL].map(item => {
        const url = new URL(item);

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', '') as 'http' | 'https',
        };
      }),
      {
        protocol: 'https',
        hostname: 'deifkwefumgah.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  reactStrictMode: true,
  redirects,
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
