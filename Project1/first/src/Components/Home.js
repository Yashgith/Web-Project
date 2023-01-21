import React from 'react'
import Signin from './Signin'
import Signup from './Signup'
import './Home.css'

export default function Home() {
  
  return (
    <>

    <div className='signmain'>

    <div className='signform'>

        <Signup/>
    </div>

    <div className='loginform'>

        <Signin/>

    </div>

    </div>
    </>
  )
}
