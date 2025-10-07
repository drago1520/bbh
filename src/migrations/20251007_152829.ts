import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage" DROP CONSTRAINT "homepage_marketing_sections_id_marketing_sections_id_fk";
  
  ALTER TABLE "_homepage_v" DROP CONSTRAINT "_homepage_v_version_marketing_sections_id_marketing_sections_id_fk";
  
  DROP INDEX "homepage_marketing_sections_idx";
  DROP INDEX "_homepage_v_version_version_marketing_sections_idx";
  ALTER TABLE "homepage_rels" ADD COLUMN "marketing_sections_id" uuid;
  ALTER TABLE "_homepage_v_rels" ADD COLUMN "marketing_sections_id" uuid;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_marketing_sections_fk" FOREIGN KEY ("marketing_sections_id") REFERENCES "public"."marketing_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_marketing_sections_fk" FOREIGN KEY ("marketing_sections_id") REFERENCES "public"."marketing_sections"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "homepage_rels_marketing_sections_id_idx" ON "homepage_rels" USING btree ("marketing_sections_id","path");
  CREATE INDEX "_homepage_v_rels_marketing_sections_id_idx" ON "_homepage_v_rels" USING btree ("marketing_sections_id");
  ALTER TABLE "homepage" DROP COLUMN "marketing_sections_id";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_marketing_sections_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage_rels" DROP CONSTRAINT "homepage_rels_marketing_sections_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT "_homepage_v_rels_marketing_sections_fk";
  
  DROP INDEX "homepage_rels_marketing_sections_id_idx";
  DROP INDEX "_homepage_v_rels_marketing_sections_id_idx";
  ALTER TABLE "homepage" ADD COLUMN "marketing_sections_id" uuid;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_marketing_sections_id" uuid;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_marketing_sections_id_marketing_sections_id_fk" FOREIGN KEY ("marketing_sections_id") REFERENCES "public"."marketing_sections"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v" ADD CONSTRAINT "_homepage_v_version_marketing_sections_id_marketing_sections_id_fk" FOREIGN KEY ("version_marketing_sections_id") REFERENCES "public"."marketing_sections"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "homepage_marketing_sections_idx" ON "homepage" USING btree ("marketing_sections_id");
  CREATE INDEX "_homepage_v_version_version_marketing_sections_idx" ON "_homepage_v" USING btree ("version_marketing_sections_id");
  ALTER TABLE "homepage_rels" DROP COLUMN "marketing_sections_id";
  ALTER TABLE "_homepage_v_rels" DROP COLUMN "marketing_sections_id";`)
}
