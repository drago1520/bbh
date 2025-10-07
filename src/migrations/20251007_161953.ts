import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "partners_blocks_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "partners" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "partners_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" uuid
  );
  
  CREATE TABLE "partners2_blocks_partners2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "partners2" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "partners2_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" uuid
  );
  
  ALTER TABLE "homepage_rels" DROP CONSTRAINT "homepage_rels_marketing_sections_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT "_homepage_v_rels_marketing_sections_fk";
  
  DROP INDEX "homepage_rels_marketing_sections_id_idx";
  DROP INDEX "_homepage_v_rels_marketing_sections_id_idx";
  ALTER TABLE "homepage_rels" ADD COLUMN "partners_id" uuid;
  ALTER TABLE "homepage_rels" ADD COLUMN "partners2_id" uuid;
  ALTER TABLE "_homepage_v_rels" ADD COLUMN "partners_id" uuid;
  ALTER TABLE "_homepage_v_rels" ADD COLUMN "partners2_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "partners_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "partners2_id" uuid;
  ALTER TABLE "partners_blocks_partners" ADD CONSTRAINT "partners_blocks_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "partners_rels" ADD CONSTRAINT "partners_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "partners_rels" ADD CONSTRAINT "partners_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "partners2_blocks_partners2" ADD CONSTRAINT "partners2_blocks_partners2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."partners2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "partners2_rels" ADD CONSTRAINT "partners2_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."partners2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "partners2_rels" ADD CONSTRAINT "partners2_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "partners_blocks_partners_order_idx" ON "partners_blocks_partners" USING btree ("_order");
  CREATE INDEX "partners_blocks_partners_parent_id_idx" ON "partners_blocks_partners" USING btree ("_parent_id");
  CREATE INDEX "partners_blocks_partners_path_idx" ON "partners_blocks_partners" USING btree ("_path");
  CREATE INDEX "partners_updated_at_idx" ON "partners" USING btree ("updated_at");
  CREATE INDEX "partners_created_at_idx" ON "partners" USING btree ("created_at");
  CREATE INDEX "partners_rels_order_idx" ON "partners_rels" USING btree ("order");
  CREATE INDEX "partners_rels_parent_idx" ON "partners_rels" USING btree ("parent_id");
  CREATE INDEX "partners_rels_path_idx" ON "partners_rels" USING btree ("path");
  CREATE INDEX "partners_rels_media_id_idx" ON "partners_rels" USING btree ("media_id");
  CREATE INDEX "partners2_blocks_partners2_order_idx" ON "partners2_blocks_partners2" USING btree ("_order");
  CREATE INDEX "partners2_blocks_partners2_parent_id_idx" ON "partners2_blocks_partners2" USING btree ("_parent_id");
  CREATE INDEX "partners2_blocks_partners2_path_idx" ON "partners2_blocks_partners2" USING btree ("_path");
  CREATE INDEX "partners2_updated_at_idx" ON "partners2" USING btree ("updated_at");
  CREATE INDEX "partners2_created_at_idx" ON "partners2" USING btree ("created_at");
  CREATE INDEX "partners2_rels_order_idx" ON "partners2_rels" USING btree ("order");
  CREATE INDEX "partners2_rels_parent_idx" ON "partners2_rels" USING btree ("parent_id");
  CREATE INDEX "partners2_rels_path_idx" ON "partners2_rels" USING btree ("path");
  CREATE INDEX "partners2_rels_media_id_idx" ON "partners2_rels" USING btree ("media_id");
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_partners2_fk" FOREIGN KEY ("partners2_id") REFERENCES "public"."partners2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_partners2_fk" FOREIGN KEY ("partners2_id") REFERENCES "public"."partners2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_partners2_fk" FOREIGN KEY ("partners2_id") REFERENCES "public"."partners2"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_rels_partners_id_idx" ON "homepage_rels" USING btree ("partners_id");
  CREATE INDEX "homepage_rels_partners2_id_idx" ON "homepage_rels" USING btree ("partners2_id");
  CREATE INDEX "_homepage_v_rels_partners_id_idx" ON "_homepage_v_rels" USING btree ("partners_id");
  CREATE INDEX "_homepage_v_rels_partners2_id_idx" ON "_homepage_v_rels" USING btree ("partners2_id");
  CREATE INDEX "payload_locked_documents_rels_partners_id_idx" ON "payload_locked_documents_rels" USING btree ("partners_id");
  CREATE INDEX "payload_locked_documents_rels_partners2_id_idx" ON "payload_locked_documents_rels" USING btree ("partners2_id");
  ALTER TABLE "homepage_rels" DROP COLUMN "marketing_sections_id";
  ALTER TABLE "_homepage_v_rels" DROP COLUMN "marketing_sections_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "partners_blocks_partners" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "partners" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "partners_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "partners2_blocks_partners2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "partners2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "partners2_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "partners_blocks_partners" CASCADE;
  DROP TABLE "partners" CASCADE;
  DROP TABLE "partners_rels" CASCADE;
  DROP TABLE "partners2_blocks_partners2" CASCADE;
  DROP TABLE "partners2" CASCADE;
  DROP TABLE "partners2_rels" CASCADE;
  ALTER TABLE "homepage_rels" DROP CONSTRAINT "homepage_rels_partners_fk";
  
  ALTER TABLE "homepage_rels" DROP CONSTRAINT "homepage_rels_partners2_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT "_homepage_v_rels_partners_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT "_homepage_v_rels_partners2_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_partners_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_partners2_fk";
  
  DROP INDEX "homepage_rels_partners_id_idx";
  DROP INDEX "homepage_rels_partners2_id_idx";
  DROP INDEX "_homepage_v_rels_partners_id_idx";
  DROP INDEX "_homepage_v_rels_partners2_id_idx";
  DROP INDEX "payload_locked_documents_rels_partners_id_idx";
  DROP INDEX "payload_locked_documents_rels_partners2_id_idx";
  ALTER TABLE "homepage_rels" ADD COLUMN "marketing_sections_id" uuid;
  ALTER TABLE "_homepage_v_rels" ADD COLUMN "marketing_sections_id" uuid;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_marketing_sections_fk" FOREIGN KEY ("marketing_sections_id") REFERENCES "public"."marketing_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_marketing_sections_fk" FOREIGN KEY ("marketing_sections_id") REFERENCES "public"."marketing_sections"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "homepage_rels_marketing_sections_id_idx" ON "homepage_rels" USING btree ("marketing_sections_id","path");
  CREATE INDEX "_homepage_v_rels_marketing_sections_id_idx" ON "_homepage_v_rels" USING btree ("marketing_sections_id");
  ALTER TABLE "homepage_rels" DROP COLUMN "partners_id";
  ALTER TABLE "homepage_rels" DROP COLUMN "partners2_id";
  ALTER TABLE "_homepage_v_rels" DROP COLUMN "partners_id";
  ALTER TABLE "_homepage_v_rels" DROP COLUMN "partners2_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "partners_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "partners2_id";`)
}
