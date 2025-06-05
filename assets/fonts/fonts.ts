import localFont from 'next/font/local';

// Load Mona Sans font
export const monaSans = localFont({
  src: [
    {
      path: './Mona_Sans/Static/MonaSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Mona_Sans/Static/MonaSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Mona_Sans/Static/MonaSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Mona_Sans/Static/MonaSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mona-sans',
  display: 'swap',
});

// Load Dreaming font
export const dreaming = localFont({
  src: [
    {
      path: './Dreaming/Dreaming-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-dreaming',
  display: 'swap',
});
