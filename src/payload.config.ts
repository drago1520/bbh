// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./payload/collections/Users";
import { Media } from "./payload/collections/Media";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { Attendees } from "./payload/collections/Attendees";
import { Events } from "./payload/collections/Events";
import { MarketingSectionsCollection } from "./payload/deprecated/Marketing-collection_old";
import { PartnersNCollection } from "./payload/collections/partnersN";
import { Tickets } from "./payload/collections/tickets-collection";
import { Gallery7Collection } from "./payload/collections/gallery-7";
import { Testimonial25Collection } from "./payload/collections/testimonial25-collection";
import { StatisticsCollection } from "./payload/collections/statistics";
import { FaqLeftRightCollection } from "./payload/collections/faq-left-right";
import { LecturersCollection } from "./payload/collections/lecturers";
import { AgendaCollection } from "./payload/collections/agenda";
import { getServerSideURL } from "./lib/utils/getURL";
import { Contacts } from "./payload/collections/contacts-collection";
import { AboutPage } from "./payload/pages/about-page-collection";
import { NetworkingPage } from "./payload/pages/networking-page-collection";
import { HomePage } from "./payload/pages/home-page-collection";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  email: nodemailerAdapter({
    defaultFromAddress:
      process.env.NODE_ENV == "production"
        ? "office@scufflr.com"
        : "team@scufflr.com",
    defaultFromName:
      process.env.NODE_ENV == "production" ? "Драгомир BBH" : "Драго Тест BBH",
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  admin: {
    timezones: {
      defaultTimezone: "Europe/Sofia",
    },
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  //Pages, Homepage, AboutPage, ConfPage,
  collections: [
    AboutPage,
    HomePage,
    NetworkingPage,
    Users,
    Media,
    Attendees,
    Events,
    MarketingSectionsCollection,
    PartnersNCollection,
    Tickets,
    Gallery7Collection,
    Testimonial25Collection,
    StatisticsCollection,
    FaqLeftRightCollection,
    LecturersCollection,
    AgendaCollection,
    Contacts,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  cors: [getServerSideURL()].filter(Boolean),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
  defaultDepth: 999, //DO NOT REMOVE, all payload.find() will explode
  // indexSortableFields
  // kv
  // telemetry: true
});
