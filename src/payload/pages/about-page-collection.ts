import { CollectionConfig } from "payload";

export const AboutPage: CollectionConfig = {
  typescript: {
    interface: "AboutPageProps",
  },
  admin: {
    useAsTitle: "label",
  },
  slug: "AboutPage",
  fields: [
    {
      label: "3 Статистики",
      relationTo: "statisticsN",
      name: "statisticsN",
      type: "relationship",
    },
    {
      label: "Партньори лента",
      relationTo: "partnersN",
      type: "relationship",
      name: "partners",
    },
    {
      type: "text",
      name: "label",
      label: "Име в админ панела",
      defaultValue: "About страница",
      required: true,
    },
  ],
};
