import { QABlock } from "@/payload/blocks/FAQs/blocks/q-a-block";
import { defaultValueHelperText } from "@/payload/blocks/FAQs/default-helper-text";
import { CollectionConfig } from "payload";


export const FaqLeftRightCollection: CollectionConfig = {
  slug: 'faqLeftRight',
  labels: { //the labels must be in bulgarian
    singular: 'FAQ',
    plural: 'FAQs',
  },
  admin: {
    hidden: true, //so it don't appear in the main admin UI to clutter
    useAsTitle: 'label', //how it appears when in relationship's select
  },
  fields: [ //directly add fields, not blocks to shorten up boilerplate
    {
      type: 'text',
      name: 'label',
      label: 'Internal Label',
      defaultValue: 'FAQ-шахмат',
      required: true,
      admin: {
        description: "Така ще се показва раздела, когато го избирате от някоя страница. Да НЕ се трие, и препоръчително да не се пипа."
      },
    },
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'title',
          label: 'Заглавие',
          defaultValue: 'Често Задавани Въпроси',
          required: true,
        },
        {
          type: 'richText',
          name: 'helperText',
          label: 'Спомагателен Текст',
          defaultValue: defaultValueHelperText,
          required: true,
        },
      ],
    },
    {
      type: 'blocks',
      name: 'QABlock',
      blocks: [QABlock],
      required: true,
    },
  ],
};