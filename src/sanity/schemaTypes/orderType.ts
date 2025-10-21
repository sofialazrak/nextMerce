import { defineType, defineField, defineArrayMember } from 'sanity'

export const orderType = defineType({
  name: 'order',
  title: 'Orders',
  type: 'document',
  fields: [
    // IDs & meta
    defineField({ name: 'orderId',       title: 'DB Order ID',    type: 'string', readOnly: true, validation: r => r.required() }),
    defineField({ name: 'orderNumber',   title: 'Order Number',   type: 'string', readOnly: true }),
    defineField({ name: 'status',        title: 'Order Status',   type: 'string', readOnly: true }),
    defineField({ name: 'paymentStatus', title: 'Payment Status', type: 'string', readOnly: true }),
    defineField({ name: 'paymentRef',    title: 'Payment Ref',    type: 'string', readOnly: true }),

    // Customer snapshot
    defineField({ name: 'customerEmail', title: 'Customer Email', type: 'string', readOnly: true }),
    defineField({ name: 'customerName',  title: 'Customer Name',  type: 'string', readOnly: true }),

    // Money
    defineField({ name: 'subtotal',      title: 'Subtotal',     type: 'number', readOnly: true }),
    defineField({ name: 'taxTotal',      title: 'Tax',          type: 'number', readOnly: true }),
    defineField({ name: 'shippingTotal', title: 'Shipping',     type: 'number', readOnly: true }),
    defineField({ name: 'discountTotal', title: 'Discount',     type: 'number', readOnly: true }),
    defineField({ name: 'grandTotal',    title: 'Grand Total',  type: 'number', readOnly: true }),

    // Addresses (uses your reusable "address" object type)
    defineField({ name: 'shippingAddress', title: 'Shipping Address', type: 'address', readOnly: true }),
    defineField({ name: 'billingAddress',  title: 'Billing Address',  type: 'address', readOnly: true }),

    // Items summary (snapshot)
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      readOnly: true,
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'productTitle', type: 'string', title: 'Product' },
            { name: 'sku',          type: 'string', title: 'SKU' },
            { name: 'quantity',     type: 'number', title: 'Qty' },
            { name: 'unitPrice',    type: 'number', title: 'Unit Price' },
            { name: 'lineTotal',    type: 'number', title: 'Line Total' },
          ],
      } as any),
      ]
    }),

    defineField({ name: 'createdAt', title: 'Created At', type: 'datetime', readOnly: true }),
    defineField({ name: 'notes',     title: 'Notes (internal)', type: 'text' }),
  ],
  preview: {
    select: {
      title: 'orderNumber',
      subtitle: 'customerEmail',
      grandTotal: 'grandTotal',
      currency: 'currency',
    },
    prepare({ title, subtitle, grandTotal, currency }) {
      const total = (typeof grandTotal === 'number') ? `${grandTotal.toFixed(2)} ${currency ?? ''}` : ''
      return { title: title ?? 'Order', subtitle: [subtitle, total].filter(Boolean).join(' · ') }
    },
  },
})
