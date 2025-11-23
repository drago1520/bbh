import { Block } from "payload";

export const QABlock: Block = {
  slug: "qABlock",
  interfaceName: "QABlockProps",
  labels: {
    plural: "Q&A Блокове",
    singular: "Q&A Блок",
  },
  fields: [
    {
      type: "text",
      name: "question",
      label: "Въпрос",
      required: true,
    },
    {
      type: "richText",
      name: "answer",
      label: "Отговор",
      required: true,
    },
  ],
};
