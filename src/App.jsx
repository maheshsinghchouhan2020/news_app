import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'

const App = () => {

  const [category, setCategory] = useState("general")

  return (
    <>
      <Router>
        <Navbar setCategory={setCategory} />
        <NewsBoard category={category} />

        <Routes>
          {/* <Route path='/' element={HomePage}/> */}
        </Routes>
      </Router>
    </>
  )
}

export default App