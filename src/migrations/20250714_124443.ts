import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "marketing_sections_blocks_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "marketing_sections" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "marketing_sections_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" uuid
  );
  
  ALTER TABLE "pages_blocks_partners" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_partners" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_nav_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_partners" CASCADE;
  DROP TABLE "_pages_v_blocks_partners" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_nav_items" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "marketing_sections_id" uuid;
  ALTER TABLE "marketing_sections_blocks_partners" ADD CONSTRAINT "marketing_sections_blocks_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "marketing_sections_rels" ADD CONSTRAINT "marketing_sections_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."marketing_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "marketing_sections_rels" ADD CONSTRAINT "marketing_sections_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "marketing_sections_blocks_partners_order_idx" ON "marketing_sections_blocks_partners" USING btree ("_order");
  CREATE INDEX "marketing_sections_blocks_partners_parent_id_idx" ON "marketing_sections_blocks_partners" USING btree ("_parent_id");
  CREATE INDEX "marketing_sections_blocks_partners_path_idx" ON "marketing_sections_blocks_partners" USING btree ("_path");
  CREATE INDEX "marketing_sections_updated_at_idx" ON "marketing_sections" USING btree ("updated_at");
  CREATE INDEX "marketing_sections_created_at_idx" ON "marketing_sections" USING btree ("created_at");
  CREATE INDEX "marketing_sections_rels_order_idx" ON "marketing_sections_rels" USING btree ("order");
  CREATE INDEX "marketing_sections_rels_parent_idx" ON "marketing_sections_rels" USING btree ("parent_id");
  CREATE INDEX "marketing_sections_rels_path_idx" ON "marketing_sections_rels" USING btree ("path");
  CREATE INDEX "marketing_sections_rels_media_id_idx" ON "marketing_sections_rels" USING btree ("media_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_marketing_sections_fk" FOREIGN KEY ("marketing_sections_id") REFERENCES "public"."marketing_sections"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_marketing_sections_id_idx" ON "payload_locked_documents_rels" USING btree ("marketing_sections_id");
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_footer_nav_items_link_type";`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "pages_blocks_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid
  );
  
  CREATE TABLE "footer_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid
  );
  
  ALTER TABLE "marketing_sections_blocks_partners" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "marketing_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "marketing_sections_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "marketing_sections_blocks_partners" CASCADE;
  DROP TABLE "marketing_sections" CASCADE;
  DROP TABLE "marketing_sections_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_marketing_sections_fk";
  
  DROP INDEX "payload_locked_documents_rels_marketing_sections_id_idx";
  ALTER TABLE "pages_blocks_partners" ADD CONSTRAINT "pages_blocks_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_partners" ADD CONSTRAINT "_pages_v_blocks_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_partners_order_idx" ON "pages_blocks_partners" USING btree ("_order");
  CREATE INDEX "pages_blocks_partners_parent_id_idx" ON "pages_blocks_partners" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_partners_path_idx" ON "pages_blocks_partners" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_partners_order_idx" ON "_pages_v_blocks_partners" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_partners_parent_id_idx" ON "_pages_v_blocks_partners" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_partners_path_idx" ON "_pages_v_blocks_partners" USING btree ("_path");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX "footer_nav_items_order_idx" ON "footer_nav_items" USING btree ("_order");
  CREATE INDEX "footer_nav_items_parent_id_idx" ON "footer_nav_items" USING btree ("_parent_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "marketing_sections_id";`);
}
