import React, { Component } from 'react'
import './Signin.css'

export default class Signin extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
            email:"",
            password:"",
        }
        
        this.submitform = this.submitform.bind(this);

    }
    

    
    submitform(e){

        
        e.preventDefault(); 
        
        const {email,password}=this.state;
        console.log(email,password);
        
       fetch("http://localhost:5000/login-user",{
            method:"POST",
            crossDomain:true,
            headers: {
                "Content-type":"application/json",
                Accept: "application/json",
                "Access-Control-Allow-origin":"*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        .then((res) => res.json())
        .then((data)=>{
            
               console.log(data,"userData");

               if(data.status=="ok")
               {
                alert("Login Successful");
                localStorage.setItem('token',data.data);
                window.location.href="/signindata"
               }
            
        })
    }
    render() {

        return (
        <>
         <div className="signinform">

         <h1 id='signinhead'>SignIn Form</h1>

<form action="" onSubmit={this.submitform}>

    <label htmlFor="" id='inputemail'>Email</label> <br />
    <input type="email" id='inputemail' onChange={(e)=>this.setState({email:e.target.value})} required/> <br /> <br />
    <label htmlFor="" id='input'>Password</label> <br />
    <input type="password" id='input' onChange={(e)=>this.setState({password:e.target.value})} required/>
    <button id='submit'>Submit</button>
</form>
</div>
        </>
    )
  }
}
