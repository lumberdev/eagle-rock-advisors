import { defineConfig } from 'tinacms';
import nextConfig from '../next.config';

import Page from './collection/page';
import { navigation } from './collections/navigation';

const branch = process.env.VERCEL_GIT_COMMIT_REF || 'dev';

const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch,
  token: process.env.TINA_TOKEN!,
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads',
    },
  },
  build: {
    publicFolder: 'public', // The public asset folder for your framework
    outputFolder: 'admin', // within the public folder
    basePath: nextConfig.basePath?.replace(/^\//, '') || '', // The base path of the app (could be /blog)
  },
  schema: {
    collections: [Page, navigation],
  },
});

export default config;
