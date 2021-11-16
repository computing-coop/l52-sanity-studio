export default {
  title: 'Home',
  name: 'home',
  type: 'document',
 // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Heading Text',
      name: 'headingText',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
      description: 'The image for the hero background, used if a video is not selected',
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      title: 'Background Video',
      name: 'backgroundVideo',
      description: 'The looped video for the hero background (Note: keep file size as small as possible)',
      type: "file",
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