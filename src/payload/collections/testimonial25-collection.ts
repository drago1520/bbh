import { CollectionConfig } from "payload";
import { Testimonial25CardBlock } from "./TODO-turnIntoCollection-testimonial-25-card-block";

export const Testimonial25Collection: CollectionConfig = {
  slug: "testimonial25",
  typescript: {
    interface: "Testimonial25Props",
  },
  labels: {
    singular: "Препоръка",
    plural: "Препоръки",
  },
  admin: {
    hidden: true,
    useAsTitle: "label",
  },
  fields: [
    {
      type: "text",
      name: "label",
      label: "Вътрешен етикет",
      defaultValue: "Препоръки 25",
      required: true,
    },
    {
      name: "title",
      type: "text",
      label: "Заглавие",
      required: true,
      admin: {
        placeholder: "Trusted by product builders",
      },
    },
    {
      name: "helperText",
      type: "text",
      label: "Помощен текст",
      admin: {
        placeholder:
          "Mainline is built on the habits that make the best product teams successful: staying focused, moving quickly, and always aiming for high-quality work.",
      },
    },
    {
      name: "ctaText",
      type: "text",
      label: "CTA текст",
      admin: {
        placeholder: "Read our Customer Stories",
      },
    },
    {
      name: "ctaHref",
      type: "text",
      label: "CTA линк",
      admin: {
        placeholder: "#",
      },
    },
    {
      name: "cards",
      type: "blocks",
      blocks: [Testimonial25CardBlock],
      required: true,
      admin: {
        initCollapsed: true,
        description:
          "Добавете отделните карти за препоръки. При нужда копирайте вече съществуващи записи.",
      },
    },
  ],
};
