import React from 'react'
import { Routes, Route} from "react-router-dom";
import Create from './pages/Create';
import Notes from './pages/Notes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f8f8f8',
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
      <Routes>
        <Route  path="/" element={<Create />}/>
        <Route  path="create" element={<Notes />}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App

//https://www.youtube.com/watch?v=TtJ3eCLYoRQ&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=8
// till video 8. radio button
