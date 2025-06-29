import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" ADD COLUMN "hero_img_id" uuid;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_img_id" uuid;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_img_id_media_id_fk" FOREIGN KEY ("hero_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_img_id_media_id_fk" FOREIGN KEY ("version_hero_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_hero_img_idx" ON "pages" USING btree ("hero_img_id");
  CREATE INDEX "_pages_v_version_version_hero_img_idx" ON "_pages_v" USING btree ("version_hero_img_id");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_img_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_img_id_media_id_fk";
  
  DROP INDEX "pages_hero_img_idx";
  DROP INDEX "_pages_v_version_version_hero_img_idx";
  ALTER TABLE "pages" DROP COLUMN "hero_img_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_img_id";`);
}
