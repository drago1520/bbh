import type { CollectionConfig } from 'payload';

import { authenticated } from '@/payload/auth/authenticated';
import { authenticatedOrPublished } from '@/payload/auth/authenticatedOrPublished';
import { slugField } from '@/payload/fields/slug';
import { populatePublishedAt } from '@/payload/hooks/populatePublishedAt';
import { generatePreviewPath } from '@/lib/utils/generatePreviewPath';
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage';
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from '@payloadcms/plugin-seo/fields';

export const Homepage: CollectionConfig = {
  slug: 'homepage',
  labels: {
    singular: 'Homepage',
    plural: "Homepage"
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'homepage',
          req,
        });

        return path;
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'homepage',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'subheading',
          type: 'text'
        }
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              type: 'upload',
              relationTo: 'media',
              name: 'heroImg',
              label: 'Hero снимка',
              admin: {
                description: '100% от хората ще видят снимката. 60% от хората НЯМА да скролнат надолу. Трябва да отговаря на heading-а.',
              },
            },
            {
              type: 'relationship',
              relationTo: ['faqLeftRight', 'gallery7', 'testimonial25', 'statisticsN'],
              hasMany: true,
              name: 'sections',
              label: 'Секции 2',
            }],
        },
        {
          label: 'SEO',
          name: 'meta',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,
              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    beforeDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        showSaveDraftButton: true,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
};

