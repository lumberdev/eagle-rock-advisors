/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mona Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Freight Display', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        // Heading font sizes from design system
        'h1': ['96px', { lineHeight: '159%' }],
        'h2': ['64px', { lineHeight: '159%' }],
        'h3': ['52px', { lineHeight: '145%' }],
        'h4': ['34px', { lineHeight: '145%' }],
        'h5': ['28px', { lineHeight: '145%' }],
        'h6': ['22px', { lineHeight: '159%' }],
        
        // Body text sizes
        'body-xl': ['18px', { lineHeight: '165%' }],
        'body-l': ['16px', { lineHeight: '145%' }],
        'body-m': ['14px', { lineHeight: '165%' }],
        'body-s': ['12px', { lineHeight: '165%' }],
        
        // Special text styles
        'overline': ['12px', { lineHeight: '165%', letterSpacing: '16%' }],
        'label-l': ['22px', { lineHeight: '145%', letterSpacing: '16%' }],
        'label-m': ['16px', { lineHeight: '145%', letterSpacing: '16%' }],
        'label-s': ['14px', { lineHeight: '165%', letterSpacing: '16%' }],
      },
      colors: {
        // Eagle Rock brand colors
        'eagle-navy': '#1A2A42',
        'steel-blue': '#5B728A',
        'admiral-blue': '#223A5E',
        'midnight-blue': '#0F1B2D',
        'frosted-white': '#EAEFF4',
        'champagne-gold': '#D4B183',
        
        // Grayscale colors
        'white': '#FFFFFF',
        'black-19': '#E5E5E5',
        'black-25': '#BFBFBF',
        'black-50': '#7F7F7F',
        'black-75': '#404040',
        'black': '#000000',
      },
      backgroundColor: {
        'background': 'var(--background)',
      },
      textColor: {
        'foreground': 'var(--foreground)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
