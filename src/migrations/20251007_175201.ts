import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
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
  
  CREATE TABLE "homepage_statistics_blocks_statistic" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" uuid,
  	"value" numeric NOT NULL,
  	"suffix" varchar,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_statistics" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"label" varchar DEFAULT 'Секция статистика' NOT NULL,
  	"title" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "homepage_blocks_q_a_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_faq_chess_mate" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_gallery7" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_testimonial25_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_testimonial25_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_statistic" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_statistics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_q_a_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_faq_chess_mate" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_gallery7" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_testimonial25_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_testimonial25_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_statistic" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_statistics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "homepage_blocks_q_a_block" CASCADE;
  DROP TABLE "homepage_blocks_faq_chess_mate" CASCADE;
  DROP TABLE "homepage_blocks_gallery7" CASCADE;
  DROP TABLE "homepage_blocks_testimonial25_card_block" CASCADE;
  DROP TABLE "homepage_blocks_testimonial25_block" CASCADE;
  DROP TABLE "homepage_blocks_statistic" CASCADE;
  DROP TABLE "homepage_blocks_statistics" CASCADE;
  DROP TABLE "homepage_rels" CASCADE;
  DROP TABLE "_homepage_v_blocks_q_a_block" CASCADE;
  DROP TABLE "_homepage_v_blocks_faq_chess_mate" CASCADE;
  DROP TABLE "_homepage_v_blocks_gallery7" CASCADE;
  DROP TABLE "_homepage_v_blocks_testimonial25_card_block" CASCADE;
  DROP TABLE "_homepage_v_blocks_testimonial25_block" CASCADE;
  DROP TABLE "_homepage_v_blocks_statistic" CASCADE;
  DROP TABLE "_homepage_v_blocks_statistics" CASCADE;
  DROP TABLE "_homepage_v_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "homepage_gallery_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "homepage_testimonial25_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "homepage_statistics_id" uuid;
  ALTER TABLE "homepage_gallery_rels" ADD CONSTRAINT "homepage_gallery_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."homepage_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_gallery_rels" ADD CONSTRAINT "homepage_gallery_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_testimonial25_blocks_testimonial25_card_block" ADD CONSTRAINT "homepage_testimonial25_blocks_testimonial25_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_testimonial25_blocks_testimonial25_card_block" ADD CONSTRAINT "homepage_testimonial25_blocks_testimonial25_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_statistics_blocks_statistic" ADD CONSTRAINT "homepage_statistics_blocks_statistic_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_statistics_blocks_statistic" ADD CONSTRAINT "homepage_statistics_blocks_statistic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_statistics"("id") ON DELETE cascade ON UPDATE no action;
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
  CREATE INDEX "homepage_statistics_blocks_statistic_order_idx" ON "homepage_statistics_blocks_statistic" USING btree ("_order");
  CREATE INDEX "homepage_statistics_blocks_statistic_parent_id_idx" ON "homepage_statistics_blocks_statistic" USING btree ("_parent_id");
  CREATE INDEX "homepage_statistics_blocks_statistic_path_idx" ON "homepage_statistics_blocks_statistic" USING btree ("_path");
  CREATE INDEX "homepage_statistics_blocks_statistic_icon_idx" ON "homepage_statistics_blocks_statistic" USING btree ("icon_id");
  CREATE INDEX "homepage_statistics_updated_at_idx" ON "homepage_statistics" USING btree ("updated_at");
  CREATE INDEX "homepage_statistics_created_at_idx" ON "homepage_statistics" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_homepage_gallery_fk" FOREIGN KEY ("homepage_gallery_id") REFERENCES "public"."homepage_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_homepage_testimonial25_fk" FOREIGN KEY ("homepage_testimonial25_id") REFERENCES "public"."homepage_testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_homepage_statistics_fk" FOREIGN KEY ("homepage_statistics_id") REFERENCES "public"."homepage_statistics"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_homepage_gallery_id_idx" ON "payload_locked_documents_rels" USING btree ("homepage_gallery_id");
  CREATE INDEX "payload_locked_documents_rels_homepage_testimonial25_id_idx" ON "payload_locked_documents_rels" USING btree ("homepage_testimonial25_id");
  CREATE INDEX "payload_locked_documents_rels_homepage_statistics_id_idx" ON "payload_locked_documents_rels" USING btree ("homepage_statistics_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
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
  
  CREATE TABLE "homepage_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" uuid,
  	"partners_id" uuid,
  	"partners2_id" uuid
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
  
  CREATE TABLE "_homepage_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" uuid,
  	"partners_id" uuid,
  	"partners2_id" uuid
  );
  
  ALTER TABLE "homepage_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_gallery_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_testimonial25_blocks_testimonial25_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_testimonial25" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_statistics_blocks_statistic" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_statistics" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "homepage_gallery" CASCADE;
  DROP TABLE "homepage_gallery_rels" CASCADE;
  DROP TABLE "homepage_testimonial25_blocks_testimonial25_card_block" CASCADE;
  DROP TABLE "homepage_testimonial25" CASCADE;
  DROP TABLE "homepage_statistics_blocks_statistic" CASCADE;
  DROP TABLE "homepage_statistics" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_homepage_gallery_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_homepage_testimonial25_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_homepage_statistics_fk";
  
  DROP INDEX "payload_locked_documents_rels_homepage_gallery_id_idx";
  DROP INDEX "payload_locked_documents_rels_homepage_testimonial25_id_idx";
  DROP INDEX "payload_locked_documents_rels_homepage_statistics_id_idx";
  ALTER TABLE "homepage_blocks_q_a_block" ADD CONSTRAINT "homepage_blocks_q_a_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_faq_chess_mate" ADD CONSTRAINT "homepage_blocks_faq_chess_mate_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_gallery7" ADD CONSTRAINT "homepage_blocks_gallery7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_testimonial25_card_block" ADD CONSTRAINT "homepage_blocks_testimonial25_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_testimonial25_card_block" ADD CONSTRAINT "homepage_blocks_testimonial25_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_testimonial25_block" ADD CONSTRAINT "homepage_blocks_testimonial25_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_statistic" ADD CONSTRAINT "homepage_blocks_statistic_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_statistic" ADD CONSTRAINT "homepage_blocks_statistic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_statistics" ADD CONSTRAINT "homepage_blocks_statistics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_partners2_fk" FOREIGN KEY ("partners2_id") REFERENCES "public"."partners2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_q_a_block" ADD CONSTRAINT "_homepage_v_blocks_q_a_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_faq_chess_mate" ADD CONSTRAINT "_homepage_v_blocks_faq_chess_mate_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_gallery7" ADD CONSTRAINT "_homepage_v_blocks_gallery7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_testimonial25_card_block" ADD CONSTRAINT "_homepage_v_blocks_testimonial25_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_testimonial25_card_block" ADD CONSTRAINT "_homepage_v_blocks_testimonial25_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_testimonial25_block" ADD CONSTRAINT "_homepage_v_blocks_testimonial25_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_statistic" ADD CONSTRAINT "_homepage_v_blocks_statistic_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_statistic" ADD CONSTRAINT "_homepage_v_blocks_statistic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_blocks_statistics" ADD CONSTRAINT "_homepage_v_blocks_statistics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_partners2_fk" FOREIGN KEY ("partners2_id") REFERENCES "public"."partners2"("id") ON DELETE cascade ON UPDATE no action;
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
  CREATE INDEX "homepage_rels_order_idx" ON "homepage_rels" USING btree ("order");
  CREATE INDEX "homepage_rels_parent_idx" ON "homepage_rels" USING btree ("parent_id");
  CREATE INDEX "homepage_rels_path_idx" ON "homepage_rels" USING btree ("path");
  CREATE INDEX "homepage_rels_media_id_idx" ON "homepage_rels" USING btree ("media_id");
  CREATE INDEX "homepage_rels_partners_id_idx" ON "homepage_rels" USING btree ("partners_id");
  CREATE INDEX "homepage_rels_partners2_id_idx" ON "homepage_rels" USING btree ("partners2_id");
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
  CREATE INDEX "_homepage_v_rels_order_idx" ON "_homepage_v_rels" USING btree ("order");
  CREATE INDEX "_homepage_v_rels_parent_idx" ON "_homepage_v_rels" USING btree ("parent_id");
  CREATE INDEX "_homepage_v_rels_path_idx" ON "_homepage_v_rels" USING btree ("path");
  CREATE INDEX "_homepage_v_rels_media_id_idx" ON "_homepage_v_rels" USING btree ("media_id");
  CREATE INDEX "_homepage_v_rels_partners_id_idx" ON "_homepage_v_rels" USING btree ("partners_id");
  CREATE INDEX "_homepage_v_rels_partners2_id_idx" ON "_homepage_v_rels" USING btree ("partners2_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "homepage_gallery_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "homepage_testimonial25_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "homepage_statistics_id";`)
}
