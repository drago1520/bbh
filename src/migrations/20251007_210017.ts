import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_about_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__about_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_conf_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__conf_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "about" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_image_id" uuid,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_about_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "about_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"faq_left_right_id" uuid,
  	"gallery7_id" uuid,
  	"testimonial25_id" uuid,
  	"statistics_n_id" uuid
  );
  
  CREATE TABLE "_about_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" uuid,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__about_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_about_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"faq_left_right_id" uuid,
  	"gallery7_id" uuid,
  	"testimonial25_id" uuid,
  	"statistics_n_id" uuid
  );
  
  CREATE TABLE "conf" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_image_id" uuid,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_conf_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "conf_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"lecturers_n_id" uuid,
  	"agenda_n_id" uuid
  );
  
  CREATE TABLE "_conf_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" uuid,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__conf_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_conf_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"lecturers_n_id" uuid,
  	"agenda_n_id" uuid
  );
  
  CREATE TABLE "gallery7" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"label" varchar DEFAULT 'Галерия 7' NOT NULL,
  	"title" varchar NOT NULL,
  	"descr" jsonb,
  	"cta_text" varchar,
  	"cta_href" varchar,
  	"rotate_speed" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "gallery7_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" uuid
  );
  
  CREATE TABLE "testimonial25_blocks_testimonial25_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" uuid NOT NULL,
  	"quote" varchar NOT NULL,
  	"author" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"company" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "testimonial25" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"label" varchar DEFAULT 'Препоръки 25' NOT NULL,
  	"title" varchar NOT NULL,
  	"helper_text" varchar,
  	"cta_text" varchar,
  	"cta_href" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "lecturers_n_lecturers" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"bio" varchar,
  	"image_id" uuid NOT NULL
  );
  
  CREATE TABLE "lecturers_n" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar DEFAULT 'Лектори' NOT NULL,
  	"label" varchar DEFAULT 'Лектори' NOT NULL,
  	"subheading" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "agenda_n_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "agenda_n" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"label" varchar DEFAULT 'Agenda конф.' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "homepage_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_gallery_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_testimonial25_blocks_testimonial25_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_testimonial25" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "homepage_gallery" CASCADE;
  DROP TABLE "homepage_gallery_rels" CASCADE;
  DROP TABLE "homepage_testimonial25_blocks_testimonial25_card_block" CASCADE;
  DROP TABLE "homepage_testimonial25" CASCADE;
  ALTER TABLE "homepage_rels" DROP CONSTRAINT IF EXISTS "homepage_rels_homepage_gallery_fk";
  
  ALTER TABLE "homepage_rels" DROP CONSTRAINT IF EXISTS "homepage_rels_homepage_testimonial25_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT IF EXISTS "_homepage_v_rels_homepage_gallery_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT IF EXISTS "_homepage_v_rels_homepage_testimonial25_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_homepage_gallery_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_homepage_testimonial25_fk";
  
  DROP INDEX IF EXISTS "homepage_rels_homepage_gallery_id_idx";
  DROP INDEX IF EXISTS "homepage_rels_homepage_testimonial25_id_idx";
  DROP INDEX IF EXISTS "_homepage_v_rels_homepage_gallery_id_idx";
  DROP INDEX IF EXISTS "_homepage_v_rels_homepage_testimonial25_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_homepage_gallery_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_homepage_testimonial25_id_idx";
  ALTER TABLE "partners2" ALTER COLUMN "label" SET DEFAULT 'Партньори 2';
  ALTER TABLE "statistics_n" ALTER COLUMN "label" SET DEFAULT 'Статистики';
  ALTER TABLE "faq_left_right" ALTER COLUMN "label" SET DEFAULT 'FAQ';
  ALTER TABLE "homepage_rels" ADD COLUMN "gallery7_id" uuid;
  ALTER TABLE "homepage_rels" ADD COLUMN "testimonial25_id" uuid;
  ALTER TABLE "_homepage_v_rels" ADD COLUMN "gallery7_id" uuid;
  ALTER TABLE "_homepage_v_rels" ADD COLUMN "testimonial25_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "about_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "conf_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "gallery7_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "testimonial25_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "lecturers_n_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "agenda_n_id" uuid;
  ALTER TABLE "about" ADD CONSTRAINT "about_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_rels" ADD CONSTRAINT "about_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_rels" ADD CONSTRAINT "about_rels_faq_left_right_fk" FOREIGN KEY ("faq_left_right_id") REFERENCES "public"."faq_left_right"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_rels" ADD CONSTRAINT "about_rels_gallery7_fk" FOREIGN KEY ("gallery7_id") REFERENCES "public"."gallery7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_rels" ADD CONSTRAINT "about_rels_testimonial25_fk" FOREIGN KEY ("testimonial25_id") REFERENCES "public"."testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_rels" ADD CONSTRAINT "about_rels_statistics_n_fk" FOREIGN KEY ("statistics_n_id") REFERENCES "public"."statistics_n"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_v" ADD CONSTRAINT "_about_v_parent_id_about_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."about"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_about_v" ADD CONSTRAINT "_about_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_about_v_rels" ADD CONSTRAINT "_about_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_about_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_v_rels" ADD CONSTRAINT "_about_v_rels_faq_left_right_fk" FOREIGN KEY ("faq_left_right_id") REFERENCES "public"."faq_left_right"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_v_rels" ADD CONSTRAINT "_about_v_rels_gallery7_fk" FOREIGN KEY ("gallery7_id") REFERENCES "public"."gallery7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_v_rels" ADD CONSTRAINT "_about_v_rels_testimonial25_fk" FOREIGN KEY ("testimonial25_id") REFERENCES "public"."testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_v_rels" ADD CONSTRAINT "_about_v_rels_statistics_n_fk" FOREIGN KEY ("statistics_n_id") REFERENCES "public"."statistics_n"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "conf" ADD CONSTRAINT "conf_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "conf_rels" ADD CONSTRAINT "conf_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."conf"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "conf_rels" ADD CONSTRAINT "conf_rels_lecturers_n_fk" FOREIGN KEY ("lecturers_n_id") REFERENCES "public"."lecturers_n"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "conf_rels" ADD CONSTRAINT "conf_rels_agenda_n_fk" FOREIGN KEY ("agenda_n_id") REFERENCES "public"."agenda_n"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_conf_v" ADD CONSTRAINT "_conf_v_parent_id_conf_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."conf"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_conf_v" ADD CONSTRAINT "_conf_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_conf_v_rels" ADD CONSTRAINT "_conf_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_conf_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_conf_v_rels" ADD CONSTRAINT "_conf_v_rels_lecturers_n_fk" FOREIGN KEY ("lecturers_n_id") REFERENCES "public"."lecturers_n"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_conf_v_rels" ADD CONSTRAINT "_conf_v_rels_agenda_n_fk" FOREIGN KEY ("agenda_n_id") REFERENCES "public"."agenda_n"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "gallery7_rels" ADD CONSTRAINT "gallery7_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."gallery7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "gallery7_rels" ADD CONSTRAINT "gallery7_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "testimonial25_blocks_testimonial25_card_block" ADD CONSTRAINT "testimonial25_blocks_testimonial25_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonial25_blocks_testimonial25_card_block" ADD CONSTRAINT "testimonial25_blocks_testimonial25_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "lecturers_n_lecturers" ADD CONSTRAINT "lecturers_n_lecturers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lecturers_n_lecturers" ADD CONSTRAINT "lecturers_n_lecturers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."lecturers_n"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "agenda_n_items" ADD CONSTRAINT "agenda_n_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."agenda_n"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "about_meta_meta_image_idx" ON "about" USING btree ("meta_image_id");
  CREATE INDEX "about_slug_idx" ON "about" USING btree ("slug");
  CREATE INDEX "about_updated_at_idx" ON "about" USING btree ("updated_at");
  CREATE INDEX "about_created_at_idx" ON "about" USING btree ("created_at");
  CREATE INDEX "about__status_idx" ON "about" USING btree ("_status");
  CREATE INDEX "about_rels_order_idx" ON "about_rels" USING btree ("order");
  CREATE INDEX "about_rels_parent_idx" ON "about_rels" USING btree ("parent_id");
  CREATE INDEX "about_rels_path_idx" ON "about_rels" USING btree ("path");
  CREATE INDEX "about_rels_faq_left_right_id_idx" ON "about_rels" USING btree ("faq_left_right_id");
  CREATE INDEX "about_rels_gallery7_id_idx" ON "about_rels" USING btree ("gallery7_id");
  CREATE INDEX "about_rels_testimonial25_id_idx" ON "about_rels" USING btree ("testimonial25_id");
  CREATE INDEX "about_rels_statistics_n_id_idx" ON "about_rels" USING btree ("statistics_n_id");
  CREATE INDEX "_about_v_parent_idx" ON "_about_v" USING btree ("parent_id");
  CREATE INDEX "_about_v_version_meta_version_meta_image_idx" ON "_about_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_about_v_version_version_slug_idx" ON "_about_v" USING btree ("version_slug");
  CREATE INDEX "_about_v_version_version_updated_at_idx" ON "_about_v" USING btree ("version_updated_at");
  CREATE INDEX "_about_v_version_version_created_at_idx" ON "_about_v" USING btree ("version_created_at");
  CREATE INDEX "_about_v_version_version__status_idx" ON "_about_v" USING btree ("version__status");
  CREATE INDEX "_about_v_created_at_idx" ON "_about_v" USING btree ("created_at");
  CREATE INDEX "_about_v_updated_at_idx" ON "_about_v" USING btree ("updated_at");
  CREATE INDEX "_about_v_latest_idx" ON "_about_v" USING btree ("latest");
  CREATE INDEX "_about_v_autosave_idx" ON "_about_v" USING btree ("autosave");
  CREATE INDEX "_about_v_rels_order_idx" ON "_about_v_rels" USING btree ("order");
  CREATE INDEX "_about_v_rels_parent_idx" ON "_about_v_rels" USING btree ("parent_id");
  CREATE INDEX "_about_v_rels_path_idx" ON "_about_v_rels" USING btree ("path");
  CREATE INDEX "_about_v_rels_faq_left_right_id_idx" ON "_about_v_rels" USING btree ("faq_left_right_id");
  CREATE INDEX "_about_v_rels_gallery7_id_idx" ON "_about_v_rels" USING btree ("gallery7_id");
  CREATE INDEX "_about_v_rels_testimonial25_id_idx" ON "_about_v_rels" USING btree ("testimonial25_id");
  CREATE INDEX "_about_v_rels_statistics_n_id_idx" ON "_about_v_rels" USING btree ("statistics_n_id");
  CREATE INDEX "conf_meta_meta_image_idx" ON "conf" USING btree ("meta_image_id");
  CREATE INDEX "conf_slug_idx" ON "conf" USING btree ("slug");
  CREATE INDEX "conf_updated_at_idx" ON "conf" USING btree ("updated_at");
  CREATE INDEX "conf_created_at_idx" ON "conf" USING btree ("created_at");
  CREATE INDEX "conf__status_idx" ON "conf" USING btree ("_status");
  CREATE INDEX "conf_rels_order_idx" ON "conf_rels" USING btree ("order");
  CREATE INDEX "conf_rels_parent_idx" ON "conf_rels" USING btree ("parent_id");
  CREATE INDEX "conf_rels_path_idx" ON "conf_rels" USING btree ("path");
  CREATE INDEX "conf_rels_lecturers_n_id_idx" ON "conf_rels" USING btree ("lecturers_n_id");
  CREATE INDEX "conf_rels_agenda_n_id_idx" ON "conf_rels" USING btree ("agenda_n_id");
  CREATE INDEX "_conf_v_parent_idx" ON "_conf_v" USING btree ("parent_id");
  CREATE INDEX "_conf_v_version_meta_version_meta_image_idx" ON "_conf_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_conf_v_version_version_slug_idx" ON "_conf_v" USING btree ("version_slug");
  CREATE INDEX "_conf_v_version_version_updated_at_idx" ON "_conf_v" USING btree ("version_updated_at");
  CREATE INDEX "_conf_v_version_version_created_at_idx" ON "_conf_v" USING btree ("version_created_at");
  CREATE INDEX "_conf_v_version_version__status_idx" ON "_conf_v" USING btree ("version__status");
  CREATE INDEX "_conf_v_created_at_idx" ON "_conf_v" USING btree ("created_at");
  CREATE INDEX "_conf_v_updated_at_idx" ON "_conf_v" USING btree ("updated_at");
  CREATE INDEX "_conf_v_latest_idx" ON "_conf_v" USING btree ("latest");
  CREATE INDEX "_conf_v_autosave_idx" ON "_conf_v" USING btree ("autosave");
  CREATE INDEX "_conf_v_rels_order_idx" ON "_conf_v_rels" USING btree ("order");
  CREATE INDEX "_conf_v_rels_parent_idx" ON "_conf_v_rels" USING btree ("parent_id");
  CREATE INDEX "_conf_v_rels_path_idx" ON "_conf_v_rels" USING btree ("path");
  CREATE INDEX "_conf_v_rels_lecturers_n_id_idx" ON "_conf_v_rels" USING btree ("lecturers_n_id");
  CREATE INDEX "_conf_v_rels_agenda_n_id_idx" ON "_conf_v_rels" USING btree ("agenda_n_id");
  CREATE INDEX "gallery7_updated_at_idx" ON "gallery7" USING btree ("updated_at");
  CREATE INDEX "gallery7_created_at_idx" ON "gallery7" USING btree ("created_at");
  CREATE INDEX "gallery7_rels_order_idx" ON "gallery7_rels" USING btree ("order");
  CREATE INDEX "gallery7_rels_parent_idx" ON "gallery7_rels" USING btree ("parent_id");
  CREATE INDEX "gallery7_rels_path_idx" ON "gallery7_rels" USING btree ("path");
  CREATE INDEX "gallery7_rels_media_id_idx" ON "gallery7_rels" USING btree ("media_id");
  CREATE INDEX "testimonial25_blocks_testimonial25_card_block_order_idx" ON "testimonial25_blocks_testimonial25_card_block" USING btree ("_order");
  CREATE INDEX "testimonial25_blocks_testimonial25_card_block_parent_id_idx" ON "testimonial25_blocks_testimonial25_card_block" USING btree ("_parent_id");
  CREATE INDEX "testimonial25_blocks_testimonial25_card_block_path_idx" ON "testimonial25_blocks_testimonial25_card_block" USING btree ("_path");
  CREATE INDEX "testimonial25_blocks_testimonial25_card_block_image_idx" ON "testimonial25_blocks_testimonial25_card_block" USING btree ("image_id");
  CREATE INDEX "testimonial25_updated_at_idx" ON "testimonial25" USING btree ("updated_at");
  CREATE INDEX "testimonial25_created_at_idx" ON "testimonial25" USING btree ("created_at");
  CREATE INDEX "lecturers_n_lecturers_order_idx" ON "lecturers_n_lecturers" USING btree ("_order");
  CREATE INDEX "lecturers_n_lecturers_parent_id_idx" ON "lecturers_n_lecturers" USING btree ("_parent_id");
  CREATE INDEX "lecturers_n_lecturers_image_idx" ON "lecturers_n_lecturers" USING btree ("image_id");
  CREATE INDEX "lecturers_n_updated_at_idx" ON "lecturers_n" USING btree ("updated_at");
  CREATE INDEX "lecturers_n_created_at_idx" ON "lecturers_n" USING btree ("created_at");
  CREATE INDEX "agenda_n_items_order_idx" ON "agenda_n_items" USING btree ("_order");
  CREATE INDEX "agenda_n_items_parent_id_idx" ON "agenda_n_items" USING btree ("_parent_id");
  CREATE INDEX "agenda_n_updated_at_idx" ON "agenda_n" USING btree ("updated_at");
  CREATE INDEX "agenda_n_created_at_idx" ON "agenda_n" USING btree ("created_at");
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_gallery7_fk" FOREIGN KEY ("gallery7_id") REFERENCES "public"."gallery7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_testimonial25_fk" FOREIGN KEY ("testimonial25_id") REFERENCES "public"."testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_gallery7_fk" FOREIGN KEY ("gallery7_id") REFERENCES "public"."gallery7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_testimonial25_fk" FOREIGN KEY ("testimonial25_id") REFERENCES "public"."testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_about_fk" FOREIGN KEY ("about_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_conf_fk" FOREIGN KEY ("conf_id") REFERENCES "public"."conf"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_gallery7_fk" FOREIGN KEY ("gallery7_id") REFERENCES "public"."gallery7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonial25_fk" FOREIGN KEY ("testimonial25_id") REFERENCES "public"."testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_lecturers_n_fk" FOREIGN KEY ("lecturers_n_id") REFERENCES "public"."lecturers_n"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_agenda_n_fk" FOREIGN KEY ("agenda_n_id") REFERENCES "public"."agenda_n"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_rels_gallery7_id_idx" ON "homepage_rels" USING btree ("gallery7_id");
  CREATE INDEX "homepage_rels_testimonial25_id_idx" ON "homepage_rels" USING btree ("testimonial25_id");
  CREATE INDEX "_homepage_v_rels_gallery7_id_idx" ON "_homepage_v_rels" USING btree ("gallery7_id");
  CREATE INDEX "_homepage_v_rels_testimonial25_id_idx" ON "_homepage_v_rels" USING btree ("testimonial25_id");
  CREATE INDEX "payload_locked_documents_rels_about_id_idx" ON "payload_locked_documents_rels" USING btree ("about_id");
  CREATE INDEX "payload_locked_documents_rels_conf_id_idx" ON "payload_locked_documents_rels" USING btree ("conf_id");
  CREATE INDEX "payload_locked_documents_rels_gallery7_id_idx" ON "payload_locked_documents_rels" USING btree ("gallery7_id");
  CREATE INDEX "payload_locked_documents_rels_testimonial25_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonial25_id");
  CREATE INDEX "payload_locked_documents_rels_lecturers_n_id_idx" ON "payload_locked_documents_rels" USING btree ("lecturers_n_id");
  CREATE INDEX "payload_locked_documents_rels_agenda_n_id_idx" ON "payload_locked_documents_rels" USING btree ("agenda_n_id");
  ALTER TABLE "homepage_rels" DROP COLUMN IF EXISTS "homepage_gallery_id";
  ALTER TABLE "homepage_rels" DROP COLUMN IF EXISTS "homepage_testimonial25_id";
  ALTER TABLE "_homepage_v_rels" DROP COLUMN IF EXISTS "homepage_gallery_id";
  ALTER TABLE "_homepage_v_rels" DROP COLUMN IF EXISTS "homepage_testimonial25_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "homepage_gallery_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "homepage_testimonial25_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "homepage_gallery" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"label" varchar DEFAULT 'Секция галерия' NOT NULL,
  	"heading" varchar NOT NULL,
  	"descr" jsonb,
  	"cta_text" varchar,
  	"cta_href" varchar,
  	"rotate_speed" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "homepage_gallery_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" uuid
  );
  
  CREATE TABLE "homepage_testimonial25_blocks_testimonial25_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" uuid NOT NULL,
  	"quote" varchar NOT NULL,
  	"author" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"company" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_testimonial25" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"label" varchar DEFAULT 'Секция препоръки' NOT NULL,
  	"title" varchar NOT NULL,
  	"helper_text" varchar,
  	"cta_text" varchar,
  	"cta_href" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "about" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_about_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_about_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "conf" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "conf_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_conf_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_conf_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "gallery7" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "gallery7_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "testimonial25_blocks_testimonial25_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "testimonial25" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "lecturers_n_lecturers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "lecturers_n" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "agenda_n_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "agenda_n" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "about" CASCADE;
  DROP TABLE "about_rels" CASCADE;
  DROP TABLE "_about_v" CASCADE;
  DROP TABLE "_about_v_rels" CASCADE;
  DROP TABLE "conf" CASCADE;
  DROP TABLE "conf_rels" CASCADE;
  DROP TABLE "_conf_v" CASCADE;
  DROP TABLE "_conf_v_rels" CASCADE;
  DROP TABLE "gallery7" CASCADE;
  DROP TABLE "gallery7_rels" CASCADE;
  DROP TABLE "testimonial25_blocks_testimonial25_card_block" CASCADE;
  DROP TABLE "testimonial25" CASCADE;
  DROP TABLE "lecturers_n_lecturers" CASCADE;
  DROP TABLE "lecturers_n" CASCADE;
  DROP TABLE "agenda_n_items" CASCADE;
  DROP TABLE "agenda_n" CASCADE;
  ALTER TABLE "homepage_rels" DROP CONSTRAINT IF EXISTS "homepage_rels_gallery7_fk";
  
  ALTER TABLE "homepage_rels" DROP CONSTRAINT IF EXISTS "homepage_rels_testimonial25_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT IF EXISTS "_homepage_v_rels_gallery7_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT IF EXISTS "_homepage_v_rels_testimonial25_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_about_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_conf_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_gallery7_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_testimonial25_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_lecturers_n_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_agenda_n_fk";
  
  DROP INDEX IF EXISTS "homepage_rels_gallery7_id_idx";
  DROP INDEX IF EXISTS "homepage_rels_testimonial25_id_idx";
  DROP INDEX IF EXISTS "_homepage_v_rels_gallery7_id_idx";
  DROP INDEX IF EXISTS "_homepage_v_rels_testimonial25_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_about_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_conf_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_gallery7_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_testimonial25_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_lecturers_n_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_agenda_n_id_idx";
  ALTER TABLE "partners2" ALTER COLUMN "label" SET DEFAULT 'Партньори2';
  ALTER TABLE "statistics_n" ALTER COLUMN "label" SET DEFAULT 'Секция статистика';
  ALTER TABLE "faq_left_right" ALTER COLUMN "label" SET DEFAULT 'FAQ-шахмат';
  ALTER TABLE "homepage_rels" ADD COLUMN "homepage_gallery_id" uuid;
  ALTER TABLE "homepage_rels" ADD COLUMN "homepage_testimonial25_id" uuid;
  ALTER TABLE "_homepage_v_rels" ADD COLUMN "homepage_gallery_id" uuid;
  ALTER TABLE "_homepage_v_rels" ADD COLUMN "homepage_testimonial25_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "homepage_gallery_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "homepage_testimonial25_id" uuid;
  ALTER TABLE "homepage_gallery_rels" ADD CONSTRAINT "homepage_gallery_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."homepage_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_gallery_rels" ADD CONSTRAINT "homepage_gallery_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_testimonial25_blocks_testimonial25_card_block" ADD CONSTRAINT "homepage_testimonial25_blocks_testimonial25_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_testimonial25_blocks_testimonial25_card_block" ADD CONSTRAINT "homepage_testimonial25_blocks_testimonial25_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_gallery_updated_at_idx" ON "homepage_gallery" USING btree ("updated_at");
  CREATE INDEX "homepage_gallery_created_at_idx" ON "homepage_gallery" USING btree ("created_at");
  CREATE INDEX "homepage_gallery_rels_order_idx" ON "homepage_gallery_rels" USING btree ("order");
  CREATE INDEX "homepage_gallery_rels_parent_idx" ON "homepage_gallery_rels" USING btree ("parent_id");
  CREATE INDEX "homepage_gallery_rels_path_idx" ON "homepage_gallery_rels" USING btree ("path");
  CREATE INDEX "homepage_gallery_rels_media_id_idx" ON "homepage_gallery_rels" USING btree ("media_id");
  CREATE INDEX "homepage_testimonial25_blocks_testimonial25_card_block_order_idx" ON "homepage_testimonial25_blocks_testimonial25_card_block" USING btree ("_order");
  CREATE INDEX "homepage_testimonial25_blocks_testimonial25_card_block_parent_id_idx" ON "homepage_testimonial25_blocks_testimonial25_card_block" USING btree ("_parent_id");
  CREATE INDEX "homepage_testimonial25_blocks_testimonial25_card_block_path_idx" ON "homepage_testimonial25_blocks_testimonial25_card_block" USING btree ("_path");
  CREATE INDEX "homepage_testimonial25_blocks_testimonial25_card_block_i_idx" ON "homepage_testimonial25_blocks_testimonial25_card_block" USING btree ("image_id");
  CREATE INDEX "homepage_testimonial25_updated_at_idx" ON "homepage_testimonial25" USING btree ("updated_at");
  CREATE INDEX "homepage_testimonial25_created_at_idx" ON "homepage_testimonial25" USING btree ("created_at");
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_homepage_gallery_fk" FOREIGN KEY ("homepage_gallery_id") REFERENCES "public"."homepage_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_homepage_testimonial25_fk" FOREIGN KEY ("homepage_testimonial25_id") REFERENCES "public"."homepage_testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_homepage_gallery_fk" FOREIGN KEY ("homepage_gallery_id") REFERENCES "public"."homepage_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_homepage_testimonial25_fk" FOREIGN KEY ("homepage_testimonial25_id") REFERENCES "public"."homepage_testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_homepage_gallery_fk" FOREIGN KEY ("homepage_gallery_id") REFERENCES "public"."homepage_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_homepage_testimonial25_fk" FOREIGN KEY ("homepage_testimonial25_id") REFERENCES "public"."homepage_testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_rels_homepage_gallery_id_idx" ON "homepage_rels" USING btree ("homepage_gallery_id");
  CREATE INDEX "homepage_rels_homepage_testimonial25_id_idx" ON "homepage_rels" USING btree ("homepage_testimonial25_id");
  CREATE INDEX "_homepage_v_rels_homepage_gallery_id_idx" ON "_homepage_v_rels" USING btree ("homepage_gallery_id");
  CREATE INDEX "_homepage_v_rels_homepage_testimonial25_id_idx" ON "_homepage_v_rels" USING btree ("homepage_testimonial25_id");
  CREATE INDEX "payload_locked_documents_rels_homepage_gallery_id_idx" ON "payload_locked_documents_rels" USING btree ("homepage_gallery_id");
  CREATE INDEX "payload_locked_documents_rels_homepage_testimonial25_id_idx" ON "payload_locked_documents_rels" USING btree ("homepage_testimonial25_id");
  ALTER TABLE "homepage_rels" DROP COLUMN IF EXISTS "gallery7_id";
  ALTER TABLE "homepage_rels" DROP COLUMN IF EXISTS "testimonial25_id";
  ALTER TABLE "_homepage_v_rels" DROP COLUMN IF EXISTS "gallery7_id";
  ALTER TABLE "_homepage_v_rels" DROP COLUMN IF EXISTS "testimonial25_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "about_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "conf_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "gallery7_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "testimonial25_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "lecturers_n_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "agenda_n_id";
  DROP TYPE "public"."enum_about_status";
  DROP TYPE "public"."enum__about_v_version_status";
  DROP TYPE "public"."enum_conf_status";
  DROP TYPE "public"."enum__conf_v_version_status";`)
}
