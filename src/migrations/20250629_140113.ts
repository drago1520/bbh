import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "events" DROP CONSTRAINT "events_speaker_company_logo_id_media_id_fk";
  
  DROP INDEX "events_speaker_company_logo_idx";
  ALTER TABLE "events" ADD COLUMN "location_url" varchar DEFAULT 'https://maps.app.goo.gl/FSebWqtrExL7ZdfFA';
  CREATE INDEX "events_location_url_idx" ON "events" USING btree ("location_url");
  ALTER TABLE "events" DROP COLUMN "speaker_company_logo_id";`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "events_location_url_idx";
  ALTER TABLE "events" ADD COLUMN "speaker_company_logo_id" uuid;
  ALTER TABLE "events" ADD CONSTRAINT "events_speaker_company_logo_id_media_id_fk" FOREIGN KEY ("speaker_company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "events_speaker_company_logo_idx" ON "events" USING btree ("speaker_company_logo_id");
  ALTER TABLE "events" DROP COLUMN "location_url";`);
}
