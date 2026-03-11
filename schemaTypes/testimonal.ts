import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonal',
  title: 'Testimonal',
  type: 'document',
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
      name: 'rating',
      title: 'rating',
      type: 'number',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name:'image',
      title:'Image',
      type:'image',
      options:{
        hotspot:true,
      }
    })
  ],
})
