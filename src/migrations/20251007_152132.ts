import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage_blocks_agenda_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_agenda" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_lecturers_lecturers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_lecturers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_timeline_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_who_is_the_conf_for_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_who_is_the_conf_for" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_pricing_with_countdown_plans_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_pricing_with_countdown_plans" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_pricing_with_countdown" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_testimonials2_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_testimonials2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_agenda_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_agenda" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_lecturers_lecturers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_lecturers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_timeline_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_who_is_the_conf_for_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_who_is_the_conf_for" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_pricing_with_countdown_plans_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_pricing_with_countdown_plans" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_pricing_with_countdown" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_testimonials2_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_testimonials2" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "homepage_blocks_agenda_items" CASCADE;
  DROP TABLE "homepage_blocks_agenda" CASCADE;
  DROP TABLE "homepage_blocks_lecturers_lecturers" CASCADE;
  DROP TABLE "homepage_blocks_lecturers" CASCADE;
  DROP TABLE "homepage_blocks_timeline_steps" CASCADE;
  DROP TABLE "homepage_blocks_timeline" CASCADE;
  DROP TABLE "homepage_blocks_who_is_the_conf_for_items" CASCADE;
  DROP TABLE "homepage_blocks_who_is_the_conf_for" CASCADE;
  DROP TABLE "homepage_blocks_pricing_with_countdown_plans_features" CASCADE;
  DROP TABLE "homepage_blocks_pricing_with_countdown_plans" CASCADE;
  DROP TABLE "homepage_blocks_pricing_with_countdown" CASCADE;
  DROP TABLE "homepage_blocks_testimonials2_testimonials" CASCADE;
  DROP TABLE "homepage_blocks_testimonials2" CASCADE;
  DROP TABLE "_homepage_v_blocks_agenda_items" CASCADE;
  DROP TABLE "_homepage_v_blocks_agenda" CASCADE;
  DROP TABLE "_homepage_v_blocks_lecturers_lecturers" CASCADE;
  DROP TABLE "_homepage_v_blocks_lecturers" CASCADE;
  DROP TABLE "_homepage_v_blocks_timeline_steps" CASCADE;
  DROP TABLE "_homepage_v_blocks_timeline" CASCADE;
  DROP TABLE "_homepage_v_blocks_who_is_the_conf_for_items" CASCADE;
  DROP TABLE "_homepage_v_blocks_who_is_the_conf_for" CASCADE;
  DROP TABLE "_homepage_v_blocks_pricing_with_countdown_plans_features" CASCADE;
  DROP TABLE "_homepage_v_blocks_pricing_with_countdown_plans" CASCADE;
  DROP TABLE "_homepage_v_blocks_pricing_with_countdown" CASCADE;
  DROP TABLE "_homepage_v_blocks_testimonials2_testimonials" CASCADE;
  DROP TABLE "_homepage_v_blocks_testimonials2" CASCADE;
  ALTER TABLE "homepage" ADD COLUMN "marketing_sections_id" uuid;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_marketing_sections_id" uuid;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_marketing_sections_id_marketing_sections_id_fk" FOREIGN KEY ("marketing_sections_id") REFERENCES "public"."marketing_sections"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v" ADD CONSTRAINT "_homepage_v_version_marketing_sections_id_marketing_sections_id_fk" FOREIGN KEY ("version_marketing_sections_id") REFERENCES "public"."marketing_sections"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "homepage_marketing_sections_idx" ON "homepage" USING btree ("marketing_sections_id");
  CREATE INDEX "_homepage_v_version_version_marketing_sections_idx" ON "_homepage_v" USING btree ("version_marketing_sections_id");
  ALTER TABLE "homepage" DROP COLUMN "cta_text";
  ALTER TABLE "homepage" DROP COLUMN "email_template_id";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_cta_text";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_email_template_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "homepage_blocks_agenda_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "homepage_blocks_agenda" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_lecturers_lecturers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"bio" varchar,
  	"image_id" uuid
  );
  
  CREATE TABLE "homepage_blocks_lecturers" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subheading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_timeline_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "homepage_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_who_is_the_conf_for_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" uuid,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "homepage_blocks_who_is_the_conf_for" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subheading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_pricing_with_countdown_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar
  );
  
  CREATE TABLE "homepage_blocks_pricing_with_countdown_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"original_price" varchar,
  	"discounted_price" varchar,
  	"discount" varchar,
  	"description" varchar,
  	"active" boolean DEFAULT false,
  	"bonus" varchar
  );
  
  CREATE TABLE "homepage_blocks_pricing_with_countdown" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"subheading" varchar,
  	"sale_end" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_testimonials2_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"client_name" varchar,
  	"client_img_id" uuid,
  	"work_title" varchar,
  	"title" varchar,
  	"badge" varchar,
  	"card_img_id" uuid
  );
  
  CREATE TABLE "homepage_blocks_testimonials2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subheading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_agenda_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_agenda" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_lecturers_lecturers" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"bio" varchar,
  	"image_id" uuid,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_lecturers" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"subheading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_timeline_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"icon" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_who_is_the_conf_for_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"icon_id" uuid,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_who_is_the_conf_for" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"subheading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_pricing_with_countdown_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"feature" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_pricing_with_countdown_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"original_price" varchar,
  	"discounted_price" varchar,
  	"discount" varchar,
  	"description" varchar,
  	"active" boolean DEFAULT false,
  	"bonus" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_pricing_with_countdown" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"subheading" varchar,
  	"sale_end" timestamp(3) with time zone,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_testimonials2_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"quote" varchar,
  	"client_name" varchar,
  	"client_img_id" uuid,
  	"work_title" varchar,
  	"title" varchar,
  	"badge" varchar,
  	"card_img_id" uuid,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_testimonials2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"subheading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "homepage" DROP CONSTRAINT "homepage_marketing_sections_id_marketing_sections_id_fk";
  
  ALTER TABLE "_homepage_v" DROP CONSTRAINT "_homepage_v_version_marketing_sections_id_marketing_sections_id_fk";
  
  DROP INDEX "homepage_marketing_sections_idx";
  DROP INDEX "_homepage_v_version_version_marketing_sections_idx";
  ALTER TABLE "homepage" ADD COLUMN "cta_text" varchar;
  ALTER TABLE "homepage" ADD COLUMN "email_template_id" varchar;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_cta_text" varchar;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_email_template_id" varchar;
  ALTER TABLE "homepage_blocks_agenda_items" ADD CONSTRAINT "homepage_blocks_agenda_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_agenda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_agenda" ADD CONSTRAINT "homepage_blocks_agenda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_lecturers_lecturers" ADD CONSTRAINT "homepage_blocks_lecturers_lecturers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_lecturers_lecturers" ADD CONSTRAINT "homepage_blocks_lecturers_lecturers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_lecturers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_lecturers" ADD CONSTRAINT "homepage_blocks_lecturers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_timeline_steps" ADD CONSTRAINT "homepage_blocks_timeline_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_timeline" ADD CONSTRAINT "homepage_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_who_is_the_conf_for_items" ADD CONSTRAINT "homepage_blocks_who_is_the_conf_for_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_who_is_the_conf_for_items" ADD CONSTRAINT "homepage_blocks_who_is_the_conf_for_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_who_is_the_conf_for"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_who_is_the_conf_for" ADD CONSTRAINT "homepage_blocks_who_is_the_conf_for_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_pricing_with_countdown_plans_features" ADD CONSTRAINT "homepage_blocks_pricing_with_countdown_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_pricing_with_countdown_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_pricing_with_countdown_plans" ADD CONSTRAINT "homepage_blocks_pricing_with_countdown_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_pricing_with_countdown"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_pricing_with_countdown" ADD CONSTRAINT "homepage_blocks_pricing_with_countdown_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_testimonials2_testimonials" ADD CONSTRAINT "homepage_blocks_testimonials2_testimonials_client_img_id_media_id_fk" FOREIGN KEY ("client_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_testimonials2_testimonials" ADD CONSTRAINT "homepage_blocks_testimonials2_testimonials_card_img_id_media_id_fk" FOREIGN KEY ("card_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_testimonials2_testimonials" ADD CONSTRAINT "homepage_blocks_testimonials2_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_testimonials2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_testimonials2" ADD CONSTRAINT "homepage_blocks_testimonials2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_agenda_items" ADD CONSTRAINT "_homepage_v_blocks_agenda_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_agenda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_agenda" ADD CONSTRAINT "_homepage_v_blocks_agenda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_lecturers_lecturers" ADD CONSTRAINT "_homepage_v_blocks_lecturers_lecturers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_lecturers_lecturers" ADD CONSTRAINT "_homepage_v_blocks_lecturers_lecturers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_lecturers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_lecturers" ADD CONSTRAINT "_homepage_v_blocks_lecturers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_timeline_steps" ADD CONSTRAINT "_homepage_v_blocks_timeline_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_timeline" ADD CONSTRAINT "_homepage_v_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_who_is_the_conf_for_items" ADD CONSTRAINT "_homepage_v_blocks_who_is_the_conf_for_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_who_is_the_conf_for_items" ADD CONSTRAINT "_homepage_v_blocks_who_is_the_conf_for_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_who_is_the_conf_for"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_who_is_the_conf_for" ADD CONSTRAINT "_homepage_v_blocks_who_is_the_conf_for_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_pricing_with_countdown_plans_features" ADD CONSTRAINT "_homepage_v_blocks_pricing_with_countdown_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_pricing_with_countdown_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_pricing_with_countdown_plans" ADD CONSTRAINT "_homepage_v_blocks_pricing_with_countdown_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_pricing_with_countdown"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_pricing_with_countdown" ADD CONSTRAINT "_homepage_v_blocks_pricing_with_countdown_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_testimonials2_testimonials" ADD CONSTRAINT "_homepage_v_blocks_testimonials2_testimonials_client_img_id_media_id_fk" FOREIGN KEY ("client_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_testimonials2_testimonials" ADD CONSTRAINT "_homepage_v_blocks_testimonials2_testimonials_card_img_id_media_id_fk" FOREIGN KEY ("card_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_testimonials2_testimonials" ADD CONSTRAINT "_homepage_v_blocks_testimonials2_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_testimonials2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_testimonials2" ADD CONSTRAINT "_homepage_v_blocks_testimonials2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_blocks_agenda_items_order_idx" ON "homepage_blocks_agenda_items" USING btree ("_order");
  CREATE INDEX "homepage_blocks_agenda_items_parent_id_idx" ON "homepage_blocks_agenda_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_agenda_order_idx" ON "homepage_blocks_agenda" USING btree ("_order");
  CREATE INDEX "homepage_blocks_agenda_parent_id_idx" ON "homepage_blocks_agenda" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_agenda_path_idx" ON "homepage_blocks_agenda" USING btree ("_path");
  CREATE INDEX "homepage_blocks_lecturers_lecturers_order_idx" ON "homepage_blocks_lecturers_lecturers" USING btree ("_order");
  CREATE INDEX "homepage_blocks_lecturers_lecturers_parent_id_idx" ON "homepage_blocks_lecturers_lecturers" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_lecturers_lecturers_image_idx" ON "homepage_blocks_lecturers_lecturers" USING btree ("image_id");
  CREATE INDEX "homepage_blocks_lecturers_order_idx" ON "homepage_blocks_lecturers" USING btree ("_order");
  CREATE INDEX "homepage_blocks_lecturers_parent_id_idx" ON "homepage_blocks_lecturers" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_lecturers_path_idx" ON "homepage_blocks_lecturers" USING btree ("_path");
  CREATE INDEX "homepage_blocks_timeline_steps_order_idx" ON "homepage_blocks_timeline_steps" USING btree ("_order");
  CREATE INDEX "homepage_blocks_timeline_steps_parent_id_idx" ON "homepage_blocks_timeline_steps" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_timeline_order_idx" ON "homepage_blocks_timeline" USING btree ("_order");
  CREATE INDEX "homepage_blocks_timeline_parent_id_idx" ON "homepage_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_timeline_path_idx" ON "homepage_blocks_timeline" USING btree ("_path");
  CREATE INDEX "homepage_blocks_who_is_the_conf_for_items_order_idx" ON "homepage_blocks_who_is_the_conf_for_items" USING btree ("_order");
  CREATE INDEX "homepage_blocks_who_is_the_conf_for_items_parent_id_idx" ON "homepage_blocks_who_is_the_conf_for_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_who_is_the_conf_for_items_icon_idx" ON "homepage_blocks_who_is_the_conf_for_items" USING btree ("icon_id");
  CREATE INDEX "homepage_blocks_who_is_the_conf_for_order_idx" ON "homepage_blocks_who_is_the_conf_for" USING btree ("_order");
  CREATE INDEX "homepage_blocks_who_is_the_conf_for_parent_id_idx" ON "homepage_blocks_who_is_the_conf_for" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_who_is_the_conf_for_path_idx" ON "homepage_blocks_who_is_the_conf_for" USING btree ("_path");
  CREATE INDEX "homepage_blocks_pricing_with_countdown_plans_features_order_idx" ON "homepage_blocks_pricing_with_countdown_plans_features" USING btree ("_order");
  CREATE INDEX "homepage_blocks_pricing_with_countdown_plans_features_parent_id_idx" ON "homepage_blocks_pricing_with_countdown_plans_features" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_pricing_with_countdown_plans_order_idx" ON "homepage_blocks_pricing_with_countdown_plans" USING btree ("_order");
  CREATE INDEX "homepage_blocks_pricing_with_countdown_plans_parent_id_idx" ON "homepage_blocks_pricing_with_countdown_plans" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_pricing_with_countdown_order_idx" ON "homepage_blocks_pricing_with_countdown" USING btree ("_order");
  CREATE INDEX "homepage_blocks_pricing_with_countdown_parent_id_idx" ON "homepage_blocks_pricing_with_countdown" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_pricing_with_countdown_path_idx" ON "homepage_blocks_pricing_with_countdown" USING btree ("_path");
  CREATE INDEX "homepage_blocks_testimonials2_testimonials_order_idx" ON "homepage_blocks_testimonials2_testimonials" USING btree ("_order");
  CREATE INDEX "homepage_blocks_testimonials2_testimonials_parent_id_idx" ON "homepage_blocks_testimonials2_testimonials" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_testimonials2_testimonials_client_img_idx" ON "homepage_blocks_testimonials2_testimonials" USING btree ("client_img_id");
  CREATE INDEX "homepage_blocks_testimonials2_testimonials_card_img_idx" ON "homepage_blocks_testimonials2_testimonials" USING btree ("card_img_id");
  CREATE INDEX "homepage_blocks_testimonials2_order_idx" ON "homepage_blocks_testimonials2" USING btree ("_order");
  CREATE INDEX "homepage_blocks_testimonials2_parent_id_idx" ON "homepage_blocks_testimonials2" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_testimonials2_path_idx" ON "homepage_blocks_testimonials2" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_agenda_items_order_idx" ON "_homepage_v_blocks_agenda_items" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_agenda_items_parent_id_idx" ON "_homepage_v_blocks_agenda_items" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_agenda_order_idx" ON "_homepage_v_blocks_agenda" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_agenda_parent_id_idx" ON "_homepage_v_blocks_agenda" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_agenda_path_idx" ON "_homepage_v_blocks_agenda" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_lecturers_lecturers_order_idx" ON "_homepage_v_blocks_lecturers_lecturers" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_lecturers_lecturers_parent_id_idx" ON "_homepage_v_blocks_lecturers_lecturers" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_lecturers_lecturers_image_idx" ON "_homepage_v_blocks_lecturers_lecturers" USING btree ("image_id");
  CREATE INDEX "_homepage_v_blocks_lecturers_order_idx" ON "_homepage_v_blocks_lecturers" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_lecturers_parent_id_idx" ON "_homepage_v_blocks_lecturers" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_lecturers_path_idx" ON "_homepage_v_blocks_lecturers" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_timeline_steps_order_idx" ON "_homepage_v_blocks_timeline_steps" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_timeline_steps_parent_id_idx" ON "_homepage_v_blocks_timeline_steps" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_timeline_order_idx" ON "_homepage_v_blocks_timeline" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_timeline_parent_id_idx" ON "_homepage_v_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_timeline_path_idx" ON "_homepage_v_blocks_timeline" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_who_is_the_conf_for_items_order_idx" ON "_homepage_v_blocks_who_is_the_conf_for_items" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_who_is_the_conf_for_items_parent_id_idx" ON "_homepage_v_blocks_who_is_the_conf_for_items" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_who_is_the_conf_for_items_icon_idx" ON "_homepage_v_blocks_who_is_the_conf_for_items" USING btree ("icon_id");
  CREATE INDEX "_homepage_v_blocks_who_is_the_conf_for_order_idx" ON "_homepage_v_blocks_who_is_the_conf_for" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_who_is_the_conf_for_parent_id_idx" ON "_homepage_v_blocks_who_is_the_conf_for" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_who_is_the_conf_for_path_idx" ON "_homepage_v_blocks_who_is_the_conf_for" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_pricing_with_countdown_plans_features_order_idx" ON "_homepage_v_blocks_pricing_with_countdown_plans_features" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_pricing_with_countdown_plans_features_parent_id_idx" ON "_homepage_v_blocks_pricing_with_countdown_plans_features" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_pricing_with_countdown_plans_order_idx" ON "_homepage_v_blocks_pricing_with_countdown_plans" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_pricing_with_countdown_plans_parent_id_idx" ON "_homepage_v_blocks_pricing_with_countdown_plans" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_pricing_with_countdown_order_idx" ON "_homepage_v_blocks_pricing_with_countdown" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_pricing_with_countdown_parent_id_idx" ON "_homepage_v_blocks_pricing_with_countdown" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_pricing_with_countdown_path_idx" ON "_homepage_v_blocks_pricing_with_countdown" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_testimonials2_testimonials_order_idx" ON "_homepage_v_blocks_testimonials2_testimonials" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_testimonials2_testimonials_parent_id_idx" ON "_homepage_v_blocks_testimonials2_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_testimonials2_testimonials_client_img_idx" ON "_homepage_v_blocks_testimonials2_testimonials" USING btree ("client_img_id");
  CREATE INDEX "_homepage_v_blocks_testimonials2_testimonials_card_img_idx" ON "_homepage_v_blocks_testimonials2_testimonials" USING btree ("card_img_id");
  CREATE INDEX "_homepage_v_blocks_testimonials2_order_idx" ON "_homepage_v_blocks_testimonials2" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_testimonials2_parent_id_idx" ON "_homepage_v_blocks_testimonials2" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_testimonials2_path_idx" ON "_homepage_v_blocks_testimonials2" USING btree ("_path");
  ALTER TABLE "homepage" DROP COLUMN "marketing_sections_id";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_marketing_sections_id";`)
}
