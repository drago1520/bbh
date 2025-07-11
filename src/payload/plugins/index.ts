import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { redirectsPlugin } from '@payloadcms/plugin-redirects';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { Plugin } from 'payload';
import { s3Storage } from '@payloadcms/storage-s3';

import { getServerSideURL } from '@/lib/utils/getURL';
import { Page, Post } from '@/payload-types';
import { revalidateRedirects } from '../hooks/revalidateRedirects';

export const plugins: Plugin[] = [
  // storage-adapter-placeholder,

  redirectsPlugin({
    collections: ['pages', 'posts'],
    overrides: {
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map(field => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            };
          }
          return field;
        });
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),

  seoPlugin({
    generateTitle: ({ doc }: { doc: Post | Page }) => {
      return doc?.title ? `${doc.title} | payloadblocks.dev Website Template` : 'payloadblocks.dev Website Template';
    },
    generateURL: ({ doc }: { doc: Post | Page }) => {
      const url = getServerSideURL();
      return doc?.slug ? `${url}/${doc.slug}` : url;
    },
  }),

  payloadCloudPlugin(),
  s3Storage({
    collections: {
      media: true,
    },
    bucket: process.env.R2_BUCKET!,
    config: {
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.R2_Secret_ACCESS_KEY!,
      },
      region: 'auto',
      endpoint: process.env.R2_ENDPOINT!,
    },
  }),
];
