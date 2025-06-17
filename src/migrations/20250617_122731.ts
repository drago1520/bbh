import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_testimonial25_card_block" (
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
  
  CREATE TABLE "pages_blocks_testimonial25_block" (
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
  
  CREATE TABLE "_pages_v_blocks_testimonial25_card_block" (
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
  
  CREATE TABLE "_pages_v_blocks_testimonial25_block" (
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
  
  ALTER TABLE "pages_blocks_testimonial25_card_block" ADD CONSTRAINT "pages_blocks_testimonial25_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial25_card_block" ADD CONSTRAINT "pages_blocks_testimonial25_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial25_block" ADD CONSTRAINT "pages_blocks_testimonial25_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial25_card_block" ADD CONSTRAINT "_pages_v_blocks_testimonial25_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial25_card_block" ADD CONSTRAINT "_pages_v_blocks_testimonial25_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial25_block" ADD CONSTRAINT "_pages_v_blocks_testimonial25_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_testimonial25_card_block_order_idx" ON "pages_blocks_testimonial25_card_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial25_card_block_parent_id_idx" ON "pages_blocks_testimonial25_card_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial25_card_block_path_idx" ON "pages_blocks_testimonial25_card_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial25_card_block_image_idx" ON "pages_blocks_testimonial25_card_block" USING btree ("image_id");
  CREATE INDEX "pages_blocks_testimonial25_block_order_idx" ON "pages_blocks_testimonial25_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial25_block_parent_id_idx" ON "pages_blocks_testimonial25_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial25_block_path_idx" ON "pages_blocks_testimonial25_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial25_card_block_order_idx" ON "_pages_v_blocks_testimonial25_card_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial25_card_block_parent_id_idx" ON "_pages_v_blocks_testimonial25_card_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial25_card_block_path_idx" ON "_pages_v_blocks_testimonial25_card_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial25_card_block_image_idx" ON "_pages_v_blocks_testimonial25_card_block" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_testimonial25_block_order_idx" ON "_pages_v_blocks_testimonial25_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial25_block_parent_id_idx" ON "_pages_v_blocks_testimonial25_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial25_block_path_idx" ON "_pages_v_blocks_testimonial25_block" USING btree ("_path");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_testimonial25_card_block" CASCADE;
  DROP TABLE "pages_blocks_testimonial25_block" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial25_card_block" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial25_block" CASCADE;`);
}
