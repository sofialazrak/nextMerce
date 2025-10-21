import {defineType, defineField} from 'sanity'

export const orderItemType = defineType({
  name: 'orderItem',
  title: 'Order Item',
  type: 'object',
  fields: [
    defineField({ name: 'productTitle', type: 'string', title: 'Product' }),
    defineField({ name: 'quantity',     type: 'number', title: 'Qty' }),
    defineField({ name: 'unitPrice',    type: 'number', title: 'Price' }),
    defineField({ name: 'lineTotal',    type: 'number', title: 'Total' }),
  ],
})
