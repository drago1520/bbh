import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "faq_left_right_blocks_q_a_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "faq_left_right" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"label" varchar DEFAULT 'FAQ-шахмат' NOT NULL,
  	"title" varchar DEFAULT 'Често Задавани Въпроси' NOT NULL,
  	"helper_text" jsonb DEFAULT '{"root":{"children":[{"type":"paragraph","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Не откри твоя въпрос? ","type":"text","version":1},{"type":"link","url":"https://your-link-url.com","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Свържи се с нас","type":"text","version":1}],"version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" и ще го добавим!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'::jsonb NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "faq_left_right_id" uuid;
  ALTER TABLE "faq_left_right_blocks_q_a_block" ADD CONSTRAINT "faq_left_right_blocks_q_a_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faq_left_right"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "faq_left_right_blocks_q_a_block_order_idx" ON "faq_left_right_blocks_q_a_block" USING btree ("_order");
  CREATE INDEX "faq_left_right_blocks_q_a_block_parent_id_idx" ON "faq_left_right_blocks_q_a_block" USING btree ("_parent_id");
  CREATE INDEX "faq_left_right_blocks_q_a_block_path_idx" ON "faq_left_right_blocks_q_a_block" USING btree ("_path");
  CREATE INDEX "faq_left_right_updated_at_idx" ON "faq_left_right" USING btree ("updated_at");
  CREATE INDEX "faq_left_right_created_at_idx" ON "faq_left_right" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faq_left_right_fk" FOREIGN KEY ("faq_left_right_id") REFERENCES "public"."faq_left_right"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_faq_left_right_id_idx" ON "payload_locked_documents_rels" USING btree ("faq_left_right_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "faq_left_right_blocks_q_a_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faq_left_right" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "faq_left_right_blocks_q_a_block" CASCADE;
  DROP TABLE "faq_left_right" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_faq_left_right_fk";
  
  DROP INDEX "payload_locked_documents_rels_faq_left_right_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "faq_left_right_id";`)
}
