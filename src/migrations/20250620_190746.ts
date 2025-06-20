import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "events" ALTER COLUMN "location" DROP NOT NULL;
  ALTER TABLE "events" ADD COLUMN "location_img_id" uuid;
  ALTER TABLE "events" ADD CONSTRAINT "events_location_img_id_media_id_fk" FOREIGN KEY ("location_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "events_location_img_idx" ON "events" USING btree ("location_img_id");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "events" DROP CONSTRAINT "events_location_img_id_media_id_fk";
  
  DROP INDEX "events_location_img_idx";
  ALTER TABLE "events" ALTER COLUMN "location" SET NOT NULL;
  ALTER TABLE "events" DROP COLUMN "location_img_id";`);
}
