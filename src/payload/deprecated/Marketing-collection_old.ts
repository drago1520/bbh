import { CollectionConfig } from "payload";
import { Block } from "payload";

export const Partners2Block: Block = {
  slug: "partners2",
  labels: {
    singular: "Партньори2",
    plural: "Партньори2",
  },
  interfaceName: "Partners2Props",

  fields: [
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
export const PartnersBlock: Block = {
  //Partners2Props = PartnersProps; вече няма partners2, защото единствената разлика беше, че Partners2 има име за всеки партньор освен снимка
  slug: "partners",
  labels: {
    singular: "Партньори",
    plural: "Партньори",
  },
  interfaceName: "PartnersProps",
  fields: [
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
export const MarketingSectionsCollection: CollectionConfig = {
  slug: "marketing-sections",
  labels: {
    singular: "Маркетинг секция",
    plural: "Маркетинг секции",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "Partners",
          label: "Партньори",
          fields: [
            {
              name: "partners",
              type: "blocks",
              blocks: [PartnersBlock],
              maxRows: 1,
              required: true,
            },
          ],
        },
        {
          name: "Partners2",
          label: "Партньори карусел",
          fields: [
            {
              name: "partners2",
              type: "blocks",
              blocks: [Partners2Block],
              maxRows: 1,
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
