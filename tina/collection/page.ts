import { Collection } from 'tinacms';

const Page: Collection = {
  name: 'page',
  label: 'Pages',
  path: 'content/pages',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === 'home') {
        return '/';
      }
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Page Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'object',
      name: 'hero',
      label: 'Hero Section',
      fields: [
        {
          type: 'string',
          name: 'heading',
          label: 'Heading',
        },
        {
          type: 'string',
          name: 'subheading',
          label: 'Subheading',
          ui: {
            component: 'textarea',
          },
        },
        {
          type: 'image',
          name: 'backgroundImage',
          label: 'Background Image',
          description: 'Used as fallback if video is not available',
        },
        {
          type: 'image',
          name: 'videoFile',
          label: 'Background Video',
          description: 'Local video file for hero background (MP4 format recommended)',
        },
        {
          type: 'object',
          name: 'cta',
          label: 'Call to Action',
          fields: [
            {
              type: 'string',
              name: 'text',
              label: 'Button Text',
            },
            {
              type: 'string',
              name: 'link',
              label: 'Button Link',
            },
          ],
        },
      ],
    },
    {
      type: 'object',
      name: 'about',
      label: 'About Section',
      fields: [
        {
          type: 'string',
          name: 'heading',
          label: 'Heading',
        },
        {
          type: 'string',
          name: 'subheading',
          label: 'Subheading',
          ui: {
            component: 'textarea',
          },
        },
      ],
    },
    {
      type: 'object',
      name: 'stats',
      label: 'Stats Section',
      fields: [
        {
          type: 'object',
          name: 'statItems',
          label: 'Statistics',
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.heading };
            },
          },
          fields: [
            {
              type: 'string',
              name: 'heading',
              label: 'Heading',
            },
            {
              type: 'string',
              name: 'subheading',
              label: 'Subheading',
            },
          ],
        },
      ],
    },
    {
      type: 'object',
      name: 'experience',
      label: 'Experience Section',
      fields: [
        {
          type: 'image',
          name: 'image',
          label: 'Image',
        },
        {
          type: 'string',
          name: 'heading',
          label: 'Heading',
        },
        {
          type: 'string',
          name: 'subheading',
          label: 'Subheading',
        },
        {
          type: 'string',
          name: 'description',
          label: 'Description',
          ui: {
            component: 'textarea',
          },
        },
      ],
    },
    {
      type: 'object',
      name: 'mission',
      label: 'Mission Section',
      fields: [
        {
          type: 'image',
          name: 'image',
          label: 'Background Image',
        },
        {
          type: 'string',
          name: 'overlayColor',
          label: 'Overlay Color',
          description: 'Hex color code (e.g., #000000 for black)',
        },
        {
          type: 'string',
          name: 'heading',
          label: 'Heading',
        },
        {
          type: 'object',
          name: 'cta',
          label: 'Call to Action',
          fields: [
            {
              type: 'string',
              name: 'text',
              label: 'Button Text',
            },
            {
              type: 'string',
              name: 'link',
              label: 'Button Link',
            },
          ],
        },
      ],
    },
    {
      type: 'object',
      name: 'communities',
      label: 'Communities Section',
      fields: [
        {
          type: 'string',
          name: 'heading',
          label: 'Heading',
        },
        {
          type: 'string',
          name: 'subheading',
          label: 'Subheading',
        },
        {
          type: 'object',
          name: 'cta',
          label: 'Call to Action',
          fields: [
            {
              type: 'string',
              name: 'text',
              label: 'Button Text',
            },
            {
              type: 'string',
              name: 'link',
              label: 'Button Link',
            },
          ],
        },
        {
          type: 'image',
          name: 'carouselImages',
          label: 'Carousel Images',
          list: true,
        },
      ],
    },
    {
      type: 'object',
      name: 'expertise',
      label: 'Expertise Section',
      fields: [
        {
          type: 'string',
          name: 'heading',
          label: 'Heading',
        },
        {
          type: 'object',
          name: 'accordionItems',
          label: 'Accordion Items',
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.heading };
            },
          },
          fields: [
            {
              type: 'string',
              name: 'heading',
              label: 'Heading',
            },
            {
              type: 'string',
              name: 'subheading',
              label: 'Subheading',
              ui: {
                component: 'textarea',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body Content',
      isBody: true,
    },
    {
      type: 'object',
      name: 'seo',
      label: 'SEO',
      fields: [
        {
          type: 'string',
          name: 'heading',
          label: 'SEO Heading',
        },
        {
          type: 'string',
          name: 'description',
          label: 'SEO Description',
          ui: {
            component: 'textarea',
          },
        },
        {
          type: 'image',
          name: 'ogImage',
          label: 'Open Graph Image',
        },
      ],
    },
  ],
};

export default Page;
