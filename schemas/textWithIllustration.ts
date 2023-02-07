// textWithIllustration.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textWithIllustration',
  type: 'object',
  title: 'Text with Illustration',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
  ],
})
