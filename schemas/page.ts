// page.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description:
        'Make it as enticing as possible to encourage interaction on social feeds and Google search results. Ideally between 15 & 70 characters.',
      type: 'string',
      validation: (Rule) => Rule.required().min(15).max(70),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Description',
      description:
        'Optional but highly recommended. Search engines use this to generate the snippet in search results. Ideally between 70 & 160 characters.',
      type: 'string',
      validation: (Rule) => Rule.min(70).max(160),
    }),
    defineField({
      name: 'path',
      title: 'Path',
      description: 'The path from route where the page can be found.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // Setup a 'document' type to house the page builder field
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        {type: 'hero'}, // hero.ts (same applies for the other types)
        {type: 'textWithIllustration'},
        {type: 'callToAction'},
        {type: 'gallery'},
        {type: 'form'},
        {type: 'video'},
        {type: 'features'},
        // etc...
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
