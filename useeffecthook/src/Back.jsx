// import React,{useState} from "react";
// function Back() {
    // const [color,setColor]=useState('red');
    // const [textColor,setTextColor]=useState('white');
    // return (
    //   <div className="App">
        // <button style={{background:color,color:textColor}} className='btn btn-primary' onClick={()=>{setColor("black");setTextColor('red')}}>Click here</button>
    //   </div>
    // );
//   }
  
//   export default Back;
import React, { useState } from 'react'

const Back = () => {
    const [Color,setcolor]=useState('#A12e2');
    const style={
        backgroundColor:'#A12e2',
        
    }
   
    const Change=()=>{
       if(backgroundColor==="#A12e2"){
        setcolor('white');
       }else{
        setcolor('green');
       }
    }
  return (
    <div style={style}>
    <button typle="button" onClick={Change}>Click</button>
      
    </div>
  )
}

export default Back
