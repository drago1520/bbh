import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_homepage_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__homepage_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "homepage_blocks_q_a_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_faq_chess_mate" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Често Задавани Въпроси',
  	"helper_text" jsonb DEFAULT '{"root":{"children":[{"type":"paragraph","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Не откри твоя въпрос? ","type":"text","version":1},{"type":"link","url":"https://your-link-url.com","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Свържи се с нас","type":"text","version":1}],"version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" и ще го добавим!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'::jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_gallery7" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"descr" jsonb,
  	"cta_text" varchar,
  	"cta_href" varchar,
  	"rotate_speed" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_testimonial25_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" uuid,
  	"quote" varchar,
  	"author" varchar,
  	"role" varchar,
  	"company" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_testimonial25_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"helper_text" varchar,
  	"cta_text" varchar,
  	"cta_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_statistic" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" uuid,
  	"value" numeric,
  	"suffix" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_statistics" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
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
  
  CREATE TABLE "homepage" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"cta_text" varchar,
  	"subheading" varchar,
  	"email_template_id" varchar,
  	"hero_img_id" uuid,
  	"meta_title" varchar,
  	"meta_image_id" uuid,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_homepage_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "homepage_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" uuid
  );
  
  CREATE TABLE "_homepage_v_blocks_q_a_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_faq_chess_mate" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar DEFAULT 'Често Задавани Въпроси',
  	"helper_text" jsonb DEFAULT '{"root":{"children":[{"type":"paragraph","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Не откри твоя въпрос? ","type":"text","version":1},{"type":"link","url":"https://your-link-url.com","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Свържи се с нас","type":"text","version":1}],"version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" и ще го добавим!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'::jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_gallery7" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"heading" varchar,
  	"descr" jsonb,
  	"cta_text" varchar,
  	"cta_href" varchar,
  	"rotate_speed" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_testimonial25_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"image_id" uuid,
  	"quote" varchar,
  	"author" varchar,
  	"role" varchar,
  	"company" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_testimonial25_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"helper_text" varchar,
  	"cta_text" varchar,
  	"cta_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_statistic" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"icon_id" uuid,
  	"value" numeric,
  	"suffix" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_homepage_v_blocks_statistics" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
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
  
  CREATE TABLE "_homepage_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_cta_text" varchar,
  	"version_subheading" varchar,
  	"version_email_template_id" varchar,
  	"version_hero_img_id" uuid,
  	"version_meta_title" varchar,
  	"version_meta_image_id" uuid,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__homepage_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_homepage_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" uuid
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "homepage_id" uuid;
  ALTER TABLE "homepage_blocks_q_a_block" ADD CONSTRAINT "homepage_blocks_q_a_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_faq_chess_mate" ADD CONSTRAINT "homepage_blocks_faq_chess_mate_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_gallery7" ADD CONSTRAINT "homepage_blocks_gallery7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_testimonial25_card_block" ADD CONSTRAINT "homepage_blocks_testimonial25_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_testimonial25_card_block" ADD CONSTRAINT "homepage_blocks_testimonial25_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_testimonial25_block" ADD CONSTRAINT "homepage_blocks_testimonial25_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_statistic" ADD CONSTRAINT "homepage_blocks_statistic_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_statistic" ADD CONSTRAINT "homepage_blocks_statistic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_statistics" ADD CONSTRAINT "homepage_blocks_statistics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_hero_img_id_media_id_fk" FOREIGN KEY ("hero_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_q_a_block" ADD CONSTRAINT "_homepage_v_blocks_q_a_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_faq_chess_mate" ADD CONSTRAINT "_homepage_v_blocks_faq_chess_mate_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_gallery7" ADD CONSTRAINT "_homepage_v_blocks_gallery7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_testimonial25_card_block" ADD CONSTRAINT "_homepage_v_blocks_testimonial25_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_testimonial25_card_block" ADD CONSTRAINT "_homepage_v_blocks_testimonial25_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_testimonial25_block" ADD CONSTRAINT "_homepage_v_blocks_testimonial25_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_statistic" ADD CONSTRAINT "_homepage_v_blocks_statistic_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_statistic" ADD CONSTRAINT "_homepage_v_blocks_statistic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_statistics" ADD CONSTRAINT "_homepage_v_blocks_statistics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_homepage_v" ADD CONSTRAINT "_homepage_v_parent_id_homepage_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."homepage"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v" ADD CONSTRAINT "_homepage_v_version_hero_img_id_media_id_fk" FOREIGN KEY ("version_hero_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v" ADD CONSTRAINT "_homepage_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_blocks_q_a_block_order_idx" ON "homepage_blocks_q_a_block" USING btree ("_order");
  CREATE INDEX "homepage_blocks_q_a_block_parent_id_idx" ON "homepage_blocks_q_a_block" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_q_a_block_path_idx" ON "homepage_blocks_q_a_block" USING btree ("_path");
  CREATE INDEX "homepage_blocks_faq_chess_mate_order_idx" ON "homepage_blocks_faq_chess_mate" USING btree ("_order");
  CREATE INDEX "homepage_blocks_faq_chess_mate_parent_id_idx" ON "homepage_blocks_faq_chess_mate" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_faq_chess_mate_path_idx" ON "homepage_blocks_faq_chess_mate" USING btree ("_path");
  CREATE INDEX "homepage_blocks_gallery7_order_idx" ON "homepage_blocks_gallery7" USING btree ("_order");
  CREATE INDEX "homepage_blocks_gallery7_parent_id_idx" ON "homepage_blocks_gallery7" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_gallery7_path_idx" ON "homepage_blocks_gallery7" USING btree ("_path");
  CREATE INDEX "homepage_blocks_testimonial25_card_block_order_idx" ON "homepage_blocks_testimonial25_card_block" USING btree ("_order");
  CREATE INDEX "homepage_blocks_testimonial25_card_block_parent_id_idx" ON "homepage_blocks_testimonial25_card_block" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_testimonial25_card_block_path_idx" ON "homepage_blocks_testimonial25_card_block" USING btree ("_path");
  CREATE INDEX "homepage_blocks_testimonial25_card_block_image_idx" ON "homepage_blocks_testimonial25_card_block" USING btree ("image_id");
  CREATE INDEX "homepage_blocks_testimonial25_block_order_idx" ON "homepage_blocks_testimonial25_block" USING btree ("_order");
  CREATE INDEX "homepage_blocks_testimonial25_block_parent_id_idx" ON "homepage_blocks_testimonial25_block" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_testimonial25_block_path_idx" ON "homepage_blocks_testimonial25_block" USING btree ("_path");
  CREATE INDEX "homepage_blocks_statistic_order_idx" ON "homepage_blocks_statistic" USING btree ("_order");
  CREATE INDEX "homepage_blocks_statistic_parent_id_idx" ON "homepage_blocks_statistic" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_statistic_path_idx" ON "homepage_blocks_statistic" USING btree ("_path");
  CREATE INDEX "homepage_blocks_statistic_icon_idx" ON "homepage_blocks_statistic" USING btree ("icon_id");
  CREATE INDEX "homepage_blocks_statistics_order_idx" ON "homepage_blocks_statistics" USING btree ("_order");
  CREATE INDEX "homepage_blocks_statistics_parent_id_idx" ON "homepage_blocks_statistics" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_statistics_path_idx" ON "homepage_blocks_statistics" USING btree ("_path");
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
  CREATE INDEX "homepage_hero_img_idx" ON "homepage" USING btree ("hero_img_id");
  CREATE INDEX "homepage_meta_meta_image_idx" ON "homepage" USING btree ("meta_image_id");
  CREATE INDEX "homepage_slug_idx" ON "homepage" USING btree ("slug");
  CREATE INDEX "homepage_updated_at_idx" ON "homepage" USING btree ("updated_at");
  CREATE INDEX "homepage_created_at_idx" ON "homepage" USING btree ("created_at");
  CREATE INDEX "homepage__status_idx" ON "homepage" USING btree ("_status");
  CREATE INDEX "homepage_rels_order_idx" ON "homepage_rels" USING btree ("order");
  CREATE INDEX "homepage_rels_parent_idx" ON "homepage_rels" USING btree ("parent_id");
  CREATE INDEX "homepage_rels_path_idx" ON "homepage_rels" USING btree ("path");
  CREATE INDEX "homepage_rels_media_id_idx" ON "homepage_rels" USING btree ("media_id");
  CREATE INDEX "_homepage_v_blocks_q_a_block_order_idx" ON "_homepage_v_blocks_q_a_block" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_q_a_block_parent_id_idx" ON "_homepage_v_blocks_q_a_block" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_q_a_block_path_idx" ON "_homepage_v_blocks_q_a_block" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_faq_chess_mate_order_idx" ON "_homepage_v_blocks_faq_chess_mate" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_faq_chess_mate_parent_id_idx" ON "_homepage_v_blocks_faq_chess_mate" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_faq_chess_mate_path_idx" ON "_homepage_v_blocks_faq_chess_mate" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_gallery7_order_idx" ON "_homepage_v_blocks_gallery7" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_gallery7_parent_id_idx" ON "_homepage_v_blocks_gallery7" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_gallery7_path_idx" ON "_homepage_v_blocks_gallery7" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_testimonial25_card_block_order_idx" ON "_homepage_v_blocks_testimonial25_card_block" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_testimonial25_card_block_parent_id_idx" ON "_homepage_v_blocks_testimonial25_card_block" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_testimonial25_card_block_path_idx" ON "_homepage_v_blocks_testimonial25_card_block" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_testimonial25_card_block_image_idx" ON "_homepage_v_blocks_testimonial25_card_block" USING btree ("image_id");
  CREATE INDEX "_homepage_v_blocks_testimonial25_block_order_idx" ON "_homepage_v_blocks_testimonial25_block" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_testimonial25_block_parent_id_idx" ON "_homepage_v_blocks_testimonial25_block" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_testimonial25_block_path_idx" ON "_homepage_v_blocks_testimonial25_block" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_statistic_order_idx" ON "_homepage_v_blocks_statistic" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_statistic_parent_id_idx" ON "_homepage_v_blocks_statistic" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_statistic_path_idx" ON "_homepage_v_blocks_statistic" USING btree ("_path");
  CREATE INDEX "_homepage_v_blocks_statistic_icon_idx" ON "_homepage_v_blocks_statistic" USING btree ("icon_id");
  CREATE INDEX "_homepage_v_blocks_statistics_order_idx" ON "_homepage_v_blocks_statistics" USING btree ("_order");
  CREATE INDEX "_homepage_v_blocks_statistics_parent_id_idx" ON "_homepage_v_blocks_statistics" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_blocks_statistics_path_idx" ON "_homepage_v_blocks_statistics" USING btree ("_path");
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
  CREATE INDEX "_homepage_v_parent_idx" ON "_homepage_v" USING btree ("parent_id");
  CREATE INDEX "_homepage_v_version_version_hero_img_idx" ON "_homepage_v" USING btree ("version_hero_img_id");
  CREATE INDEX "_homepage_v_version_meta_version_meta_image_idx" ON "_homepage_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_homepage_v_version_version_slug_idx" ON "_homepage_v" USING btree ("version_slug");
  CREATE INDEX "_homepage_v_version_version_updated_at_idx" ON "_homepage_v" USING btree ("version_updated_at");
  CREATE INDEX "_homepage_v_version_version_created_at_idx" ON "_homepage_v" USING btree ("version_created_at");
  CREATE INDEX "_homepage_v_version_version__status_idx" ON "_homepage_v" USING btree ("version__status");
  CREATE INDEX "_homepage_v_created_at_idx" ON "_homepage_v" USING btree ("created_at");
  CREATE INDEX "_homepage_v_updated_at_idx" ON "_homepage_v" USING btree ("updated_at");
  CREATE INDEX "_homepage_v_latest_idx" ON "_homepage_v" USING btree ("latest");
  CREATE INDEX "_homepage_v_autosave_idx" ON "_homepage_v" USING btree ("autosave");
  CREATE INDEX "_homepage_v_rels_order_idx" ON "_homepage_v_rels" USING btree ("order");
  CREATE INDEX "_homepage_v_rels_parent_idx" ON "_homepage_v_rels" USING btree ("parent_id");
  CREATE INDEX "_homepage_v_rels_path_idx" ON "_homepage_v_rels" USING btree ("path");
  CREATE INDEX "_homepage_v_rels_media_id_idx" ON "_homepage_v_rels" USING btree ("media_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_homepage_fk" FOREIGN KEY ("homepage_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_homepage_id_idx" ON "payload_locked_documents_rels" USING btree ("homepage_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage_blocks_q_a_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_faq_chess_mate" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_gallery7" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_testimonial25_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_testimonial25_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_statistic" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_statistics" DISABLE ROW LEVEL SECURITY;
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
  ALTER TABLE "homepage" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_q_a_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_faq_chess_mate" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_gallery7" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_testimonial25_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_testimonial25_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_statistic" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_statistics" DISABLE ROW LEVEL SECURITY;
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
  ALTER TABLE "_homepage_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "homepage_blocks_q_a_block" CASCADE;
  DROP TABLE "homepage_blocks_faq_chess_mate" CASCADE;
  DROP TABLE "homepage_blocks_gallery7" CASCADE;
  DROP TABLE "homepage_blocks_testimonial25_card_block" CASCADE;
  DROP TABLE "homepage_blocks_testimonial25_block" CASCADE;
  DROP TABLE "homepage_blocks_statistic" CASCADE;
  DROP TABLE "homepage_blocks_statistics" CASCADE;
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
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "homepage_rels" CASCADE;
  DROP TABLE "_homepage_v_blocks_q_a_block" CASCADE;
  DROP TABLE "_homepage_v_blocks_faq_chess_mate" CASCADE;
  DROP TABLE "_homepage_v_blocks_gallery7" CASCADE;
  DROP TABLE "_homepage_v_blocks_testimonial25_card_block" CASCADE;
  DROP TABLE "_homepage_v_blocks_testimonial25_block" CASCADE;
  DROP TABLE "_homepage_v_blocks_statistic" CASCADE;
  DROP TABLE "_homepage_v_blocks_statistics" CASCADE;
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
  DROP TABLE "_homepage_v" CASCADE;
  DROP TABLE "_homepage_v_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_homepage_fk";
  
  DROP INDEX "payload_locked_documents_rels_homepage_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "homepage_id";
  DROP TYPE "public"."enum_homepage_status";
  DROP TYPE "public"."enum__homepage_v_version_status";`)
}
