import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_testimonials2_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"client_name" varchar,
  	"client_img_id" uuid,
  	"work_title" varchar,
  	"title" varchar,
  	"badge" varchar,
  	"company_img_id" uuid
  );
  
  CREATE TABLE "pages_blocks_testimonials2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subheading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials2_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"quote" varchar,
  	"client_name" varchar,
  	"client_img_id" uuid,
  	"work_title" varchar,
  	"title" varchar,
  	"badge" varchar,
  	"company_img_id" uuid,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"subheading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_testimonials2_testimonials" ADD CONSTRAINT "pages_blocks_testimonials2_testimonials_client_img_id_media_id_fk" FOREIGN KEY ("client_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials2_testimonials" ADD CONSTRAINT "pages_blocks_testimonials2_testimonials_company_img_id_media_id_fk" FOREIGN KEY ("company_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials2_testimonials" ADD CONSTRAINT "pages_blocks_testimonials2_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials2" ADD CONSTRAINT "pages_blocks_testimonials2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials2_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials2_testimonials_client_img_id_media_id_fk" FOREIGN KEY ("client_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials2_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials2_testimonials_company_img_id_media_id_fk" FOREIGN KEY ("company_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials2_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials2_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials2" ADD CONSTRAINT "_pages_v_blocks_testimonials2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_testimonials2_testimonials_order_idx" ON "pages_blocks_testimonials2_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials2_testimonials_parent_id_idx" ON "pages_blocks_testimonials2_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials2_testimonials_client_img_idx" ON "pages_blocks_testimonials2_testimonials" USING btree ("client_img_id");
  CREATE INDEX "pages_blocks_testimonials2_testimonials_company_img_idx" ON "pages_blocks_testimonials2_testimonials" USING btree ("company_img_id");
  CREATE INDEX "pages_blocks_testimonials2_order_idx" ON "pages_blocks_testimonials2" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials2_parent_id_idx" ON "pages_blocks_testimonials2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials2_path_idx" ON "pages_blocks_testimonials2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonials2_testimonials_order_idx" ON "_pages_v_blocks_testimonials2_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials2_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials2_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials2_testimonials_client_img_idx" ON "_pages_v_blocks_testimonials2_testimonials" USING btree ("client_img_id");
  CREATE INDEX "_pages_v_blocks_testimonials2_testimonials_company_img_idx" ON "_pages_v_blocks_testimonials2_testimonials" USING btree ("company_img_id");
  CREATE INDEX "_pages_v_blocks_testimonials2_order_idx" ON "_pages_v_blocks_testimonials2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials2_parent_id_idx" ON "_pages_v_blocks_testimonials2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials2_path_idx" ON "_pages_v_blocks_testimonials2" USING btree ("_path");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_testimonials2_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonials2" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials2_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials2" CASCADE;`);
}
