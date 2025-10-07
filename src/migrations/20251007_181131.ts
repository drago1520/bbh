import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "partners2_blocks_partners2" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "partners2_blocks_partners2" CASCADE;
  ALTER TABLE "partners2" ADD COLUMN "label" varchar DEFAULT 'Партньори2' NOT NULL;
  ALTER TABLE "partners2" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "homepage_rels" ADD COLUMN "homepage_gallery_id" uuid;
  ALTER TABLE "homepage_rels" ADD COLUMN "homepage_testimonial25_id" uuid;
  ALTER TABLE "homepage_rels" ADD COLUMN "homepage_statistics_id" uuid;
  ALTER TABLE "_homepage_v_rels" ADD COLUMN "homepage_gallery_id" uuid;
  ALTER TABLE "_homepage_v_rels" ADD COLUMN "homepage_testimonial25_id" uuid;
  ALTER TABLE "_homepage_v_rels" ADD COLUMN "homepage_statistics_id" uuid;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_homepage_gallery_fk" FOREIGN KEY ("homepage_gallery_id") REFERENCES "public"."homepage_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_homepage_testimonial25_fk" FOREIGN KEY ("homepage_testimonial25_id") REFERENCES "public"."homepage_testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_homepage_statistics_fk" FOREIGN KEY ("homepage_statistics_id") REFERENCES "public"."homepage_statistics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_homepage_gallery_fk" FOREIGN KEY ("homepage_gallery_id") REFERENCES "public"."homepage_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_homepage_testimonial25_fk" FOREIGN KEY ("homepage_testimonial25_id") REFERENCES "public"."homepage_testimonial25"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_homepage_statistics_fk" FOREIGN KEY ("homepage_statistics_id") REFERENCES "public"."homepage_statistics"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_rels_homepage_gallery_id_idx" ON "homepage_rels" USING btree ("homepage_gallery_id");
  CREATE INDEX "homepage_rels_homepage_testimonial25_id_idx" ON "homepage_rels" USING btree ("homepage_testimonial25_id");
  CREATE INDEX "homepage_rels_homepage_statistics_id_idx" ON "homepage_rels" USING btree ("homepage_statistics_id");
  CREATE INDEX "_homepage_v_rels_homepage_gallery_id_idx" ON "_homepage_v_rels" USING btree ("homepage_gallery_id");
  CREATE INDEX "_homepage_v_rels_homepage_testimonial25_id_idx" ON "_homepage_v_rels" USING btree ("homepage_testimonial25_id");
  CREATE INDEX "_homepage_v_rels_homepage_statistics_id_idx" ON "_homepage_v_rels" USING btree ("homepage_statistics_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "partners2_blocks_partners2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "homepage_rels" DROP CONSTRAINT "homepage_rels_homepage_gallery_fk";
  
  ALTER TABLE "homepage_rels" DROP CONSTRAINT "homepage_rels_homepage_testimonial25_fk";
  
  ALTER TABLE "homepage_rels" DROP CONSTRAINT "homepage_rels_homepage_statistics_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT "_homepage_v_rels_homepage_gallery_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT "_homepage_v_rels_homepage_testimonial25_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT "_homepage_v_rels_homepage_statistics_fk";
  
  DROP INDEX "homepage_rels_homepage_gallery_id_idx";
  DROP INDEX "homepage_rels_homepage_testimonial25_id_idx";
  DROP INDEX "homepage_rels_homepage_statistics_id_idx";
  DROP INDEX "_homepage_v_rels_homepage_gallery_id_idx";
  DROP INDEX "_homepage_v_rels_homepage_testimonial25_id_idx";
  DROP INDEX "_homepage_v_rels_homepage_statistics_id_idx";
  ALTER TABLE "partners2_blocks_partners2" ADD CONSTRAINT "partners2_blocks_partners2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."partners2"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "partners2_blocks_partners2_order_idx" ON "partners2_blocks_partners2" USING btree ("_order");
  CREATE INDEX "partners2_blocks_partners2_parent_id_idx" ON "partners2_blocks_partners2" USING btree ("_parent_id");
  CREATE INDEX "partners2_blocks_partners2_path_idx" ON "partners2_blocks_partners2" USING btree ("_path");
  ALTER TABLE "partners2" DROP COLUMN "label";
  ALTER TABLE "partners2" DROP COLUMN "subtitle";
  ALTER TABLE "homepage_rels" DROP COLUMN "homepage_gallery_id";
  ALTER TABLE "homepage_rels" DROP COLUMN "homepage_testimonial25_id";
  ALTER TABLE "homepage_rels" DROP COLUMN "homepage_statistics_id";
  ALTER TABLE "_homepage_v_rels" DROP COLUMN "homepage_gallery_id";
  ALTER TABLE "_homepage_v_rels" DROP COLUMN "homepage_testimonial25_id";
  ALTER TABLE "_homepage_v_rels" DROP COLUMN "homepage_statistics_id";`)
}
