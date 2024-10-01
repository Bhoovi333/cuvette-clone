import React from 'react'
import Job from './components/job'
import './App.css'
import Navi from './components/nav'
import Lolo from './components/lolo'
import { Route,Routes } from "react-router-dom"
import Internship from './internship'
import Contact from "./contact"

function App() {
  return (
  <>
  
        <Navi /> 
  <div className="d-flex align-items-center fullvHeight">
 <Job /><br></br> <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Lolo/></div>
 <Routes>
      <Route exact path='/'/>
      <Route  exact path='/internship' element={<Internship/>}></Route>
      <Route  exact path='/contact' element={<Contact/>}></Route>
    </Routes> 
  
   </>
   
  )
}

export default App



