import type { CollectionConfig } from 'payload';

import { authenticated } from '@/payload/auth/authenticated';
import { authenticatedOrPublished } from '@/payload/auth/authenticatedOrPublished';
import { slugField } from '@/payload/fields/slug';
import { populatePublishedAt } from '@/payload/hooks/populatePublishedAt';
import { generatePreviewPath } from '@/lib/utils/generatePreviewPath';
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage';

import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from '@payloadcms/plugin-seo/fields';
import { FaqLeftRightBlock } from '@/payload/blocks/FAQs/blocks/block-faq-left-right';
import { Gallery7Block } from '@/payload/blocks/Gallery/gallery-7';
import { Testimonial25Block } from '@/payload/blocks/Testimonials/testimonial-25-block';
import { StatisticsBlock } from '@/payload/blocks/Statistics/statistics-block';
import { AgendaBlock } from '@/payload/blocks/Info/agenda';
import { LecturersBlock } from '@/payload/blocks/Info/lecturers';
import { TimelineBlock } from '@/payload/blocks/Info/conference-timeline';
import { WhoIsTheConfForBlock } from '@/payload/blocks/Info/whoIsTheConferenceFor';

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        });

        return path;
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
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
          required: true,
        },
        {
          name: 'ctaText',
          label: 'Cta текст',
          type: 'text',
        },
      ],
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'emailTemplateId',
      label: 'Email Template ID от MailerSend',
      type: 'text',
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
              type: 'blocks',
              name: 'blocks',
              label: false,
              labels: {
                singular: 'block',
                plural: 'blocks',
              },
              // blocks: [HighImpactHero, MediumImpactHero, LowImpactHero, CallToAction, Content, MediaBlock, Archive],
              blocks: [FaqLeftRightBlock, Gallery7Block, Testimonial25Block, StatisticsBlock, AgendaBlock, LecturersBlock, TimelineBlock, WhoIsTheConfForBlock],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
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
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
};
