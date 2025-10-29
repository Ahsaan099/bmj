import { useState } from 'react'
import './App.css'
import About from '../pages/About'
import Home from '../pages/Home'
import Content from '../pages/Content'
import Product from '../pages/Product'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Content' element={<Content />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
