import React from 'react'
import { Routes, Route} from "react-router-dom";
import Create from './pages/Create';
import Notes from './pages/Notes';

const App = () => {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Notes />}/>
        <Route  path="create" element={<Create />}/>
      </Routes>
    </div>
  )
}

export default App
