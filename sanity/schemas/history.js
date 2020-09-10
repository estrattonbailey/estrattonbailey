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
      name: 'comment',
      title: 'Comment',
      type: 'text'
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


