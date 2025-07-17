import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_testimonials2_testimonials" RENAME COLUMN "company_img_id" TO "card_img_id";
  ALTER TABLE "_pages_v_blocks_testimonials2_testimonials" RENAME COLUMN "company_img_id" TO "card_img_id";
  ALTER TABLE "pages_blocks_testimonials2_testimonials" DROP CONSTRAINT "pages_blocks_testimonials2_testimonials_company_img_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_testimonials2_testimonials" DROP CONSTRAINT "_pages_v_blocks_testimonials2_testimonials_company_img_id_media_id_fk";
  
  DROP INDEX "pages_blocks_testimonials2_testimonials_company_img_idx";
  DROP INDEX "_pages_v_blocks_testimonials2_testimonials_company_img_idx";
  DROP INDEX "attendees_email_idx";
  ALTER TABLE "attendees" ALTER COLUMN "event_id" DROP NOT NULL;
  ALTER TABLE "pages_blocks_testimonials2_testimonials" ADD CONSTRAINT "pages_blocks_testimonials2_testimonials_card_img_id_media_id_fk" FOREIGN KEY ("card_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials2_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials2_testimonials_card_img_id_media_id_fk" FOREIGN KEY ("card_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_testimonials2_testimonials_card_img_idx" ON "pages_blocks_testimonials2_testimonials" USING btree ("card_img_id");
  CREATE INDEX "_pages_v_blocks_testimonials2_testimonials_card_img_idx" ON "_pages_v_blocks_testimonials2_testimonials" USING btree ("card_img_id");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_testimonials2_testimonials" RENAME COLUMN "card_img_id" TO "company_img_id";
  ALTER TABLE "_pages_v_blocks_testimonials2_testimonials" RENAME COLUMN "card_img_id" TO "company_img_id";
  ALTER TABLE "pages_blocks_testimonials2_testimonials" DROP CONSTRAINT "pages_blocks_testimonials2_testimonials_card_img_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_testimonials2_testimonials" DROP CONSTRAINT "_pages_v_blocks_testimonials2_testimonials_card_img_id_media_id_fk";
  
  DROP INDEX "pages_blocks_testimonials2_testimonials_card_img_idx";
  DROP INDEX "_pages_v_blocks_testimonials2_testimonials_card_img_idx";
  ALTER TABLE "attendees" ALTER COLUMN "event_id" SET NOT NULL;
  ALTER TABLE "pages_blocks_testimonials2_testimonials" ADD CONSTRAINT "pages_blocks_testimonials2_testimonials_company_img_id_media_id_fk" FOREIGN KEY ("company_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials2_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials2_testimonials_company_img_id_media_id_fk" FOREIGN KEY ("company_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_testimonials2_testimonials_company_img_idx" ON "pages_blocks_testimonials2_testimonials" USING btree ("company_img_id");
  CREATE INDEX "_pages_v_blocks_testimonials2_testimonials_company_img_idx" ON "_pages_v_blocks_testimonials2_testimonials" USING btree ("company_img_id");
  CREATE INDEX "attendees_email_idx" ON "attendees" USING btree ("email");`);
}
