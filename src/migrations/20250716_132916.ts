import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "marketing_sections_blocks_partners2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subtitle" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "marketing_sections_blocks_partners2" ADD CONSTRAINT "marketing_sections_blocks_partners2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_sections"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "marketing_sections_blocks_partners2_order_idx" ON "marketing_sections_blocks_partners2" USING btree ("_order");
  CREATE INDEX "marketing_sections_blocks_partners2_parent_id_idx" ON "marketing_sections_blocks_partners2" USING btree ("_parent_id");
  CREATE INDEX "marketing_sections_blocks_partners2_path_idx" ON "marketing_sections_blocks_partners2" USING btree ("_path");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "marketing_sections_blocks_partners2" CASCADE;`);
}
