import React, { useEffect, useState } from 'react'

const SecondExample = () => {
    const [set,setnum]=useState(0)
    const [sets,setnums]=useState(0)
    useEffect(()=>{
        alert("the bustton is used for to increase the number from zero---")
        
    },[set])//this is used for to show the alert only on the first button an empty array 
    //show that the alert box will be show only once time whene the page is render
//  useEffect(()=>{
        // document.title(`you click the button ${set}`);
    // });
  return (
    <>
    <h4>Click to show alert using useEffect hooks</h4>
    <button onClick={
        ()=>{
            setnum(set+1)
        }
    }>click me {set}</button>
    <br/>
    <h4>Without the alert Button</h4>
    <button onClick={
        ()=>{
            setnums(sets+1)
        }
    }>click me {sets}</button>
    <div>
        <h5 ></h5>
    </div>

      
    </>
  )
}

export default SecondExample
