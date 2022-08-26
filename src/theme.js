import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      "50": "#E5EEFF",
      "100": "#B8CFFF",
      "200": "#8AB1FF",
      "300": "#5C92FF",
      "400": "#2E74FF",
      "500": "#0055FF",
      "600": "#0044CC",
      "700": "#003399",
      "800": "#002266",
      "900": "#001133"
    }
  },
  styles: {
    global: {
      a: {
        color: 'brand.500',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: 'brand',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
});


export default theme;