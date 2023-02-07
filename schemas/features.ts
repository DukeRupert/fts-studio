import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'features',
  type: 'object',
  title: 'Features',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (Rule) => Rule.required().min(2).max(40),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(2).max(70),
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
      validation: (Rule) => Rule.min(20).max(160),
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
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features / Services',
      of: [{type: 'feature'}],
    }),
  ],
})
