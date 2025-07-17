import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_contacts_socials_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'whatsapp', 'telegram', 'viber', 'discord', 'snapchat', 'pinterest', 'reddit', 'twitch', 'medium', 'slack', 'skype', 'threads', 'yelp');
  CREATE TABLE "contacts_phones" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phone" varchar
  );
  
  CREATE TABLE "contacts_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email" varchar
  );
  
  CREATE TABLE "contacts_socials" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_contacts_socials_platform" NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "contacts" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"subheading" varchar,
  	"gmaps" varchar DEFAULT 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948552!3d37.75781499651705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1619806204562!5m2!1sen!2sus',
  	"cta" varchar NOT NULL,
  	"address" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "contacts_phones" ADD CONSTRAINT "contacts_phones_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contacts_emails" ADD CONSTRAINT "contacts_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contacts_socials" ADD CONSTRAINT "contacts_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "contacts_phones_order_idx" ON "contacts_phones" USING btree ("_order");
  CREATE INDEX "contacts_phones_parent_id_idx" ON "contacts_phones" USING btree ("_parent_id");
  CREATE INDEX "contacts_emails_order_idx" ON "contacts_emails" USING btree ("_order");
  CREATE INDEX "contacts_emails_parent_id_idx" ON "contacts_emails" USING btree ("_parent_id");
  CREATE INDEX "contacts_socials_order_idx" ON "contacts_socials" USING btree ("_order");
  CREATE INDEX "contacts_socials_parent_id_idx" ON "contacts_socials" USING btree ("_parent_id");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "contacts_phones" CASCADE;
  DROP TABLE "contacts_emails" CASCADE;
  DROP TABLE "contacts_socials" CASCADE;
  DROP TABLE "contacts" CASCADE;
  DROP TYPE "public"."enum_contacts_socials_platform";`);
}
