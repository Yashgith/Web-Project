import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Plot from 'react-plotly.js';
import UploadsList from './UploadList';


function GraphData() {


    const[post,setPost]=useState([])
    const[videos,setVideos]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/quizform")

        .then((response) =>{ 
        console.log(response.data) 
        setPost(response.data)
    }) 
    },[])

    useEffect(()=>{
      axios.get("http://localhost:5000/api/v1/media/all")
      .then((response)=>{
        console.log(response.data)
        setVideos(response.data)
      })
    })
    
  return (
    
    <div>

    <p className='text-center text-info bg-dark'>Students academic progress in the form of graph.Teachers can easily recognize students progress using graph and it will help for them to trace their students progress.Based on their progress,teachers will suggest courses.</p>

    {/* {post && post.map((post)=>{ 
    
       return  <h1>{post.email}</h1>

    })} */}

    <Plot
    
    data={[

      {
        type:"bar",
        mode:"lines",
        x:post.map(x=>x.name),
        y:post.map(y=>y.score),
        marker:{color:"blue"},
      },
      {
        type:"bar",
        mode:"lines",
        x:post.map(x=>x.name),
        y:post.map(y=>y.scorehtml),
        marker:{color:"yellow"},
      },
      {
        type:"bar",
        mode:"lines",
        x:post.map(x=>x.name),
        y:post.map(y=>y.scorecss),
        marker:{color:"pink"},
      },
      {
        type:"bar",
        mode:"lines",
        x:post.map(x=>x.name),
        y:post.map(y=>y.scorejava),
        marker:{color:"green"},
      },
      {
        type:"bar",
        mode:"lines",
        x:post.map(x=>x.name),
        y:post.map(y=>y.scorephp),
        marker:{color:"aqua"},
      },
    ]}
    layout={
      {
        width:1000,
        height:600,
        title:"Students Data",
        "xaxis.title":"Name",
        "yaxis.title":"Score",
      }
    }

     
    />

    <UploadsList medias={videos}/>


    
    </div>
  )
}

export default GraphData