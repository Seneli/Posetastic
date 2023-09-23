import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    offWhite: '#dfefff',
    darkGrey: '#333333',
    textBlack: '#484848',
    dropShadow: '#48484866',

    background: '#fffaf3',
    technovaPink: '#fbb2bd',
    technovaBlue: '#9cb0f0',
    technovaGreen: '#a3ebe0',

    technovaPinkLight: '#fbe0e4',
    technovaBlueLight: '#e1f3ff',
    technovaGreenLight: '#d6f5f0',

    technovaBlueDark: "#6883d9"
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    content: 'Source Sans Pro, sans-serif',
  },
  fontSizes: {
    small: '1em',
    regular: '1.5em',
    small2: '1.3em',
    medium: '2em',
    medium2: '2.2em',
    large: '3em',
    larger: '4em',
  },
  viewport: {
    mobile: '(min-width: 320px)',
    mediumMobile: '(min-width: 390px)',
    widerMobile: '(min-width: 500px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
    hover: '(hover:hover)',
    monitor: '(min-width: 1600px)',
    xlmonitor: '(min-width: 2150px)',
  },
};

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;