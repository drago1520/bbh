import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_posts_blocks_high_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_high_impact_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_posts_blocks_medium_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_medium_impact_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_posts_blocks_low_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_low_impact_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_posts_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_posts_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_posts_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_posts_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_posts_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__posts_v_blocks_high_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_high_impact_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__posts_v_blocks_medium_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_medium_impact_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__posts_v_blocks_low_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_low_impact_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__posts_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__posts_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__posts_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__posts_v_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TABLE IF NOT EXISTS "pages_blocks_q_a_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq_chess_mate" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Често Задавани Въпроси',
  	"helper_text" jsonb DEFAULT '{"root":{"children":[{"type":"paragraph","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Не откри твоя въпрос? ","type":"text","version":1},{"type":"link","url":"https://your-link-url.com","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Свържи се с нас","type":"text","version":1}],"version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" и ще го добавим!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'::jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_q_a_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_chess_mate" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar DEFAULT 'Често Задавани Въпроси',
  	"helper_text" jsonb DEFAULT '{"root":{"children":[{"type":"paragraph","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Не откри твоя въпрос? ","type":"text","version":1},{"type":"link","url":"https://your-link-url.com","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Свържи се с нас","type":"text","version":1}],"version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" и ще го добавим!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'::jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_high_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_posts_blocks_high_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_posts_blocks_high_impact_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_high_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_medium_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_posts_blocks_medium_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_posts_blocks_medium_impact_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_medium_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_low_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_posts_blocks_low_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_posts_blocks_low_impact_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_low_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_posts_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_posts_blocks_cta_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_posts_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_posts_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_posts_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_posts_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_posts_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_q_a_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts_blocks_faq_chess_mate" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Често Задавани Въпроси',
  	"helper_text" jsonb DEFAULT '{"root":{"children":[{"type":"paragraph","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Не откри твоя въпрос? ","type":"text","version":1},{"type":"link","url":"https://your-link-url.com","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Свържи се с нас","type":"text","version":1}],"version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" и ще го добавим!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'::jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_high_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "enum__posts_v_blocks_high_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__posts_v_blocks_high_impact_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_high_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"rich_text" jsonb,
  	"media_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_medium_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "enum__posts_v_blocks_medium_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__posts_v_blocks_medium_impact_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_medium_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"rich_text" jsonb,
  	"media_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_low_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "enum__posts_v_blocks_low_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__posts_v_blocks_low_impact_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_low_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "enum__posts_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__posts_v_blocks_cta_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"size" "enum__posts_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__posts_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__posts_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"media_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__posts_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__posts_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_q_a_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_blocks_faq_chess_mate" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar DEFAULT 'Често Задавани Въпроси',
  	"helper_text" jsonb DEFAULT '{"root":{"children":[{"type":"paragraph","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Не откри твоя въпрос? ","type":"text","version":1},{"type":"link","url":"https://your-link-url.com","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Свържи се с нас","type":"text","version":1}],"version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" и ще го добавим!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'::jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "events_blocks_q_a_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "events_blocks_faq_chess_mate" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Често Задавани Въпроси' NOT NULL,
  	"helper_text" jsonb DEFAULT '{"root":{"children":[{"type":"paragraph","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Не откри твоя въпрос? ","type":"text","version":1},{"type":"link","url":"https://your-link-url.com","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Свържи се с нас","type":"text","version":1}],"version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" и ще го добавим!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'::jsonb NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_high_impact_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_high_impact_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_medium_impact_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_medium_impact_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_low_impact_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_low_impact_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_media_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_archive" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_high_impact_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_high_impact_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_medium_impact_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_medium_impact_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_low_impact_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_low_impact_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_media_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_archive" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_content_with_media" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_high_impact_hero_links" CASCADE;
  DROP TABLE "pages_blocks_high_impact_hero" CASCADE;
  DROP TABLE "pages_blocks_medium_impact_hero_links" CASCADE;
  DROP TABLE "pages_blocks_medium_impact_hero" CASCADE;
  DROP TABLE "pages_blocks_low_impact_hero_links" CASCADE;
  DROP TABLE "pages_blocks_low_impact_hero" CASCADE;
  DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_high_impact_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_high_impact_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_medium_impact_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_medium_impact_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_low_impact_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_low_impact_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "events_blocks_content_with_media" CASCADE;
  ALTER TABLE "posts_rels" ADD COLUMN "pages_id" uuid;
  ALTER TABLE "_posts_v_rels" ADD COLUMN "pages_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_q_a_block" ADD CONSTRAINT "pages_blocks_q_a_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_chess_mate" ADD CONSTRAINT "pages_blocks_faq_chess_mate_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_q_a_block" ADD CONSTRAINT "_pages_v_blocks_q_a_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_chess_mate" ADD CONSTRAINT "_pages_v_blocks_faq_chess_mate_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_high_impact_hero_links" ADD CONSTRAINT "posts_blocks_high_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_high_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_high_impact_hero" ADD CONSTRAINT "posts_blocks_high_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_high_impact_hero" ADD CONSTRAINT "posts_blocks_high_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_medium_impact_hero_links" ADD CONSTRAINT "posts_blocks_medium_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_medium_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_medium_impact_hero" ADD CONSTRAINT "posts_blocks_medium_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_medium_impact_hero" ADD CONSTRAINT "posts_blocks_medium_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_low_impact_hero_links" ADD CONSTRAINT "posts_blocks_low_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_low_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_low_impact_hero" ADD CONSTRAINT "posts_blocks_low_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_cta_links" ADD CONSTRAINT "posts_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_cta" ADD CONSTRAINT "posts_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_content_columns" ADD CONSTRAINT "posts_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_content" ADD CONSTRAINT "posts_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_media_block" ADD CONSTRAINT "posts_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_media_block" ADD CONSTRAINT "posts_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_archive" ADD CONSTRAINT "posts_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_q_a_block" ADD CONSTRAINT "posts_blocks_q_a_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_blocks_faq_chess_mate" ADD CONSTRAINT "posts_blocks_faq_chess_mate_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_high_impact_hero_links" ADD CONSTRAINT "_posts_v_blocks_high_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_high_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_high_impact_hero" ADD CONSTRAINT "_posts_v_blocks_high_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_high_impact_hero" ADD CONSTRAINT "_posts_v_blocks_high_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_medium_impact_hero_links" ADD CONSTRAINT "_posts_v_blocks_medium_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_medium_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_medium_impact_hero" ADD CONSTRAINT "_posts_v_blocks_medium_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_medium_impact_hero" ADD CONSTRAINT "_posts_v_blocks_medium_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_low_impact_hero_links" ADD CONSTRAINT "_posts_v_blocks_low_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_low_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_low_impact_hero" ADD CONSTRAINT "_posts_v_blocks_low_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_cta_links" ADD CONSTRAINT "_posts_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_cta" ADD CONSTRAINT "_posts_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_content_columns" ADD CONSTRAINT "_posts_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_content" ADD CONSTRAINT "_posts_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_media_block" ADD CONSTRAINT "_posts_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_media_block" ADD CONSTRAINT "_posts_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_archive" ADD CONSTRAINT "_posts_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_q_a_block" ADD CONSTRAINT "_posts_v_blocks_q_a_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_blocks_faq_chess_mate" ADD CONSTRAINT "_posts_v_blocks_faq_chess_mate_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_blocks_q_a_block" ADD CONSTRAINT "events_blocks_q_a_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_blocks_faq_chess_mate" ADD CONSTRAINT "events_blocks_faq_chess_mate_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_q_a_block_order_idx" ON "pages_blocks_q_a_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_q_a_block_parent_id_idx" ON "pages_blocks_q_a_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_q_a_block_path_idx" ON "pages_blocks_q_a_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_chess_mate_order_idx" ON "pages_blocks_faq_chess_mate" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_chess_mate_parent_id_idx" ON "pages_blocks_faq_chess_mate" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_chess_mate_path_idx" ON "pages_blocks_faq_chess_mate" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_q_a_block_order_idx" ON "_pages_v_blocks_q_a_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_q_a_block_parent_id_idx" ON "_pages_v_blocks_q_a_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_q_a_block_path_idx" ON "_pages_v_blocks_q_a_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_chess_mate_order_idx" ON "_pages_v_blocks_faq_chess_mate" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_chess_mate_parent_id_idx" ON "_pages_v_blocks_faq_chess_mate" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_chess_mate_path_idx" ON "_pages_v_blocks_faq_chess_mate" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "posts_blocks_high_impact_hero_links_order_idx" ON "posts_blocks_high_impact_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_high_impact_hero_links_parent_id_idx" ON "posts_blocks_high_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_high_impact_hero_order_idx" ON "posts_blocks_high_impact_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_high_impact_hero_parent_id_idx" ON "posts_blocks_high_impact_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_high_impact_hero_path_idx" ON "posts_blocks_high_impact_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "posts_blocks_high_impact_hero_media_idx" ON "posts_blocks_high_impact_hero" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_medium_impact_hero_links_order_idx" ON "posts_blocks_medium_impact_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_medium_impact_hero_links_parent_id_idx" ON "posts_blocks_medium_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_medium_impact_hero_order_idx" ON "posts_blocks_medium_impact_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_medium_impact_hero_parent_id_idx" ON "posts_blocks_medium_impact_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_medium_impact_hero_path_idx" ON "posts_blocks_medium_impact_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "posts_blocks_medium_impact_hero_media_idx" ON "posts_blocks_medium_impact_hero" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_low_impact_hero_links_order_idx" ON "posts_blocks_low_impact_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_low_impact_hero_links_parent_id_idx" ON "posts_blocks_low_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_low_impact_hero_order_idx" ON "posts_blocks_low_impact_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_low_impact_hero_parent_id_idx" ON "posts_blocks_low_impact_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_low_impact_hero_path_idx" ON "posts_blocks_low_impact_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "posts_blocks_cta_links_order_idx" ON "posts_blocks_cta_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_cta_links_parent_id_idx" ON "posts_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_cta_order_idx" ON "posts_blocks_cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_cta_parent_id_idx" ON "posts_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_cta_path_idx" ON "posts_blocks_cta" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "posts_blocks_content_columns_order_idx" ON "posts_blocks_content_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_content_columns_parent_id_idx" ON "posts_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_content_order_idx" ON "posts_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_content_parent_id_idx" ON "posts_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_content_path_idx" ON "posts_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "posts_blocks_media_block_order_idx" ON "posts_blocks_media_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_media_block_parent_id_idx" ON "posts_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_media_block_path_idx" ON "posts_blocks_media_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "posts_blocks_media_block_media_idx" ON "posts_blocks_media_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_archive_order_idx" ON "posts_blocks_archive" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_archive_parent_id_idx" ON "posts_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_archive_path_idx" ON "posts_blocks_archive" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "posts_blocks_q_a_block_order_idx" ON "posts_blocks_q_a_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_q_a_block_parent_id_idx" ON "posts_blocks_q_a_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_q_a_block_path_idx" ON "posts_blocks_q_a_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "posts_blocks_faq_chess_mate_order_idx" ON "posts_blocks_faq_chess_mate" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_blocks_faq_chess_mate_parent_id_idx" ON "posts_blocks_faq_chess_mate" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_blocks_faq_chess_mate_path_idx" ON "posts_blocks_faq_chess_mate" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_high_impact_hero_links_order_idx" ON "_posts_v_blocks_high_impact_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_high_impact_hero_links_parent_id_idx" ON "_posts_v_blocks_high_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_high_impact_hero_order_idx" ON "_posts_v_blocks_high_impact_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_high_impact_hero_parent_id_idx" ON "_posts_v_blocks_high_impact_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_high_impact_hero_path_idx" ON "_posts_v_blocks_high_impact_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_high_impact_hero_media_idx" ON "_posts_v_blocks_high_impact_hero" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_medium_impact_hero_links_order_idx" ON "_posts_v_blocks_medium_impact_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_medium_impact_hero_links_parent_id_idx" ON "_posts_v_blocks_medium_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_medium_impact_hero_order_idx" ON "_posts_v_blocks_medium_impact_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_medium_impact_hero_parent_id_idx" ON "_posts_v_blocks_medium_impact_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_medium_impact_hero_path_idx" ON "_posts_v_blocks_medium_impact_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_medium_impact_hero_media_idx" ON "_posts_v_blocks_medium_impact_hero" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_low_impact_hero_links_order_idx" ON "_posts_v_blocks_low_impact_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_low_impact_hero_links_parent_id_idx" ON "_posts_v_blocks_low_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_low_impact_hero_order_idx" ON "_posts_v_blocks_low_impact_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_low_impact_hero_parent_id_idx" ON "_posts_v_blocks_low_impact_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_low_impact_hero_path_idx" ON "_posts_v_blocks_low_impact_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_cta_links_order_idx" ON "_posts_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_cta_links_parent_id_idx" ON "_posts_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_cta_order_idx" ON "_posts_v_blocks_cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_cta_parent_id_idx" ON "_posts_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_cta_path_idx" ON "_posts_v_blocks_cta" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_content_columns_order_idx" ON "_posts_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_content_columns_parent_id_idx" ON "_posts_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_content_order_idx" ON "_posts_v_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_content_parent_id_idx" ON "_posts_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_content_path_idx" ON "_posts_v_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_media_block_order_idx" ON "_posts_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_media_block_parent_id_idx" ON "_posts_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_media_block_path_idx" ON "_posts_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_media_block_media_idx" ON "_posts_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_archive_order_idx" ON "_posts_v_blocks_archive" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_archive_parent_id_idx" ON "_posts_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_archive_path_idx" ON "_posts_v_blocks_archive" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_q_a_block_order_idx" ON "_posts_v_blocks_q_a_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_q_a_block_parent_id_idx" ON "_posts_v_blocks_q_a_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_q_a_block_path_idx" ON "_posts_v_blocks_q_a_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_faq_chess_mate_order_idx" ON "_posts_v_blocks_faq_chess_mate" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_faq_chess_mate_parent_id_idx" ON "_posts_v_blocks_faq_chess_mate" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_blocks_faq_chess_mate_path_idx" ON "_posts_v_blocks_faq_chess_mate" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "events_blocks_q_a_block_order_idx" ON "events_blocks_q_a_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "events_blocks_q_a_block_parent_id_idx" ON "events_blocks_q_a_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "events_blocks_q_a_block_path_idx" ON "events_blocks_q_a_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "events_blocks_faq_chess_mate_order_idx" ON "events_blocks_faq_chess_mate" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "events_blocks_faq_chess_mate_parent_id_idx" ON "events_blocks_faq_chess_mate" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "events_blocks_faq_chess_mate_path_idx" ON "events_blocks_faq_chess_mate" USING btree ("_path");
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "posts_rels_pages_id_idx" ON "posts_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_pages_id_idx" ON "_posts_v_rels" USING btree ("pages_id");
  ALTER TABLE "events" DROP COLUMN IF EXISTS "speaker_quote";
  DROP TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_medium_impact_hero_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_medium_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_low_impact_hero_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_low_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_medium_impact_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_medium_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_low_impact_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_low_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum_events_blocks_content_with_media_text_position";`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_medium_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_medium_impact_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_low_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_low_impact_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_medium_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_medium_impact_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_low_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_low_impact_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum_events_blocks_content_with_media_text_position" AS ENUM('Left', 'Right');
  CREATE TABLE IF NOT EXISTS "pages_blocks_high_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_high_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_high_impact_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_high_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_medium_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_medium_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_medium_impact_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_medium_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_low_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_low_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_low_impact_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_low_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_pages_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_pages_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"categories_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_high_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "enum__pages_v_blocks_high_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_high_impact_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_high_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"rich_text" jsonb,
  	"media_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_medium_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "enum__pages_v_blocks_medium_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_medium_impact_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_medium_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"rich_text" jsonb,
  	"media_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_low_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "enum__pages_v_blocks_low_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_low_impact_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_low_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"media_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__pages_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__pages_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"categories_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "events_blocks_content_with_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"image_id" uuid,
  	"text_position" "enum_events_blocks_content_with_media_text_position",
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_q_a_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq_chess_mate" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_q_a_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq_chess_mate" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_high_impact_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_high_impact_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_medium_impact_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_medium_impact_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_low_impact_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_low_impact_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_content_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_media_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_archive" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_q_a_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_faq_chess_mate" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_high_impact_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_high_impact_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_medium_impact_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_medium_impact_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_low_impact_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_low_impact_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_content_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_media_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_archive" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_q_a_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_faq_chess_mate" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_q_a_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_faq_chess_mate" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_q_a_block" CASCADE;
  DROP TABLE "pages_blocks_faq_chess_mate" CASCADE;
  DROP TABLE "_pages_v_blocks_q_a_block" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_chess_mate" CASCADE;
  DROP TABLE "posts_blocks_high_impact_hero_links" CASCADE;
  DROP TABLE "posts_blocks_high_impact_hero" CASCADE;
  DROP TABLE "posts_blocks_medium_impact_hero_links" CASCADE;
  DROP TABLE "posts_blocks_medium_impact_hero" CASCADE;
  DROP TABLE "posts_blocks_low_impact_hero_links" CASCADE;
  DROP TABLE "posts_blocks_low_impact_hero" CASCADE;
  DROP TABLE "posts_blocks_cta_links" CASCADE;
  DROP TABLE "posts_blocks_cta" CASCADE;
  DROP TABLE "posts_blocks_content_columns" CASCADE;
  DROP TABLE "posts_blocks_content" CASCADE;
  DROP TABLE "posts_blocks_media_block" CASCADE;
  DROP TABLE "posts_blocks_archive" CASCADE;
  DROP TABLE "posts_blocks_q_a_block" CASCADE;
  DROP TABLE "posts_blocks_faq_chess_mate" CASCADE;
  DROP TABLE "_posts_v_blocks_high_impact_hero_links" CASCADE;
  DROP TABLE "_posts_v_blocks_high_impact_hero" CASCADE;
  DROP TABLE "_posts_v_blocks_medium_impact_hero_links" CASCADE;
  DROP TABLE "_posts_v_blocks_medium_impact_hero" CASCADE;
  DROP TABLE "_posts_v_blocks_low_impact_hero_links" CASCADE;
  DROP TABLE "_posts_v_blocks_low_impact_hero" CASCADE;
  DROP TABLE "_posts_v_blocks_cta_links" CASCADE;
  DROP TABLE "_posts_v_blocks_cta" CASCADE;
  DROP TABLE "_posts_v_blocks_content_columns" CASCADE;
  DROP TABLE "_posts_v_blocks_content" CASCADE;
  DROP TABLE "_posts_v_blocks_media_block" CASCADE;
  DROP TABLE "_posts_v_blocks_archive" CASCADE;
  DROP TABLE "_posts_v_blocks_q_a_block" CASCADE;
  DROP TABLE "_posts_v_blocks_faq_chess_mate" CASCADE;
  DROP TABLE "events_blocks_q_a_block" CASCADE;
  DROP TABLE "events_blocks_faq_chess_mate" CASCADE;
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_pages_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_pages_fk";
  
  DROP INDEX IF EXISTS "posts_rels_pages_id_idx";
  DROP INDEX IF EXISTS "_posts_v_rels_pages_id_idx";
  ALTER TABLE "events" ADD COLUMN "speaker_quote" varchar;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_high_impact_hero_links" ADD CONSTRAINT "pages_blocks_high_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_high_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_high_impact_hero" ADD CONSTRAINT "pages_blocks_high_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_high_impact_hero" ADD CONSTRAINT "pages_blocks_high_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_medium_impact_hero_links" ADD CONSTRAINT "pages_blocks_medium_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_medium_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_medium_impact_hero" ADD CONSTRAINT "pages_blocks_medium_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_medium_impact_hero" ADD CONSTRAINT "pages_blocks_medium_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_low_impact_hero_links" ADD CONSTRAINT "pages_blocks_low_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_low_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_low_impact_hero" ADD CONSTRAINT "pages_blocks_low_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_high_impact_hero_links" ADD CONSTRAINT "_pages_v_blocks_high_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_high_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_high_impact_hero" ADD CONSTRAINT "_pages_v_blocks_high_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_high_impact_hero" ADD CONSTRAINT "_pages_v_blocks_high_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_medium_impact_hero_links" ADD CONSTRAINT "_pages_v_blocks_medium_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_medium_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_medium_impact_hero" ADD CONSTRAINT "_pages_v_blocks_medium_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_medium_impact_hero" ADD CONSTRAINT "_pages_v_blocks_medium_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_low_impact_hero_links" ADD CONSTRAINT "_pages_v_blocks_low_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_low_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_low_impact_hero" ADD CONSTRAINT "_pages_v_blocks_low_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_blocks_content_with_media" ADD CONSTRAINT "events_blocks_content_with_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_blocks_content_with_media" ADD CONSTRAINT "events_blocks_content_with_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_high_impact_hero_links_order_idx" ON "pages_blocks_high_impact_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_high_impact_hero_links_parent_id_idx" ON "pages_blocks_high_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_high_impact_hero_order_idx" ON "pages_blocks_high_impact_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_high_impact_hero_parent_id_idx" ON "pages_blocks_high_impact_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_high_impact_hero_path_idx" ON "pages_blocks_high_impact_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_high_impact_hero_media_idx" ON "pages_blocks_high_impact_hero" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_medium_impact_hero_links_order_idx" ON "pages_blocks_medium_impact_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_medium_impact_hero_links_parent_id_idx" ON "pages_blocks_medium_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_medium_impact_hero_order_idx" ON "pages_blocks_medium_impact_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_medium_impact_hero_parent_id_idx" ON "pages_blocks_medium_impact_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_medium_impact_hero_path_idx" ON "pages_blocks_medium_impact_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_medium_impact_hero_media_idx" ON "pages_blocks_medium_impact_hero" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_low_impact_hero_links_order_idx" ON "pages_blocks_low_impact_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_low_impact_hero_links_parent_id_idx" ON "pages_blocks_low_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_low_impact_hero_order_idx" ON "pages_blocks_low_impact_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_low_impact_hero_parent_id_idx" ON "pages_blocks_low_impact_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_low_impact_hero_path_idx" ON "pages_blocks_low_impact_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_high_impact_hero_links_order_idx" ON "_pages_v_blocks_high_impact_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_high_impact_hero_links_parent_id_idx" ON "_pages_v_blocks_high_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_high_impact_hero_order_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_high_impact_hero_parent_id_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_high_impact_hero_path_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_high_impact_hero_media_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_medium_impact_hero_links_order_idx" ON "_pages_v_blocks_medium_impact_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_medium_impact_hero_links_parent_id_idx" ON "_pages_v_blocks_medium_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_medium_impact_hero_order_idx" ON "_pages_v_blocks_medium_impact_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_medium_impact_hero_parent_id_idx" ON "_pages_v_blocks_medium_impact_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_medium_impact_hero_path_idx" ON "_pages_v_blocks_medium_impact_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_medium_impact_hero_media_idx" ON "_pages_v_blocks_medium_impact_hero" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_low_impact_hero_links_order_idx" ON "_pages_v_blocks_low_impact_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_low_impact_hero_links_parent_id_idx" ON "_pages_v_blocks_low_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_low_impact_hero_order_idx" ON "_pages_v_blocks_low_impact_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_low_impact_hero_parent_id_idx" ON "_pages_v_blocks_low_impact_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_low_impact_hero_path_idx" ON "_pages_v_blocks_low_impact_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "events_blocks_content_with_media_order_idx" ON "events_blocks_content_with_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "events_blocks_content_with_media_parent_id_idx" ON "events_blocks_content_with_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "events_blocks_content_with_media_path_idx" ON "events_blocks_content_with_media" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "events_blocks_content_with_media_image_idx" ON "events_blocks_content_with_media" USING btree ("image_id");
  ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "pages_id";
  ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "pages_id";
  DROP TYPE "public"."enum_posts_blocks_high_impact_hero_links_link_type";
  DROP TYPE "public"."enum_posts_blocks_high_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum_posts_blocks_medium_impact_hero_links_link_type";
  DROP TYPE "public"."enum_posts_blocks_medium_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum_posts_blocks_low_impact_hero_links_link_type";
  DROP TYPE "public"."enum_posts_blocks_low_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum_posts_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_posts_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_posts_blocks_content_columns_size";
  DROP TYPE "public"."enum_posts_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_posts_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_posts_blocks_archive_populate_by";
  DROP TYPE "public"."enum_posts_blocks_archive_relation_to";
  DROP TYPE "public"."enum__posts_v_blocks_high_impact_hero_links_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_high_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum__posts_v_blocks_medium_impact_hero_links_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_medium_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum__posts_v_blocks_low_impact_hero_links_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_low_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum__posts_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__posts_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__posts_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__posts_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__posts_v_blocks_archive_relation_to";`);
}
