export default {
  name: 'history',
  title: 'History',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  }
}


