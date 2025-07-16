import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_agenda_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_agenda" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_agenda_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_agenda" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages" ADD COLUMN "cta_text" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_cta_text" varchar;
  ALTER TABLE "pages_blocks_agenda_items" ADD CONSTRAINT "pages_blocks_agenda_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_agenda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_agenda" ADD CONSTRAINT "pages_blocks_agenda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_agenda_items" ADD CONSTRAINT "_pages_v_blocks_agenda_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_agenda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_agenda" ADD CONSTRAINT "_pages_v_blocks_agenda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_agenda_items_order_idx" ON "pages_blocks_agenda_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_agenda_items_parent_id_idx" ON "pages_blocks_agenda_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_agenda_order_idx" ON "pages_blocks_agenda" USING btree ("_order");
  CREATE INDEX "pages_blocks_agenda_parent_id_idx" ON "pages_blocks_agenda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_agenda_path_idx" ON "pages_blocks_agenda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_agenda_items_order_idx" ON "_pages_v_blocks_agenda_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_agenda_items_parent_id_idx" ON "_pages_v_blocks_agenda_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_agenda_order_idx" ON "_pages_v_blocks_agenda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_agenda_parent_id_idx" ON "_pages_v_blocks_agenda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_agenda_path_idx" ON "_pages_v_blocks_agenda" USING btree ("_path");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_agenda_items" CASCADE;
  DROP TABLE "pages_blocks_agenda" CASCADE;
  DROP TABLE "_pages_v_blocks_agenda_items" CASCADE;
  DROP TABLE "_pages_v_blocks_agenda" CASCADE;
  ALTER TABLE "pages" DROP COLUMN "cta_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_cta_text";`);
}
