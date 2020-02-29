import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { teal, blue } from '@material-ui/core/colors';

const theme = 
  responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: 'dark',
        primary: teal,
        secondary: blue,
      },
    })
  );

export default theme;