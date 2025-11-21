import { CollectionConfig } from "payload";

export const NetworkingPage: CollectionConfig = {
  typescript: {
    interface: "NetworkingPageProps",
  },
  admin: {
    hidden: false,
    useAsTitle: "label",
  },
  slug: "NetworkingPage",
  fields: [
    {
      relationTo: "events",
      name: "event",
      type: "relationship",
      label: "Събитие на показ",
      admin: {
        description: "Ако не въведете събитие, най-новото ще се покаже.",
      },
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
      defaultValue: "Networking стр.",
      required: true,
    },
  ],
};
