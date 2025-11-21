import { CollectionConfig } from "payload";
import { defaultValueHelperText } from "./default-helper-text";
import { QABlock } from "./TODO-turnBlockIntoCollection-q-a-block";

export const FaqLeftRightCollection: CollectionConfig = {
  slug: "faqLeftRight",
  labels: {
    //the labels must be in bulgarian
    singular: "FAQ",
    plural: "FAQs",
  },
  admin: {
    hidden: true, //so it don't appear in the main admin UI to clutter
    useAsTitle: "title", //how it appears when in relationship's select
  },
  fields: [
    //directly add fields, not blocks to shorten up boilerplate
    {
      type: "row",
      fields: [
        {
          type: "text",
          name: "title",
          label: "Заглавие",
          defaultValue: "Често Задавани Въпроси",
          required: true,
        },
        {
          type: "text",
          name: "label",
          label: "Вътрешен етикет",
          defaultValue: "FAQ",
          required: true,
        },
        {
          type: "richText",
          name: "helperText",
          label: "Спомагателен Текст",
          defaultValue: defaultValueHelperText,
          required: true,
        },
      ],
    },
    {
      type: "blocks",
      name: "QABlock",
      blocks: [QABlock],
      required: true,
    },
  ],
};
