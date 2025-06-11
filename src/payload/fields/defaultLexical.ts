import { Config } from 'payload';
import { FixedToolbarFeature, LinkFeature, lexicalEditor, TextStateFeature } from '@payloadcms/richtext-lexical';
import { defaultColors } from '@payloadcms/richtext-lexical';

export const defaultLexical: Config['editor'] = lexicalEditor({
  features: ({ defaultFeatures, rootFeatures: _ }) => {
    return [
      ...defaultFeatures,
      FixedToolbarFeature(),
      TextStateFeature({
        state: {
          color: {
            ...defaultColors.background,
            ...defaultColors.text,
            // fancy gradients!
            galaxy: { label: 'Galaxy', css: { background: 'linear-gradient(to right, #0000ff, #ff0000)', color: 'white' } },
            sunset: { label: 'Sunset', css: { background: 'linear-gradient(to top, #ff5f6d, #6a3093)' } },
          },
          // You can have both colored and underlined text at the same time.
          // If you don't want that, you should group them within the same key.
          // (just like I did with defaultColors and my fancy gradients)
          underline: {
            solid: { label: 'Solid', css: { 'text-decoration': 'underline', 'text-underline-offset': '4px' } },
            // You'll probably want to use the CSS light-dark() utility.
            'yellow-dashed': { label: 'Yellow Dashed', css: { 'text-decoration': 'underline dashed', 'text-decoration-color': 'light-dark(#EAB308,yellow)', 'text-underline-offset': '4px' } },
          },
        },
      }),
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
