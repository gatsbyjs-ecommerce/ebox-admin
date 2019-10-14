export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    },
    {
      name: 'socialHeading',
      title: 'Social Heading',
      type: 'string',
    },
    {
      name: 'socialSubheading',
      title: 'Social Subheading',
      type: 'string',
    },
    {
      name: 'subscribeFormHeading',
      title: 'Subscribe Form Heading',
      type: 'string',
    },
    {
      name: 'subscribeFormSubheading',
      title: 'Subscribe Form Subheading',
      type: 'string',
    },
  ],
};
