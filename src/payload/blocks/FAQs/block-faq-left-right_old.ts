import { Block } from 'payload';
import { QABlock } from './q-a-block';
import { defaultValueHelperText } from './default-helper-text';

export const FaqLeftRightBlock: Block = {
  slug: 'faqChessMate',
  interfaceName: 'FaqLeftRightBlockProps',
  labels: {
    singular: 'FAQ главна стр.',
    plural: 'FAQs главна стр.',
  },
  fields: [
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
