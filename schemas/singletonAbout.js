export default {
  title: 'About',
  name: 'about',
  type: 'document',
  //__experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      title: 'Heading Text',
      name: 'headingText',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Services',
      name: 'services',
      description: 'The services that will appear in the about page accordion',
      type: 'array',
      of: [{type: 'service', title: 'Service'}],
      validation: Rule => Rule.required().min(1)
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}