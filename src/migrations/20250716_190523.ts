import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_pricing_with_countdown_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_with_countdown_plans" (
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
  
  CREATE TABLE "pages_blocks_pricing_with_countdown" (
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
  
  CREATE TABLE "_pages_v_blocks_pricing_with_countdown_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"feature" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_with_countdown_plans" (
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
  
  CREATE TABLE "_pages_v_blocks_pricing_with_countdown" (
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
  
  ALTER TABLE "pages_blocks_pricing_with_countdown_plans_features" ADD CONSTRAINT "pages_blocks_pricing_with_countdown_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_with_countdown_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_with_countdown_plans" ADD CONSTRAINT "pages_blocks_pricing_with_countdown_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_with_countdown"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_with_countdown" ADD CONSTRAINT "pages_blocks_pricing_with_countdown_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_with_countdown_plans_features" ADD CONSTRAINT "_pages_v_blocks_pricing_with_countdown_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_with_countdown_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_with_countdown_plans" ADD CONSTRAINT "_pages_v_blocks_pricing_with_countdown_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_with_countdown"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_with_countdown" ADD CONSTRAINT "_pages_v_blocks_pricing_with_countdown_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_pricing_with_countdown_plans_features_order_idx" ON "pages_blocks_pricing_with_countdown_plans_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_with_countdown_plans_features_parent_id_idx" ON "pages_blocks_pricing_with_countdown_plans_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_with_countdown_plans_order_idx" ON "pages_blocks_pricing_with_countdown_plans" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_with_countdown_plans_parent_id_idx" ON "pages_blocks_pricing_with_countdown_plans" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_with_countdown_order_idx" ON "pages_blocks_pricing_with_countdown" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_with_countdown_parent_id_idx" ON "pages_blocks_pricing_with_countdown" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_with_countdown_path_idx" ON "pages_blocks_pricing_with_countdown" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing_with_countdown_plans_features_order_idx" ON "_pages_v_blocks_pricing_with_countdown_plans_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_with_countdown_plans_features_parent_id_idx" ON "_pages_v_blocks_pricing_with_countdown_plans_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_with_countdown_plans_order_idx" ON "_pages_v_blocks_pricing_with_countdown_plans" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_with_countdown_plans_parent_id_idx" ON "_pages_v_blocks_pricing_with_countdown_plans" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_with_countdown_order_idx" ON "_pages_v_blocks_pricing_with_countdown" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_with_countdown_parent_id_idx" ON "_pages_v_blocks_pricing_with_countdown" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_with_countdown_path_idx" ON "_pages_v_blocks_pricing_with_countdown" USING btree ("_path");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_pricing_with_countdown_plans_features" CASCADE;
  DROP TABLE "pages_blocks_pricing_with_countdown_plans" CASCADE;
  DROP TABLE "pages_blocks_pricing_with_countdown" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_with_countdown_plans_features" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_with_countdown_plans" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_with_countdown" CASCADE;`);
}
