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
    // ===== HERO SECTION =====
    {
      type: 'object',
      name: 'hero',
      label: 'Hero Section',
      fields: [
        {
          type: 'string',
          name: 'overline',
          label: 'Overline',
          description: 'Small text that appears above the heading',
          ui: {
            component: 'text',
          },
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
          name: 'backgroundImageMobile',
          label: 'Background Image Mobile',
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
            {
              type: 'boolean',
              name: 'isExternal',
              label: 'External Link',
              description: 'Check if this link is external & should open in a new tab',
            },
          ],
        },
      ],
    },
    // ===== ABOUT SECTION =====
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
    // ===== WHAT WE DO SECTION =====
    {
      type: 'object',
      name: 'whatWeDo',
      label: 'What We Do Section',
      fields: [
        {
          type: 'object',
          name: 'whatWeDoItems',
          label: 'What We Do Items',
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.title };
            },
          },
          fields: [
            {
              type: 'string',
              name: 'title',
              label: 'Title',
            },
            {
              type: 'image',
              name: 'iconImage',
              label: 'Icon Image',
            },
          ],
        },
      ],
    },
    // ===== EXPERIENCE SECTION =====
    {
      type: 'object',
      name: 'experience',
      label: 'Experience Section',
      fields: [
        {
          type: 'image',
          name: 'videoFile',
          label: 'Background Video',
          description: 'Local video file for hero background (MP4 format recommended)',
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
    // ===== STATS SECTION =====
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
    // ===== INVESTMENT APPROACH SECTION =====
    {
      type: 'object',
      name: 'investmentApproch',
      label: 'Investment Approach Section',
      fields: [
        {
          type: 'image',
          name: 'image',
          label: 'Map Image',
        },
        {
          type: 'string',
          name: 'heading',
          label: 'Heading',
        },
        {
          type: 'string',
          name: 'subHeading',
          label: 'Sub Heading',
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
            {
              type: 'boolean',
              name: 'isExternal',
              label: 'External Link',
              description: 'Check if this link is external & should open in a new tab',
            },
          ],
        },
      ],
    },
    // ===== INVESTMENT CARDS SECTION =====
    {
      type: 'object',
      name: 'investmentCards',
      label: 'Investment Cards Section',
      fields: [
        {
          type: 'object',
          name: 'investmentCardsItems',
          label: 'Investment Cards Items',
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
              name: 'subHeading',
              label: 'Sub Heading',
            },
            {
              type: 'string',
              name: 'backgroundColor',
              label: 'Background Color',
            },
            {
              type: 'string',
              name: 'textColor',
              label: 'Text Color',
            },
          ],
        },
      ],
    },
    // ===== HISTORY SECTION =====
    {
      type: 'object',
      name: 'history',
      label: 'History Section',
      fields: [
        {
          type: 'string',
          name: 'heading',
          label: 'Heading',
        },
        {
          type: 'string',
          name: 'subHeading',
          label: 'Sub Heading',
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
            {
              type: 'boolean',
              name: 'isExternal',
              label: 'External Link',
              description: 'Check if this link is external & should open in a new tab',
            },
          ],
        },
        {
          type: 'object',
          name: 'historyItems',
          label: 'History Items',
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.year };
            },
          },
          fields: [
            {
              type: 'string',
              name: 'year',
              label: 'Year',
            },
            {
              type: 'string',
              name: 'subHeading',
              label: 'SubHeading',
            },
            {
              type: 'string',
              name: 'equity',
              label: 'Equity',
            },
            {
              type: 'string',
              name: 'operatingIn',
              label: 'Operating In',
            },
          ],
        },
      ],
    },
    // ===== MISSION SECTION =====
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
          type: 'string',
          name: 'description',
          label: 'Description',
          ui: {
            component: 'textarea',
          },
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
            {
              type: 'boolean',
              name: 'isExternal',
              label: 'External Link',
              description: 'Check if this link is external & should open in a new tab',
            },
          ],
        },
      ],
    },
    // ===== TEAM SECTION =====
    {
      type: 'object',
      name: 'teamSection',
      label: 'Team Section',
      fields: [
        {
          type: 'string',
          name: 'overline',
          label: 'Overline',
        },
        {
          type: 'string',
          name: 'heading',
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
          type: 'object',
          name: 'teamMembers',
          label: 'Team Members',
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.name || 'New Team Member',
            }),
          },
          fields: [
            {
              type: 'image',
              name: 'image',
              label: 'Profile Image',
            },
            {
              type: 'string',
              name: 'name',
              label: 'Full Name',
            },
            {
              type: 'string',
              name: 'title',
              label: 'Job Title',
            },

            {
              type: 'string',
              name: 'company',
              label: 'Company',
            },
            {
              type: 'string',
              name: 'bio',
              label: 'Bio',
              ui: {
                component: 'textarea',
              },
            },
            {
              type: 'string',
              name: 'linkedin',
              label: 'LinkedIn URL',
            },
          ],
        },
      ],
    },
    // ===== MANAGEMENT TEAM SECTION =====
    {
      type: 'object',
      name: 'managementTeamSection',
      label: 'Management Team Section',
      fields: [
        {
          type: 'string',
          name: 'overline',
          label: 'Overline',
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
          ui: {
            component: 'textarea',
          },
        },
        {
          type: 'object',
          name: 'teamMembers',
          label: 'Management Team Members',
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.name || 'New Management Team Member',
            }),
          },
          fields: [
            {
              type: 'image',
              name: 'image',
              label: 'Profile Image',
            },
            {
              type: 'string',
              name: 'name',
              label: 'Full Name',
            },
            {
              type: 'string',
              name: 'title',
              label: 'Job Title',
            },
            {
              type: 'string',
              name: 'company',
              label: 'Company',
            },
            {
              type: 'string',
              name: 'bio',
              label: 'Bio',
              ui: {
                component: 'textarea',
              },
            },
            {
              type: 'string',
              name: 'linkedin',
              label: 'LinkedIn URL',
            },
          ],
        },
      ],
    },
    // ===== BODY SECTION =====
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body Content',
      isBody: true,
    },
    // ===== SEO SECTION =====
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
