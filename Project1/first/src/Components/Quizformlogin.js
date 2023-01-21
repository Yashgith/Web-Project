import axios from 'axios';
import React, { Component } from 'react'

export default class Quizformlogin extends Component {


    constructor(props){
        super(props);

        this.state={
            name:"",
            email:"",
            password:"",
            score:this.props.data,
            scorehtml:this.props.datahtml,
            scorecss:this.props.datacss,
            scorejava:this.props.datajava,
            scorephp:this.props.dataphp,
            attendence:this.props.random,
        }

        this.submitform = this.submitform.bind(this);
    }


    submitform(e){

        // e.preventDefault(); 

        const {name,email,password,score,scorehtml,scorecss,scorejava,scorephp,attendence}=this.state
        console.log(name,email,password,score,scorehtml,scorecss,scorejava,scorephp,attendence);
        
         axios.post("http://localhost:5000/quizform",{
            name,
            email,
            password,
            score,
            scorehtml,
            scorecss,
            scorejava,
            scorephp,
            attendence,
        })
        .then(res=> console.log(res))
        .catch(err=> console.log(err)) 
    }




  render() {
    return (
        <>

         <div className="signupform">


            <h1 id='signhead'>SignUp Form</h1>

<form onSubmit={this.submitform}>

    <label htmlFor="">Name</label><br />
    <input type="text" id='inputname' name='name' onChange={(e)=>this.setState({name:e.target.value})} required/> <br />
    <label htmlFor="">Email</label><br />
    <input type="email" id='email' name='email' onChange={(e)=>this.setState({email:e.target.value})} required/> <br />
    <label htmlFor="">Password</label><br />
    <input type="password" id='inputpassword' name='password' onChange={(e)=>this.setState({password:e.target.value})} required/> <br />
    <button id='submit'>Submit</button>

</form>
</div>

        </>
    )
  }
}
