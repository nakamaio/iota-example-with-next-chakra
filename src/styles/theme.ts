import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: '#F7F7F8',
        color: '#000',
      },
    },
  },

  fonts: {
    heading: 'Inter Variable, sans-serif',
    body: 'Inter Variable, sans-serif',
  },
  breakpoints: {
    // Default Chakra breakpoints with custom "2xl", "3xl" and "4xl"
    base: '0px',
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1440px',
    '3xl': '1600px',
    '4xl': '1800px',
  },
})
