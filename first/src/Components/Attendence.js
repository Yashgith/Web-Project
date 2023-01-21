import React, { Component } from 'react'
import Quizformlogin from './Quizformlogin';

export default class Attendence extends Component {


    // constructor() {
    //     this.handleClick = this.handleClick.bind(this);
        state = { random: 0 };
    //   }
    
      handleClick=()=> {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        this.setState({ random: this.state.random + rand });
      }

  render() {
    return (
        <>
       <Quizformlogin random={this.state.random}/>
             <button onClick={this.handleClick}>Click</button>
       {this.state.random}

        </>
    )
  }
}