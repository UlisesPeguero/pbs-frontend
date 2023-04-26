import logo from './logo.svg';
import './App.css';
import { Box, Container, ThemeProvider, createTheme } from '@mui/material';
import PBSAppBar from './home/PBSAppBar.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <PBSAppBar />
      <Container maxWidth={false} disableGutters={true}>
        <Box sx={{ backgroundColor: 'primary.dark' }} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
