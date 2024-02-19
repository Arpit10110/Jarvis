import React from 'react'
import Home from "./Components/Home.jsx"
import { HashRouter as Router , Routes,Route } from 'react-router-dom'
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </Router>
  )
}

export default App
