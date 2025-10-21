import { defineType, defineField } from 'sanity'

export const brandType = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Brand Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: { hotspot: true },
    }),
    defineField({
      name: 'website',
      type: 'url',
      title: 'Official Website',
    }),
  ],
})
