import { Block } from 'payload';
import { defaultValueHelperText } from '../default-helper-text';
import { QABlock } from './q-a-block';

export const FaqLeftRightBlock: Block = {
  slug: 'faqChessMate',
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
