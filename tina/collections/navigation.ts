import type { Collection } from 'tinacms';

export const navigation: Collection = {
  name: 'navigation',
  label: 'Navigation',
  format: 'json',
  path: 'content/navigation',

  fields: [
    {
      type: 'object',
      name: 'header',
      label: 'Header Navigation',
      fields: [
        {
          type: 'object',
          name: 'logo',
          label: 'Logo',
          fields: [
            {
              type: 'image',
              name: 'src',
              label: 'Logo Image',
              required: true,
            },
            {
              type: 'string',
              name: 'alt',
              label: 'Alt Text',
              required: true,
            },
          ],
        },
        {
          type: 'object',
          name: 'links',
          label: 'Navigation Links',
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.label || 'New Link',
            }),
          },
          fields: [
            {
              type: 'string',
              name: 'label',
              label: 'Label',
              required: true,
            },
            {
              type: 'string',
              name: 'href',
              label: 'URL',
              required: true,
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
          name: 'subLinks',
          label: 'Header Sub-Links',
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.label || 'New Sub-Link',
            }),
          },
          fields: [
            {
              type: 'string',
              name: 'label',
              label: 'Label',
              required: true,
            },
            {
              type: 'string',
              name: 'href',
              label: 'URL',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'object',
      name: 'footer',
      label: 'Footer',
      fields: [
        {
          type: 'object',
          name: 'logo',
          label: 'Logo',
          fields: [
            {
              type: 'image',
              name: 'src',
              label: 'Logo Image',
              required: true,
            },
            {
              type: 'string',
              name: 'alt',
              label: 'Alt Text',
              required: true,
            },
          ],
        },
        {
          type: 'string',
          name: 'copyright',
          label: 'Copyright Text',
          required: true,
        },
        {
          type: 'object',
          name: 'links',
          label: 'Footer Links',
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.label || 'New Link',
            }),
          },
          fields: [
            {
              type: 'string',
              name: 'label',
              label: 'Label',
              required: true,
            },
            {
              type: 'string',
              name: 'href',
              label: 'URL',
              required: true,
            },
          ],
        },
        {
          type: 'object',
          name: 'subLinks',
          label: 'Legal Links',
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.label || 'New Legal Link',
            }),
          },
          fields: [
            {
              type: 'string',
              name: 'label',
              label: 'Label',
              required: true,
            },
            {
              type: 'string',
              name: 'href',
              label: 'URL',
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
