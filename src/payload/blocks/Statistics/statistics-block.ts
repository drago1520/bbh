import { Block } from 'payload';
import { StatisticBlock } from './statistic-block';

export const StatisticsBlock: Block = {
  slug: 'statistics',
  interfaceName: 'StatisticsProps',
  labels: {
    singular: 'Statistics Block',
    plural: 'Statistics Block',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Заглавие на section',
      admin: {
        description: 'само понякога се показва',
        placeholder: 'Статистики за компанията',
      },
    },
    {
      name: 'statisticsData',
      label: 'Добави 3 статистики',
      type: 'blocks',
      admin: {
        initCollapsed: true,
      },
      blocks: [StatisticBlock],
      minRows: 3,
      maxRows: 3,
      required: true,
    },
  ],
};

// const _ = {
//   title: 'Статистики за компанията',
//   items: [
//     {
//       icon: '/networking.svg',
//       value: 50,
//       description: 'Нетуъркинг събития',
//     },
//     {
//       icon: '/gear.svg',
//       value: 100,
//       description: 'Души',
//     },
//     {
//       icon: '/conf.svg',
//       value: 3,
//       description: 'Ежегодни конференции',
//     },
//   ],
// };
