import { generatePreviewPath } from '@/lib/utils/generatePreviewPath';
import { OverviewField, MetaTitleField, MetaImageField, MetaDescriptionField, PreviewField } from '@payloadcms/plugin-seo/fields';
import type { CollectionConfig } from 'payload';
import { authenticated } from '../auth/authenticated';
import { authenticatedOrPublished } from '../auth/authenticatedOrPublished';
import { FaqLeftRightBlock } from '../blocks/FAQs/blocks/block-faq-left-right_old';
import { Gallery7Block } from '../blocks/Gallery/gallery-7_old';
import { AgendaBlock } from '../blocks/Info/agenda_old';
import { TimelineBlock } from '../blocks/Info/conference-timeline';
import { LecturersBlock } from '../blocks/Info/lecturers_old';
import { WhoIsTheConfForBlock } from '../blocks/Info/whoIsTheConferenceFor';
import { PricingWithCountdownBlock } from '../blocks/Pricing/conference';
import { StatisticsBlock } from '../blocks/Statistics/statistics-block_old';
import { Testimonial25Block } from '../blocks/Testimonials/testimonial-25-block_old';
import { Testimonials2Block } from '../blocks/Testimonials/testimonials-conference';
import { slugField } from '../fields/slug';
import { populatePublishedAt } from '../hooks/populatePublishedAt';
import { revalidatePage, revalidateDelete } from '../Singletons/Pages/hooks/revalidatePage';


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
              blocks: [FaqLeftRightBlock, Gallery7Block, Testimonial25Block, StatisticsBlock, AgendaBlock, LecturersBlock, TimelineBlock, WhoIsTheConfForBlock, PricingWithCountdownBlock, Testimonials2Block],
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
        showSaveDraftButton: true,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
};
