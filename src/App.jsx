import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import{Toaster} from "react-hot-toast"

import "./styles/app.scss"

import Header from './components/Header'
import Home from './components/Home'

function App() {
  

  return (

    

   <Router>
      <Header />
      <Routes>
        <Route path= "/" element= {<Home />}/>
      </Routes>
      <Toaster />
   </Router> 
  )
}

export default App
