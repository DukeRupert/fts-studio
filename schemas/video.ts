// video.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'video',
  type: 'object',
  title: 'Video',
  fields: [
    defineField({
      name: 'videoLabel',
      type: 'string',
      title: 'Video Label',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
  ],
})
