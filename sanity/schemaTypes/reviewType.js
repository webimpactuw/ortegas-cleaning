export const reviewType = {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'reviewer',
      title: 'Reviewer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'numStars',
      title: 'Star Rating (1–5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
    },
    {
      name: 'featuredOnHomepage',
      title: 'Featured on Homepage',
      type: 'boolean',
      description: 'Show this review in the "What Our Clients Say" section on the homepage (up to 3 will show)',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'reviewer',
      subtitle: 'reviewText',
    },
  },
}
