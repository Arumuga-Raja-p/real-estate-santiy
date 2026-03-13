import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutTeamSection',
  title: 'About Team Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'memberBadge',
      title: 'Member Badge',
      type: 'string',
    }),
    defineField({
      name: 'viewProfileLabel',
      title: 'View Profile Label',
      type: 'string',
    }),
    defineField({
      name: 'connectLabel',
      title: 'Connect Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
    }),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'teamMember',
          title: 'Team Member',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'bio',
              title: 'Bio',
              type: 'text',
            }),
            defineField({
              name: 'email',
              title: 'Email',
              type: 'string',
            }),
            defineField({
              name: 'phone',
              title: 'Phone',
              type: 'string',
            }),
            defineField({
              name: 'instagram',
              title: 'Instagram URL',
              type: 'url',
            }),
            defineField({
              name: 'x',
              title: 'X URL',
              type: 'url',
            }),
            defineField({
              name: 'facebook',
              title: 'Facebook URL',
              type: 'url',
            }),
            defineField({
              name: 'linkedin',
              title: 'LinkedIn URL',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'badge',
    },
  },
})
