import React from 'react'
import { Routes, Route} from "react-router-dom";
import Create from './pages/Create';
import Notes from './pages/Notes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#255',
    },
    secondary: teal,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route  path="/" element={<Notes />}/>
          <Route  path="create" element={<Create />}/>
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App


