import { CollectionConfig } from "payload";

export const Tickets: CollectionConfig = {
  slug: "tickets",
  labels: {
    plural: "Билети",
    singular: "Билет",
  },
  fields: [
    {
      name: "attendee",
      label: "Гост",
      type: "relationship",
      relationTo: "attendees",
      required: true,
    },
    {
      name: "event",
      label: "Събитие",
      type: "relationship",
      relationTo: "events",
      admin: {
        description:
          'Трябва да има създадено събитие. /admin > Events > "add new"',
      },
      required: true,
    },
    {
      name: "source",
      label: "Произход",
      type: "radio",
      defaultValue: "manually",
      options: [
        {
          label: "Stripe",
          value: "stripe",
        },
        {
          label: "Ръчно",
          value: "manually",
        },
      ],
      required: true,
    },
    {
      type: "row",
      admin: {
        hidden: true,
      },
      fields: [
        {
          name: "paymentIntentId",
          type: "text",
          //@ts-expect-error any type is being returned
          validate: (value, { siblingData }) => {
            return siblingData.source === "stripe" &&
              (!value || value.trim() === "")
              ? "You need to provide payment ID when using stripe"
              : true;
          },
        },
        {
          name: "createdAt",
          label: "Created At",
          type: "date",
          admin: {
            readOnly: true,
          },
        },
        {
          name: "updatedAt",
          label: "Updated At",
          type: "date",
          admin: {
            readOnly: true,
          },
        },
      ],
    },
  ],
  hooks: {
    // Runs before creating or updating the document
    beforeChange: [
      ({ data, originalDoc }) => {
        const now = new Date();
        if (!originalDoc) {
          // document is new
          data.createdAt = now;
        }
        // always update updatedAt timestamp
        data.updatedAt = now;
        return data;
      },
    ],
  },
};
