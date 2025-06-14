'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Page } from '@/payload-types';
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import RichText from './RichText';

export default function FAQsThree({ homepageBlocks }: { homepageBlocks: Page['blocks'] }) {
  if (!homepageBlocks) return;
  const faqBlock = homepageBlocks.find(({ blockType }) => blockType == 'faqChessMate');
  if (!faqBlock?.QABlock) return;

  return (
    <section className="bg-muted dark:bg-background py-20">
      <div className="container">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="prose sticky top-20">
              <h3 className="mt-4">{faqBlock.title}</h3>
              <RichText className="text-muted-foreground" data={faqBlock.helperText} />
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqBlock.QABlock.map(({ question, answer }) => (
                <AccordionItem key={question} value={question} className="bg-background rounded-lg border px-4 shadow-xs last:border-b">
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      {/* {icon && <div className="flex size-6">
                        <DynamicIcon name={icon} className="m-auto size-4" />
                      </div>} */}
                      <span className="text-base">{question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      {/* <p className="text-base">{answer}</p> */}
                      <RichText data={answer} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
