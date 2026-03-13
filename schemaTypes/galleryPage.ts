import {defineField, defineType} from 'sanity'

const projectFields = [
  defineField({
    name: 'title',
    title: 'Title',
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
    name: 'description',
    title: 'Description',
    type: 'text',
  }),
]

export default defineType({
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  fields: [
    defineField({
      name: 'allProjectsLabel',
      title: 'All Projects Label',
      type: 'string',
    }),
    defineField({
      name: 'ongoingProjectsLabel',
      title: 'Ongoing Projects Label',
      type: 'string',
    }),
    defineField({
      name: 'completedProjectsLabel',
      title: 'Completed Projects Label',
      type: 'string',
    }),
    defineField({
      name: 'ongoingProjects',
      title: 'Ongoing Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'ongoingProjectItem',
          title: 'Ongoing Project Item',
          fields: projectFields,
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'completedProjects',
      title: 'Completed Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'completedProjectItem',
          title: 'Completed Project Item',
          fields: projectFields,
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Gallery Page',
      }
    },
  },
})
