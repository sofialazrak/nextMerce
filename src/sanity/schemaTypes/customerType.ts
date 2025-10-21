import { defineType, defineField } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const customerType = defineType({
  name: 'customer',
  title: 'Customers',
  type: 'document',
  icon: UserIcon,
  fields: [
    // DB linkage
    defineField({
      name: 'customerId',
      title: 'DB Customer ID',
      type: 'string',
      readOnly: true,
      validation: r => r.required(),
    }),

    // Identity
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: r => r.required().email(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    // Editable addresses in Studio
    defineField({
      name: 'defaultShippingAddress',
      title: 'Default Shipping Address',
      type: 'address', // from addressType
    }),
    defineField({
      name: 'defaultBillingAddress',
      title: 'Default Billing Address',
      type: 'address',
    }),
  ],
  preview: {
    select: { title: 'email', subtitle: 'name' },
    prepare: (sel) => ({ title: sel.title, subtitle: sel.subtitle }),
  },
})
