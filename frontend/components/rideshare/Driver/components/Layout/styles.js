import {
    createTheme,
    responsiveFontSizes,
  } from '@mui/material/styles';
  import { makeStyles } from '@mui/styles';
  import { blue } from '@mui/material/colors';
  
  let theme = createTheme({
    palette: {
      type: 'light',
      primary: blue,
      secondary: blue
    }
  });
  
  theme = responsiveFontSizes(theme);
  
  const useStyle = makeStyles(() => ({
    root: {
      width: 'auto',
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary
    },
    paper: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      padding: theme.spacing(3),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3)
      }
    }
  }));
  
  export { theme, useStyle };
  