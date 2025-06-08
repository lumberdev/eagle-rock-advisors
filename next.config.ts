import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable Turbopack (only for development)
  experimental: {
    turbo: {
      // Configure Turbopack rules
      rules: {
        // Handle SVGR for SVG files
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  webpack: (config, { isServer }) => {
    // Only apply webpack config when not using Turbopack
    if (!process.env.TURBOPACK) {
      // Grab the existing rule that handles SVG imports
      const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

      // Exclude SVG from the default file loader
      fileLoaderRule.exclude = /\.svg$/i;

      // Add SVGR loader
      config.module.rules.push({
        test: /\.svg$/i,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false, // Disable SVGO optimization to prevent issues with dynamic colors
              titleProp: true,
            },
          },
        ],
      });
    }

    // Suppress warnings about bufferutil and utf-8-validate
    // Supabase uses ws for realtime functionality which has optional dependencies on these packages
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        bufferutil: false,
        'utf-8-validate': false,
      };
    }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.tina.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  async headers() {
    // these are also defined in the root layout since github pages doesn't support headers
    const headers = [
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
      {
        key: 'Content-Security-Policy',
        value: "frame-ancestors 'self'",
      },
    ];
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
};

export default nextConfig;
