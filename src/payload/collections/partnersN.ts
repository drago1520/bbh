import { CollectionConfig } from "payload";

export const PartnersNCollection: CollectionConfig = {
  slug: "partnersN",
  typescript: {
    interface: "PartnersNProps",
  },
  labels: {
    singular: "Партньори",
    plural: "Партньори",
  },
  admin: {
    hidden: true, //so it don't appear in the main admin UI to clutter
    useAsTitle: "label", //how it appears when in relationship's select
  },
  fields: [
    {
      type: "text",
      name: "label",
      label: "Internal Label",
      defaultValue: "Партньори Лента с лога",
      required: true,
      admin: {
        description:
          "Така ще се показва раздела, когато го избирате от някоя страница. Да НЕ се трие, и препоръчително да не се пипа.",
      },
    },
    {
      name: "subtitle",
      type: "text",
      label: "Подзаглавие",
    },
    {
      name: "images",
      label: "Лого-та на компании",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      required: true,
    },
  ],
};
