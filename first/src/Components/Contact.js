import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>

    <div className='contactform'>

    <form action="">

    <div id='head'>Contact Form</div>

<label htmlFor="" id='inputlabel'>Name</label><br />
<input type="text" id='input' name='name' required/> <br /><br />
<label htmlFor="" id='inputlabel'>Email</label><br />
<input type="email" id='input' name='email' required/> <br /><br />
<label htmlFor="" id='inputlabel'>Question</label><br />
<textarea name="" id='input' cols="30" rows="2" required></textarea><br /><br />
<label htmlFor="" id='inputlabel'>Mobile Number</label> <br />
<input type="number" id='input' name='number'/> <br />
<button id='submit'>Submit</button>


</form>
    </div>
    </>
  )
}

export default Contact