import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'client_testimonial',
  title: 'Client Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'clientName',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      media: 'mainImage',
    },
    prepare(selection) {
      const {client} = selection
      return {...selection, subtitle: client && `by ${client}`}
    },
  },
})
