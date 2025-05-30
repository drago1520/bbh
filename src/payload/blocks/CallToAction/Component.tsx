import React from 'react';

import type { CallToActionBlock as CTABlockProps } from '@/payload-types';

import RichText from '@/components/RichText';
import { CMSLink } from '@/payload/fields/Link/index';

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="border-border bg-card flex flex-col gap-8 rounded border p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-3xl items-center">{richText && <RichText className="mb-0" data={richText} enableGutter={false} />}</div>
        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />;
          })}
        </div>
      </div>
    </div>
  );
};
