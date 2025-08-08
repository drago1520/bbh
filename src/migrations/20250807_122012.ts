import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_timeline_steps" ADD COLUMN "icon" varchar;
  ALTER TABLE "_pages_v_blocks_timeline_steps" ADD COLUMN "icon" varchar;`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_timeline_steps" DROP COLUMN "icon";
  ALTER TABLE "_pages_v_blocks_timeline_steps" DROP COLUMN "icon";`);
}
