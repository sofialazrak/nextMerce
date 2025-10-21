import { defineField, defineType } from 'sanity'
import { CommentIcon } from '@sanity/icons'

export const reviewType = defineType({
  name: 'review',
  title: 'Reviews',
  type: 'document',
  icon: CommentIcon,
  fields: [
    // Stable pointer to your DB row
    defineField({
      name: 'reviewId',
      type: 'string',
      title: 'DB Review ID',
      readOnly: true,
      validation: r => r.required(),
    }),
    // Link to product ID
    defineField({
      name: 'productId',
      type: 'string',
      title: 'DB Product ID',
      readOnly: true,
      validation: r => r.required(),
    }),
    defineField({
      name: 'authorName',
      type: 'string',
      title: 'Author',
      readOnly: true,
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Rating',
      readOnly: true,
      validation: r => r.min(1).max(5),
    }),
    defineField({
      name: 'comment',
      type: 'text',
      title: 'Comment',
      readOnly: true,
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      readOnly: true,
    }),

    // Moderation controls
    defineField({
      name: 'isApproved',
      type: 'boolean',
      title: 'Approved',
      initialValue: false,
    }),
    defineField({
      name: 'moderationNotes',
      type: 'text',
      title: 'Notes (internal)',
    }),
  ],
  preview: {
    select: { title: 'authorName', subtitle: 'comment', rating: 'rating' },
    prepare(sel) { return { title: `${sel.title ?? 'Anonymous'} (${sel.rating ?? '-'}/5)`, subtitle: sel.subtitle } }
  },
})
