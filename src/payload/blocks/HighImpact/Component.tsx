'use client';
import { useHeaderTheme } from '@/components/ThemeProvider/HeaderTheme';
import React, { useEffect } from 'react';

import { CMSLink } from '@/payload/fields/Link/index';
import { Media } from '@/components/Media';
import RichText from '@/components/RichText';
import { HighImpactHeroBlock } from '@/payload-types';

export const HighImpactHero = ({ links, media, richText }: HighImpactHeroBlock) => {
  const { setHeaderTheme } = useHeaderTheme();

  useEffect(() => {
    setHeaderTheme('dark');
  });

  return (
    <div className="relative -mt-[10.4rem] flex items-center justify-center text-white" data-theme="dark">
      <div className="relative z-10 container mb-8 flex items-center justify-center">
        <div className="max-w-146 md:text-center">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4 md:justify-center">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="min-h-[80vh] select-none">{media && typeof media === 'object' && <Media fill imgClassName="-z-10 object-cover" priority resource={media} />}</div>
    </div>
  );
};
