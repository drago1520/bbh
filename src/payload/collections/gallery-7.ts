import { CollectionConfig } from "payload";

export const Gallery7Collection: CollectionConfig = {
  slug: "gallery7",
  labels: {
    singular: "Галерия",
    plural: "Галерии",
  },
  admin: {
    hidden: true,
    useAsTitle: "label",
  },
  fields: [
    {
      type: "text",
      name: "label",
      label: "Вътрешен етикет (питай дали се разбира)",
      defaultValue: "Галерия 7",
      required: true,
    },
    {
      type: "text",
      name: "title",
      label: "Заглавие",
    },
    {
      type: "upload",
      relationTo: "media",
      name: "images",
      label: "Снимки от събитието",
      hasMany: true,
      required: true,
    },
    {
      type: "richText",
      name: "descr",
      label: "Описание",
    },
    {
      type: "row",
      fields: [
        {
          type: "text",
          name: "ctaText",
          label: "CTA текст",
        },
        {
          type: "text",
          name: "ctaHref",
          label: "CTA линк",
        },
        {
          type: "number",
          name: "rotateSpeed",
          label: "Скорост на ротация",
          min: 0,
          admin: {
            width: "15%",
            placeholder: "0.4",
          },
        },
      ],
    },
  ],
};
