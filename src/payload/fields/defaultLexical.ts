import { Config } from 'payload';
import { FixedToolbarFeature, LinkFeature, lexicalEditor } from '@payloadcms/richtext-lexical';

export const defaultLexical: Config['editor'] = lexicalEditor({
  features: ({ defaultFeatures, rootFeatures: _ }) => {
    return [
      ...defaultFeatures,
      FixedToolbarFeature(),
      LinkFeature({
        enabledCollections: ['pages', 'posts'],
        fields: ({ defaultFields }) => {
          const defaultFieldsWithoutUrl = defaultFields.filter(field => {
            if ('name' in field && field.name === 'url') return false;
            return true;
          });

          return [
            ...defaultFieldsWithoutUrl,
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: (_data, siblingData) => siblingData?.linkType !== 'internal',
              },
              label: ({ t }) => t('fields:enterURL'),
              required: true,
            },
          ];
        },
      }),
    ];
  },
});
