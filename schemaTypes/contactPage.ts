import {defineField, defineType} from 'sanity'

type ContactCardParent = {
  type?: 'office' | 'phone' | 'email' | 'hours'
}

const contactCardTypes = [
  {title: 'Visit Our Office', value: 'office'},
  {title: 'Call Us', value: 'phone'},
  {title: 'Email Us', value: 'email'},
  {title: 'Business Hours', value: 'hours'},
]

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'contactCards',
      title: 'Contact Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contactCard',
          title: 'Contact Card',
          fields: [
            defineField({
              name: 'type',
              title: 'Card Type',
              type: 'string',
              options: {
                list: contactCardTypes,
                layout: 'radio',
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'details',
              title: 'Details',
              type: 'array',
              of: [{type: 'string'}],
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: 'actionLabel',
              title: 'Action Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'actionLink',
              title: 'Action Link',
              description: 'Use tel:, mailto:, https:// or Google Maps links.',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'embedUrl',
              title: 'Map Embed URL',
              description: 'Only needed for the Visit Our Office card iframe.',
              type: 'string',
              hidden: ({parent}) => (parent as ContactCardParent | undefined)?.type !== 'office',
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const parent = context.parent as ContactCardParent | undefined

                  if (parent?.type === 'office' && !value) {
                    return 'Map Embed URL is required for the office card'
                  }

                  return true
                }),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'type',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(4).max(4),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Page',
      }
    },
  },
})
