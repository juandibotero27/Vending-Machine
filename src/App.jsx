import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import VendingMachine from './VendingMachine'
import Sardines from './Sardines'
import Chips from './Chips'
import Soda from './Soda'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/sardines' element={<Sardines />}/>
          <Route path='/chips' element={<Chips />} />
          <Route path='/soda' element={<Soda />} />

        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App