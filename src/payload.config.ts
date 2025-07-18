import { postgresAdapter } from '@payloadcms/db-postgres';

import { buildConfig } from 'payload';
import sharp from 'sharp';

import { Categories } from '@/payload/collections/Categories';
import { Media } from '@/payload/collections/Media';
import { Pages } from '@/payload/collections/Pages/pages-collection';
import { Posts } from '@/payload/collections/Posts/posts-collection';
import { Users } from '@/payload/collections/Users/users-collection';
import { defaultLexical } from '@/payload/fields/defaultLexical';

import { getServerSideURL } from '@/lib/utils/getURL';
import { plugins } from './payload/plugins';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import { Attendees } from './payload/collections/Attendees/attendees-collection';
import { Events } from './payload/collections/Events/events-collection';
import { MarketingSectionsCollection } from './payload/collections/Marketing-sections/partners';
import { Contacts } from './payload/globals/contacts';

export default buildConfig({
  email: nodemailerAdapter({
    defaultFromAddress: process.env.NODE_ENV == 'production' ? 'office@scufflr.com' : 'team@scufflr.com',
    defaultFromName: process.env.NODE_ENV == 'production' ? 'Драгомир BBH' : 'Драго Тест BBH',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  admin: {
    timezones: {
      defaultTimezone: 'Europe/Sofia',
    },
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  globals: [Contacts],
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    idType: 'uuid',
  }),
  collections: [Users, Media, Pages, Posts, Categories, Attendees, Events, MarketingSectionsCollection], //onChange => npm run db:schema
  cors: [getServerSideURL()].filter(Boolean),
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: 'src/payload-types.ts',
  },
  plugins: [...plugins],
});
