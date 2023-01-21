import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from "uuid"
import Attendence from './Attendence';
import './Exam_Section.css'
import Quizformlogin from './Quizformlogin';

export default function Exam_Section() {


  const navigate= useNavigate();
  useEffect(()=>{

    if(!window.localStorage.getItem('token'))
    {
        navigate('/home')
    }

  },[])
  
  const QuestionList=[



    {
      question:"Which of the following is used to read an HTML page and render it?",
      answerList:[
       {id:0,answer:"Web Browser",isCorrect:true,type:"html"},
       {id:1,answer:"Web Server",isCorrect:false,type:"html"},
       {id:2,answer:"Web Matrix",isCorrect:false,type:"html"},
       {id:3,answer:"Web Network",isCorrect:false,type:"html"},
  
        ],
    },

    {
      question:"What is DOM in HTML?",
      answerList:[
       {id:0,answer:" Language dependent application programming",isCorrect:false,type:"html"},
       {id:1,answer:"Application programming interface",isCorrect:false,type:"html"},
       {id:2,answer:"Hierarchy of objects in ASP.NET",isCorrect:false,type:"html"},
       {id:3,answer:"Convention for representing and interacting with objects in html documents",isCorrect:true,type:"html"},
  
        ],
    },
        
    {
        question:"Which is the latest version of CSS",
        answerList:[
         {id:0,answer:"30",isCorrect:false,type:"css"},
         {id:1,answer:"15",isCorrect:false,type:"css"},
         {id:2,answer:"26",isCorrect:true,type:"css"},
         {id:3,answer:"20",isCorrect:false,type:"css"},
    
        ],
    },
    
    {
      question:" The Default Value Of position Attribute Is",
      answerList:[
       {id:0,answer:"Static",isCorrect:true,type:"css"},
       {id:1,answer:"Inherit",isCorrect:false,type:"css"},
       {id:2,answer:"Absolute",isCorrect:false,type:"css"},
       {id:3,answer:"Fixed",isCorrect:true,type:"css"},
    
      ],
    },
    {
      question:"Number of primitive data types in Java are?",
      answerList:[
       {id:0,answer:"9",isCorrect:false,type:"java"},
       {id:1,answer:"8",isCorrect:true,type:"java"},
       {id:2,answer:"7",isCorrect:false,type:"java"},
       {id:3,answer:"6",isCorrect:false,type:"java"},
    
      ],
    },
    
    {
      question:"public class Solution { public static void main(String args){  byte x = 127; x++; x++;  System.out.print(x); } } ",
      answerList:[
       {id:0,answer:"2",isCorrect:false,type:"java"},
       {id:1,answer:"127",isCorrect:false,type:"java"},
       {id:2,answer:"-127",isCorrect:true,type:"java"},
       {id:3,answer:"129",isCorrect:false,type:"java"},
    
      ],
    },
    
    {
      question:"What type of language is PHP?",
      answerList:[
       {id:0,answer:"User-side scripting",isCorrect:false,type:"php"},
       {id:1,answer:"Client-side scripting",isCorrect:false,type:"php"},
       {id:2,answer:"Server-side scripting",isCorrect:true,type:"php"},
       {id:3,answer:"None",isCorrect:false,type:"php"},
    
      ],
    },

    {
      question:"Choose the incorrect data type of php among the following",
      answerList:[
       {id:0,answer:"Resources",isCorrect:false,type:"php"},
       {id:1,answer:"Objects",isCorrect:false,type:"php"},
       {id:2,answer:"Null",isCorrect:false,type:"php"},
       {id:3,answer:"Void",isCorrect:true,type:"php"},
    
      ],
    },

];

const[currrentQuestion,setCurrentQuestion]=useState(0); 
const[score,setScore]=useState(0);
const[scorehtml,setScoreHtml]=useState(0);
const[scorecss,setScoreCss]=useState(0);
const[scorejava,setScoreJava]=useState(0);
const[scorephp,setScorePhp]=useState(0);
const[clicked,setClicked]=useState(false);
const[showScore,setShowScore]=useState(false);



 const handleCorrectAnswer=(isCorrect,type)=> {

    if(isCorrect)
    {
      setScore(score+1)

      if(type=="html")
      {
        setScoreHtml(scorehtml+1);
      }
      else if(type=="css")
      {
        setScoreCss(scorecss+1);
      }
      else if(type=="java")
      {
        setScoreJava(scorejava+1);
      }
      else{
        setScorePhp(scorephp+1);
      }
    }


    setClicked(true)
 }
 
 const nextQuestion=()=>{
   setClicked(false);

   if(currrentQuestion < QuestionList.length-1)
   {
     setCurrentQuestion(currrentQuestion + 1 )
   }
   else{
    setShowScore(true);
   }
 }

 const playagain=()=>{
   
   setCurrentQuestion(0)
   setScore(0)
   setShowScore(false)
 }

  return (

    <div className='Quizform'>

      {/* <Signin/> */}


      <p className='text-info bg-dark'>Firstly Students Should Sign up the website if already Sign up then Sign in to solve questions.This questions will examines students skills and it helps teachers to trace students skills and accordingly they guide students.</p><br />

        {showScore ? (
           <div>
            <div className='completed'><h2>Completed</h2></div>
            <div className='score'>
              <label htmlFor="">{score}</label><br />
              Your Score: {score} / {QuestionList.length}

              <br />

              Html Score:

              {scorehtml}/{QuestionList.length}

              <br />

              Css Score:

              {scorecss}/{QuestionList.length}

              <br />

              Java Score:

              {scorejava}/{QuestionList.length}

              <br />

              Php Score:

              {scorephp}/{QuestionList.length}

            </div>
            <div className='playagain'>
              <button onClick={playagain}>TRY AGAIN</button>
            </div>
           <Quizformlogin data={score} datahtml={scorehtml} datacss={scorecss} datajava={scorejava} dataphp={scorephp}/>
           </div>
        ):( 
    
      <div className='form'>
         <h2 id='textheader'>Quiz Form</h2>
        <div className='questinosection'>
          <div className='questioncnt'>
            Question {currrentQuestion+1} of {QuestionList.length}
          </div>
          <div className='questiontxt'>
            {QuestionList[currrentQuestion].question}
          </div>
         </div>
         <div className="answersection">
          {QuestionList[currrentQuestion].answerList.map((answerOption) =>{
            return( 
            <li className='answerlist' key={uuidv4()} >
              <button className='answer-button' onClick={()=>handleCorrectAnswer(answerOption.isCorrect,answerOption.type)}>{answerOption.answer}</button>
            </li>
            )
          })}

         </div>
{/* 
         <div>

          {Questionitems[currrentQuestion].answerList.map((answeritem) =>{
            return( 
            <li className='answerlist' key={uuidv4()} >
              <button className='answer-button' onClick={()=>handl(answeritem.isCorrect)}>{answeritem.answer}</button>
            </li>
            )
          })}
         </div> */}

      <div>
        <button className='nextbtn' onClick={nextQuestion}>
        Next
        </button>
      </div>
      </div>
      )}

      
      </div>
  );
};