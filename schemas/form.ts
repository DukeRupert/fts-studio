// form.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'form',
  type: 'object',
  title: 'Form',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'form',
      type: 'string',
      title: 'Form',
      description: 'Select form type',
      options: {
        list: ['newsletter', 'register', 'contact'],
      },
    }),
  ],
})
