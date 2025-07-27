import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_tickets_source" AS ENUM('stripe', 'manually');
  CREATE TABLE "tickets" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"attendee_id" uuid NOT NULL,
  	"event_id" uuid NOT NULL,
  	"source" "enum_tickets_source" DEFAULT 'manually' NOT NULL,
  	"payment_intent_id" varchar,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "attendees" DROP CONSTRAINT "attendees_event_id_events_id_fk";
  
  DROP INDEX "attendees_event_idx";
  DROP INDEX "attendees_name_idx";
  ALTER TABLE "attendees" ALTER COLUMN "email" DROP NOT NULL;
  ALTER TABLE "attendees" ADD COLUMN "phone" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "tickets_id" uuid;
  ALTER TABLE "tickets" ADD CONSTRAINT "tickets_attendee_id_attendees_id_fk" FOREIGN KEY ("attendee_id") REFERENCES "public"."attendees"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tickets" ADD CONSTRAINT "tickets_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "tickets_attendee_idx" ON "tickets" USING btree ("attendee_id");
  CREATE INDEX "tickets_event_idx" ON "tickets" USING btree ("event_id");
  CREATE INDEX "tickets_updated_at_idx" ON "tickets" USING btree ("updated_at");
  CREATE INDEX "tickets_created_at_idx" ON "tickets" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tickets_fk" FOREIGN KEY ("tickets_id") REFERENCES "public"."tickets"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "attendees_email_idx" ON "attendees" USING btree ("email");
  CREATE UNIQUE INDEX "attendees_phone_idx" ON "attendees" USING btree ("phone");
  CREATE INDEX "payload_locked_documents_rels_tickets_id_idx" ON "payload_locked_documents_rels" USING btree ("tickets_id");
  CREATE UNIQUE INDEX "attendees_name_idx" ON "attendees" USING btree ("name");
  ALTER TABLE "attendees" DROP COLUMN "event_id";`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "tickets" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "tickets" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_tickets_fk";
  
  DROP INDEX "attendees_email_idx";
  DROP INDEX "attendees_phone_idx";
  DROP INDEX "payload_locked_documents_rels_tickets_id_idx";
  DROP INDEX "attendees_name_idx";
  ALTER TABLE "attendees" ALTER COLUMN "email" SET NOT NULL;
  ALTER TABLE "attendees" ADD COLUMN "event_id" uuid;
  ALTER TABLE "attendees" ADD CONSTRAINT "attendees_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "attendees_event_idx" ON "attendees" USING btree ("event_id");
  CREATE INDEX "attendees_name_idx" ON "attendees" USING btree ("name");
  ALTER TABLE "attendees" DROP COLUMN "phone";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "tickets_id";
  DROP TYPE "public"."enum_tickets_source";`);
}
