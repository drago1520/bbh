import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_events_blocks_content_with_media_text_position" AS ENUM('Left', 'Right');
  CREATE TABLE IF NOT EXISTS "events_blocks_content_with_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"image_id" uuid,
  	"text_position" "enum_events_blocks_content_with_media_text_position",
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "events_blocks_content_with_media" ADD CONSTRAINT "events_blocks_content_with_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_blocks_content_with_media" ADD CONSTRAINT "events_blocks_content_with_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "events_blocks_content_with_media_order_idx" ON "events_blocks_content_with_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "events_blocks_content_with_media_parent_id_idx" ON "events_blocks_content_with_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "events_blocks_content_with_media_path_idx" ON "events_blocks_content_with_media" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "events_blocks_content_with_media_image_idx" ON "events_blocks_content_with_media" USING btree ("image_id");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "events_blocks_content_with_media" CASCADE;
  DROP TYPE "public"."enum_events_blocks_content_with_media_text_position";`);
}
