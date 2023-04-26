import logo from '../logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';
import {
  AppBar,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import UserProfilePicture from './UserProfilePicture';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function PBSAppBar() {

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <PetsIcon />
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
            Pet Boarding Service
          </Typography>
          <UserProfilePicture />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default PBSAppBar;
