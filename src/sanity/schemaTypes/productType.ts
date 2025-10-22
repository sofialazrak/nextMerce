import { PackageIcon } from '@sanity/icons'
import { defineField, defineType, defineArrayMember } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Product Name',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      options: { rows: 3},
    } as any),
    defineField({
      name: 'sku',
      type: 'string',
      title: 'SKU (optional)',
      description: 'Human identifier; not required',
      validation: (Rule) => Rule.regex(/^[A-Za-z0-9_-]+$/).warning('Only letters, numbers, - and _'),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule) => Rule.min(0).required(),
    }),

    defineField({
      name: 'discountedPrice',
      type: 'number',
      title: 'Discounted Price',
      description: 'Leave empty if no discount applies',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Draft', value: 'draft' },
        ],
        layout: 'radio',
      },
      initialValue: 'active',
    }),

    defineField({
      name: 'rating',
      type: 'number',
      title: 'Average Rating',
      description: 'Automatically updated from user reviews',
      readOnly: true,
      hidden: true,
    }),

    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brand' }],
      validation: (Rule) => Rule.required(),
    } as any),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'productCategory' }],
      validation: (Rule) => Rule.required(),
    } as any),

    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'isNewArrival',
      title: 'New Arrival',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'isBestSeller',
      title: 'Best Seller',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'isFeatured',
      title: 'Featured product',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'stock',
      type: 'number',
      title: 'Stock Quantity',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      initialValue: new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
      media: 'images.0',
    },
  },
})
