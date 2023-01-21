import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Signin from './Signin'
import Exam_Section from './Exam_Section'
import Signup from './Signup'
import Home from './Home'
import GraphData from './GraphData'
import Quizformlogin from './Quizformlogin'
import UserDetail from './UserDetail'
import Attendence from './Attendence'
import Contact from './Contact'

export default function Navbar() { 

  return ( 
    <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/examsection">Students</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signindata">Teachers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/graphdata">Students Data</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/attendence">Attendence</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  

    
     {/* <Signup/> */}

     {/* <Signin/> */}


    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/examsection' element={<Exam_Section/>}/>
    <Route path='/signindata' element={<UserDetail/>}/>
     <Route path='/graphdata' element={<GraphData/>}/> 
    {/* <Route path='/attendence' element={<Attendence/>}/>  */}
    <Route path='/contact' element={<Contact/>}/> 
    </Routes>
    </>
  )
}
