import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import DefaultLayout from './components/DefaultLayout'




function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Products' element={<Products />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
