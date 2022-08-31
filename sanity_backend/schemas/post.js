export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block Tweet',
      description: 'ADMIN Controls: Toggle if tweet is inappropiate',
      type: 'boolean',
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: {type: 'user'},
    },
    {
      name: 'tweetImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'profileImage',
      title: 'Profile image',
      type: 'string',
    },


  ]
}