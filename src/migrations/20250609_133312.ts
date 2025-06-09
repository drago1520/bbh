import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "events" ADD COLUMN "speaker_name" varchar NOT NULL;
  ALTER TABLE "events" ADD COLUMN "speaker_quote" varchar;
  ALTER TABLE "events" ADD COLUMN "max_guests" varchar DEFAULT 60;
  ALTER TABLE "events" ADD COLUMN "thumbnail_id" uuid NOT NULL;
  ALTER TABLE "events" ADD COLUMN "speaker_company_logo_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_speaker_company_logo_id_media_id_fk" FOREIGN KEY ("speaker_company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "events_speaker_name_idx" ON "events" USING btree ("speaker_name");
  CREATE INDEX IF NOT EXISTS "events_thumbnail_idx" ON "events" USING btree ("thumbnail_id");
  CREATE INDEX IF NOT EXISTS "events_speaker_company_logo_idx" ON "events" USING btree ("speaker_company_logo_id");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "events" DROP CONSTRAINT "events_thumbnail_id_media_id_fk";
  
  ALTER TABLE "events" DROP CONSTRAINT "events_speaker_company_logo_id_media_id_fk";
  
  DROP INDEX IF EXISTS "events_speaker_name_idx";
  DROP INDEX IF EXISTS "events_thumbnail_idx";
  DROP INDEX IF EXISTS "events_speaker_company_logo_idx";
  ALTER TABLE "events" DROP COLUMN IF EXISTS "speaker_name";
  ALTER TABLE "events" DROP COLUMN IF EXISTS "speaker_quote";
  ALTER TABLE "events" DROP COLUMN IF EXISTS "max_guests";
  ALTER TABLE "events" DROP COLUMN IF EXISTS "thumbnail_id";
  ALTER TABLE "events" DROP COLUMN IF EXISTS "speaker_company_logo_id";`);
}
