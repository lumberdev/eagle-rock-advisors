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

// Load Makarony font
export const makarony = localFont({
  src: [
    {
      path: './Makarony/Makarony-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-makarony',
  display: 'swap',
});
