import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "events_blocks_q_a_block" CASCADE;
  DROP TABLE "events_blocks_faq_chess_mate" CASCADE;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "events_blocks_q_a_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_faq_chess_mate" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Често Задавани Въпроси' NOT NULL,
  	"helper_text" jsonb DEFAULT '{"root":{"children":[{"type":"paragraph","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Не откри твоя въпрос? ","type":"text","version":1},{"type":"link","url":"https://your-link-url.com","children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Свържи се с нас","type":"text","version":1}],"version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" и ще го добавим!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'::jsonb NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "events_blocks_q_a_block" ADD CONSTRAINT "events_blocks_q_a_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_faq_chess_mate" ADD CONSTRAINT "events_blocks_faq_chess_mate_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "events_blocks_q_a_block_order_idx" ON "events_blocks_q_a_block" USING btree ("_order");
  CREATE INDEX "events_blocks_q_a_block_parent_id_idx" ON "events_blocks_q_a_block" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_q_a_block_path_idx" ON "events_blocks_q_a_block" USING btree ("_path");
  CREATE INDEX "events_blocks_faq_chess_mate_order_idx" ON "events_blocks_faq_chess_mate" USING btree ("_order");
  CREATE INDEX "events_blocks_faq_chess_mate_parent_id_idx" ON "events_blocks_faq_chess_mate" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_faq_chess_mate_path_idx" ON "events_blocks_faq_chess_mate" USING btree ("_path");`)
}
