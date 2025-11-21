import { CollectionConfig } from "payload";

export const HomePage: CollectionConfig = {
  typescript: {
    interface: "HomePageProps",
  },
  admin: {
    hidden: false,
    useAsTitle: "label",
  },
  slug: "HomePage",
  fields: [
    {
      type: "row",
      fields: [
        {
          type: "text",
          name: "subheading",
          label: "Подзаглавие",
        },
        {
          type: "upload",
          name: "heroImg",
          relationTo: "media",
          label: "Hero image",
        },
      ],
    },
    {
      relationTo: "faqLeftRight",
      name: "faqLeftRight",
      type: "relationship",
      label: "FAQs",
    },
    {
      relationTo: "gallery7",
      name: "gallery7",
      type: "relationship",
      label: "Снимки минали събития",
    },
    {
      relationTo: "testimonial25",
      name: "testimonials25",
      type: "relationship",
      label: "Testimonials",
    },
    {
      relationTo: "events",
      name: "events",
      type: "relationship",
      hasMany: true,
      label: "Събитие на показ",
      admin: {
        description:
          "Ако не въведете, ще се показват всички включени актуални събития",
      },
    },
    {
      relationTo: "statisticsN",
      name: "statisticsN",
      type: "relationship",
      label: "3 Статистики",
    },
    {
      relationTo: "partnersN",
      name: "partners",
      type: "relationship",
      label: "Партньори лента",
    },
    {
      type: "text",
      name: "label",
      label: "Име в админ панела",
      defaultValue: "Начална стр.",
      required: true,
    },
  ],
};
