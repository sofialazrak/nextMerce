import { defineType, defineField } from 'sanity'

export const addressType = defineType({
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    defineField({ name: 'line1', title: 'Line 1', type: 'string', validation: r => r.required() }),
    defineField({ name: 'line2', title: 'Line 2', type: 'string' }),
    defineField({ name: 'city',  title: 'City',  type: 'string', validation: r => r.required() }),
    defineField({ name: 'state', title: 'State/Region', type: 'string' }),
    defineField({ name: 'postalCode', title: 'Postal Code', type: 'string', validation: r => r.required() }),
    defineField({ name: 'country', title: 'Country', type: 'string', validation: r => r.required() }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
  ],
})
