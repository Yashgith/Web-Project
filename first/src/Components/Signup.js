import React, { Component } from 'react'
import {BrowserRouter,Routes,Route, NavLink, Navigate} from 'react-router-dom'
import Exam_Section from './Exam_Section';
import Signin from './Signin';
import './Signup.css'


export class Signup extends Component {
   
    constructor(props){
        super(props);

        this.state={
            name:"",
            email:"",
            password:"",
            date:""
        }

        this.submitform = this.submitform.bind(this);
    }

    submitform(e){

        // e.preventDefault(); 
        
        const {name,email,password,date}=this.state
        console.log(name,email,password,date);

        fetch("http://localhost:5000/Signup",{
            method:"POST",
            crossDomain:true,
            headers: {
                "Content-type":"application/json",
                Accept: "application/json",
                "Access-Control-Allow-origin":"*",
            },
            body: JSON.stringify({
                name,
                email,
                password,
                date,
            }),
        })
        .then((res) => res.json())
        .then((data)=>{

            if(data.status=="ok")
            {
                alert("Signup Successful");
            }
            else{
                alert("User Exists");
            }

            console.log(data,"Details")
        })
    }

  render() {
    return (
        <>
            <div className="signupform">

            <h1 id='signhead'>SignUp Form</h1>

<form action="" onSubmit={this.submitform}>

    <label htmlFor="">Name</label><br />
    <input type="text" id='inputname' name='name' onChange={(e)=>this.setState({name:e.target.value})} required/> <br />
    <label htmlFor="">Email</label><br />
    <input type="email" id='email' name='email' onChange={(e)=>this.setState({email:e.target.value})} required/> <br />
    <label htmlFor="">Password</label><br />
    <input type="password" id='inputpassword' name='password' onChange={(e)=>this.setState({password:e.target.value})} required/> <br />
    <label htmlFor="">Date</label> <br />
    <input type="date" id='inputdate' name='date' onChange={(e)=>this.setState({date:e.target.value})} required/> <br />
    <button id='submit'>Submit</button>


</form>
</div>

    </>
    )
  }
}

export default Signup