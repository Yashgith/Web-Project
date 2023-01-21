import React, { Component } from 'react'

export default class Login extends Component {





    componentDidMount(){


        fetch("http://localhost:5000/logindata",{
            method:"POST",
            crossDomain:true,
            headers: {
                "Content-type":"application/json",
                Accept: "application/json",
                "Access-Control-Allow-origin":"*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
        .then((res) => res.json())

        .then((data)=>{ 
            
            console.log(data,"logindata")
        })
    }













  render() {
    return (
        <>
            <h1>Login Successful</h1>
        </>
    )
  }
}
