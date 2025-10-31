import { DefaultNodeTypes, SerializedBlockNode, SerializedLinkNode } from '@payloadcms/richtext-lexical'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { JSXConvertersFunction, LinkJSXConverter, RichText as RichTextWithoutBlocks } from '@payloadcms/richtext-lexical/react'
import { CodeBlock, CodeBlockProps } from '@/payload/blocks/Code/Component'

import type {} from '@/payload-types'
import { cn } from '@/lib/utils'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<CodeBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo: _ } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
    // cta: ({ node }) => <CallToActionBlock {...node.fields} />,
  },
})

type Props = {
  data: SerializedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = false, ...rest } = props
  return (
    <RichTextWithoutBlocks
      converters={jsxConverters}
      className={cn(
        {
          container: enableGutter,
          // 'max-w-none': !enableGutter,
          'prose dark:prose-invert max-w-full': enableProse,
          // fix: bolded text was always black. Added the same css in globals.css also in any case.
          'underline-offset-3 [&_a:not(.not-prose)]:text-inherit! [&_a:not(:has(.not-prose))]:text-inherit! [&_blockquote]:border-l-teal-500': true,
        },
        className,
      )}
      {...rest}
    />
  )
}

export function extractFeaturesFromList(richTextContent): string[] {
  const features: string[] = []

  richTextContent.forEach(node => {
    if (node.type === 'list' && node.tag === 'ul') {
      node.children.forEach(listItem => {
        if (listItem.type === 'listitem') {
          const text = listItem.children
            .map(paragraph => paragraph.children.map(textNode => textNode.text).join(''))
            .join('')
            .trim()

          if (text) {
            features.push(text)
          }
        }
      })
    }
  })

  return features
}
