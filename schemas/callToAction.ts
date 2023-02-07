// callToAction.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'callToAction',
  type: 'object',
  title: 'Call to Action',
  fields: [
    defineField({
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
    }),
  ],
})
