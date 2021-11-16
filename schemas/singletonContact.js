export default {
  title: 'Contact',
  name: 'contact',
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
      title: 'Hero Image',
      name: 'heroImage',
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      title: 'Email (General Enquiries)',
      name: 'emailGeneralEnquiries',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Email (Press Enquiries)',
      name: 'emailPressEnquiries',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Telephone',
      name: 'telephone',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Address',
      name: 'address',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      title: "Home Image (Menu)",
      description: "The image that will appear when hovering the home page on the menu",
      name: "homeMenuImage",
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: "About Us Image (Menu)",
      description: "The image that will appear when hovering the about page on the menu",
      name: "aboutMenuImage",
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: "Work Image (Menu)",
      description: "The image that will appear when hovering the work page on the menu",
      name: "workMenuImage",
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: "Clients Image (Menu)",
      description: "The image that will appear when hovering the clients page on the menu",
      name: "clientsMenuImage",
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: "Digital Showroom Image (Menu)",
      description: "The image that will appear when hovering the digital showroom page on the menu",
      name: "digitalShowroomMenuImage",
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: "Contact Image (Menu)",
      description: "The image that will appear when hovering the contact page on the menu",
      name: "contactMenuImage",
      type: 'image',
      validation: Rule => Rule.required()
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