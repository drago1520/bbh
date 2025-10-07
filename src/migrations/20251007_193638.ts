import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage_statistics_blocks_statistic" RENAME TO "statistics_n_blocks_statistic";
  ALTER TABLE "homepage_statistics" RENAME TO "statistics_n";
  ALTER TABLE "homepage_rels" RENAME COLUMN "homepage_statistics_id" TO "statistics_n_id";
  ALTER TABLE "_homepage_v_rels" RENAME COLUMN "homepage_statistics_id" TO "statistics_n_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "homepage_statistics_id" TO "statistics_n_id";
  ALTER TABLE "homepage_rels" DROP CONSTRAINT "homepage_rels_homepage_statistics_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT "_homepage_v_rels_homepage_statistics_fk";
  
  ALTER TABLE "statistics_n_blocks_statistic" DROP CONSTRAINT "homepage_statistics_blocks_statistic_icon_id_media_id_fk";
  
  ALTER TABLE "statistics_n_blocks_statistic" DROP CONSTRAINT "homepage_statistics_blocks_statistic_parent_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_homepage_statistics_fk";
  
  DROP INDEX "homepage_rels_homepage_statistics_id_idx";
  DROP INDEX "_homepage_v_rels_homepage_statistics_id_idx";
  DROP INDEX "homepage_statistics_blocks_statistic_order_idx";
  DROP INDEX "homepage_statistics_blocks_statistic_parent_id_idx";
  DROP INDEX "homepage_statistics_blocks_statistic_path_idx";
  DROP INDEX "homepage_statistics_blocks_statistic_icon_idx";
  DROP INDEX "homepage_statistics_updated_at_idx";
  DROP INDEX "homepage_statistics_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_homepage_statistics_id_idx";
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_statistics_n_fk" FOREIGN KEY ("statistics_n_id") REFERENCES "public"."statistics_n"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_statistics_n_fk" FOREIGN KEY ("statistics_n_id") REFERENCES "public"."statistics_n"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "statistics_n_blocks_statistic" ADD CONSTRAINT "statistics_n_blocks_statistic_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "statistics_n_blocks_statistic" ADD CONSTRAINT "statistics_n_blocks_statistic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."statistics_n"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_statistics_n_fk" FOREIGN KEY ("statistics_n_id") REFERENCES "public"."statistics_n"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_rels_statistics_n_id_idx" ON "homepage_rels" USING btree ("statistics_n_id");
  CREATE INDEX "_homepage_v_rels_statistics_n_id_idx" ON "_homepage_v_rels" USING btree ("statistics_n_id");
  CREATE INDEX "statistics_n_blocks_statistic_order_idx" ON "statistics_n_blocks_statistic" USING btree ("_order");
  CREATE INDEX "statistics_n_blocks_statistic_parent_id_idx" ON "statistics_n_blocks_statistic" USING btree ("_parent_id");
  CREATE INDEX "statistics_n_blocks_statistic_path_idx" ON "statistics_n_blocks_statistic" USING btree ("_path");
  CREATE INDEX "statistics_n_blocks_statistic_icon_idx" ON "statistics_n_blocks_statistic" USING btree ("icon_id");
  CREATE INDEX "statistics_n_updated_at_idx" ON "statistics_n" USING btree ("updated_at");
  CREATE INDEX "statistics_n_created_at_idx" ON "statistics_n" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_statistics_n_id_idx" ON "payload_locked_documents_rels" USING btree ("statistics_n_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "statistics_n_blocks_statistic" RENAME TO "homepage_statistics_blocks_statistic";
  ALTER TABLE "statistics_n" RENAME TO "homepage_statistics";
  ALTER TABLE "homepage_rels" RENAME COLUMN "statistics_n_id" TO "homepage_statistics_id";
  ALTER TABLE "_homepage_v_rels" RENAME COLUMN "statistics_n_id" TO "homepage_statistics_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "statistics_n_id" TO "homepage_statistics_id";
  ALTER TABLE "homepage_rels" DROP CONSTRAINT "homepage_rels_statistics_n_fk";
  
  ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT "_homepage_v_rels_statistics_n_fk";
  
  ALTER TABLE "homepage_statistics_blocks_statistic" DROP CONSTRAINT "statistics_n_blocks_statistic_icon_id_media_id_fk";
  
  ALTER TABLE "homepage_statistics_blocks_statistic" DROP CONSTRAINT "statistics_n_blocks_statistic_parent_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_statistics_n_fk";
  
  DROP INDEX "homepage_rels_statistics_n_id_idx";
  DROP INDEX "_homepage_v_rels_statistics_n_id_idx";
  DROP INDEX "statistics_n_blocks_statistic_order_idx";
  DROP INDEX "statistics_n_blocks_statistic_parent_id_idx";
  DROP INDEX "statistics_n_blocks_statistic_path_idx";
  DROP INDEX "statistics_n_blocks_statistic_icon_idx";
  DROP INDEX "statistics_n_updated_at_idx";
  DROP INDEX "statistics_n_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_statistics_n_id_idx";
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_homepage_statistics_fk" FOREIGN KEY ("homepage_statistics_id") REFERENCES "public"."homepage_statistics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_homepage_statistics_fk" FOREIGN KEY ("homepage_statistics_id") REFERENCES "public"."homepage_statistics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_statistics_blocks_statistic" ADD CONSTRAINT "homepage_statistics_blocks_statistic_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_statistics_blocks_statistic" ADD CONSTRAINT "homepage_statistics_blocks_statistic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_statistics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_homepage_statistics_fk" FOREIGN KEY ("homepage_statistics_id") REFERENCES "public"."homepage_statistics"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_rels_homepage_statistics_id_idx" ON "homepage_rels" USING btree ("homepage_statistics_id");
  CREATE INDEX "_homepage_v_rels_homepage_statistics_id_idx" ON "_homepage_v_rels" USING btree ("homepage_statistics_id");
  CREATE INDEX "homepage_statistics_blocks_statistic_order_idx" ON "homepage_statistics_blocks_statistic" USING btree ("_order");
  CREATE INDEX "homepage_statistics_blocks_statistic_parent_id_idx" ON "homepage_statistics_blocks_statistic" USING btree ("_parent_id");
  CREATE INDEX "homepage_statistics_blocks_statistic_path_idx" ON "homepage_statistics_blocks_statistic" USING btree ("_path");
  CREATE INDEX "homepage_statistics_blocks_statistic_icon_idx" ON "homepage_statistics_blocks_statistic" USING btree ("icon_id");
  CREATE INDEX "homepage_statistics_updated_at_idx" ON "homepage_statistics" USING btree ("updated_at");
  CREATE INDEX "homepage_statistics_created_at_idx" ON "homepage_statistics" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_homepage_statistics_id_idx" ON "payload_locked_documents_rels" USING btree ("homepage_statistics_id");`)
}
