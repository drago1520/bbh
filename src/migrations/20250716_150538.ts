import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_who_is_the_conf_for_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" uuid,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_who_is_the_conf_for" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subheading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_who_is_the_conf_for_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"icon_id" uuid,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_who_is_the_conf_for" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"subheading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_who_is_the_conf_for_items" ADD CONSTRAINT "pages_blocks_who_is_the_conf_for_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_who_is_the_conf_for_items" ADD CONSTRAINT "pages_blocks_who_is_the_conf_for_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_who_is_the_conf_for"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_who_is_the_conf_for" ADD CONSTRAINT "pages_blocks_who_is_the_conf_for_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_who_is_the_conf_for_items" ADD CONSTRAINT "_pages_v_blocks_who_is_the_conf_for_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_who_is_the_conf_for_items" ADD CONSTRAINT "_pages_v_blocks_who_is_the_conf_for_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_who_is_the_conf_for"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_who_is_the_conf_for" ADD CONSTRAINT "_pages_v_blocks_who_is_the_conf_for_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_who_is_the_conf_for_items_order_idx" ON "pages_blocks_who_is_the_conf_for_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_who_is_the_conf_for_items_parent_id_idx" ON "pages_blocks_who_is_the_conf_for_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_who_is_the_conf_for_items_icon_idx" ON "pages_blocks_who_is_the_conf_for_items" USING btree ("icon_id");
  CREATE INDEX "pages_blocks_who_is_the_conf_for_order_idx" ON "pages_blocks_who_is_the_conf_for" USING btree ("_order");
  CREATE INDEX "pages_blocks_who_is_the_conf_for_parent_id_idx" ON "pages_blocks_who_is_the_conf_for" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_who_is_the_conf_for_path_idx" ON "pages_blocks_who_is_the_conf_for" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_who_is_the_conf_for_items_order_idx" ON "_pages_v_blocks_who_is_the_conf_for_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_who_is_the_conf_for_items_parent_id_idx" ON "_pages_v_blocks_who_is_the_conf_for_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_who_is_the_conf_for_items_icon_idx" ON "_pages_v_blocks_who_is_the_conf_for_items" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_who_is_the_conf_for_order_idx" ON "_pages_v_blocks_who_is_the_conf_for" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_who_is_the_conf_for_parent_id_idx" ON "_pages_v_blocks_who_is_the_conf_for" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_who_is_the_conf_for_path_idx" ON "_pages_v_blocks_who_is_the_conf_for" USING btree ("_path");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_who_is_the_conf_for_items" CASCADE;
  DROP TABLE "pages_blocks_who_is_the_conf_for" CASCADE;
  DROP TABLE "_pages_v_blocks_who_is_the_conf_for_items" CASCADE;
  DROP TABLE "_pages_v_blocks_who_is_the_conf_for" CASCADE;`);
}
