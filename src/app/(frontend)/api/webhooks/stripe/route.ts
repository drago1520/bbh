//! Run constantly in terminal
//  stripe listen --forward-to localhost:3000/api/webhooks/stripe
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createTicket } from "./create-ticket";
import { Ticket } from "@/payload-types";
console.log("process.env.STRIPE_SECRET_KEY! :", process.env.STRIPE_SECRET_KEY!);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});
export async function GET() {
  return NextResponse.json({ message: "API working" });
}
export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const headerList = await headers();
    const signature = headerList.get("stripe-signature");
    if (!process.env.STRIPE_WEBHOOK_SECRET)
      throw new Error("STRIPE_WEBHOOK_SECRET is missing!");
    const event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
    if (event.type === "payment_intent.succeeded") {
      const data = event.data.object;
      const customer = await stripe.customers.retrieve(data.customer as string);
      if (customer.deleted) throw new Error("Customer was deleted");
      const { email, name, phone, discount } = customer;
      const ticketData: Omit<
        Ticket,
        "attendee" | "event" | "id" | "createdAt" | "updatedAt"
      > = {
        paymentIntentId: data.id,
        source: "stripe",
      };
      const result = await createTicket({
        ticketData,
        personalInfo: { email, name, phone },
      });
      console.log("result :", result);
      if (!result.success) throw new Error(result.error);
    }
    return NextResponse.json({ message: "" });
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Webhook error: ${err.message}`);
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
  }
}

export const dynamic = "force-dynamic";

// with payment link;
// event.data.object = {
//     id: 'pm_1RpV5RAwHW0pzLPrc7isX8hM',
//     object: 'payment_method',
//     allow_redisplay: 'limited',
//     billing_details: {
//       address: [Object],
//       email: 'dragregre@gks.com',
//       name: 'fefwef wfwefwe',
//       phone: null,
//       tax_id: null
//     },
//     card: {
//       brand: 'visa',
//       checks: [Object],
//       country: 'US',
//       display_brand: 'visa',
//       exp_month: 11,
//       exp_year: 2034,
//       fingerprint: 'XWEAEYxtp0zZe5pN',
//       funding: 'credit',
//       generated_from: null,
//       last4: '4242',
//       networks: [Object],
//       regulated_status: 'unregulated',
//       three_d_secure_usage: [Object],
//       wallet: null
//     },
//     created: 1753624681,
//     customer: 'cus_Sl17By0EoFfheE',
//     livemode: false,
//     metadata: {},
//     type: 'card'
//   }
