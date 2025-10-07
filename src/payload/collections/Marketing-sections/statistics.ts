import { StatisticBlock } from '@/payload/blocks/Statistics/statistic-block';
import { CollectionConfig } from 'payload';

export const StatisticsCollection: CollectionConfig = {
  slug: 'homepageStatistics',
  labels: {
    singular: 'Статистика',
    plural: 'Статистики',
  },
  admin: {
    hidden: true,
    useAsTitle: 'label',
  },
  fields: [
    {
      type: 'text',
      name: 'label',
      label: 'Вътрешен етикет',
      defaultValue: 'Секция статистика',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Заглавие на секцията',
      admin: {
        description: 'Показва се над трите статистики',
        placeholder: 'Нашите резултати говорят',
      },
    },
    {
      name: 'statisticsData',
      type: 'blocks',
      label: 'Три статистики',
      blocks: [StatisticBlock],
      minRows: 3,
      maxRows: 3,
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
};
