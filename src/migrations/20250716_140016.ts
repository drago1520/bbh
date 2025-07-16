import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" ADD COLUMN "email_template_id" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_email_template_id" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP COLUMN "email_template_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_email_template_id";`)
}
