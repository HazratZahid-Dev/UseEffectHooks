import React, { useEffect, useState } from 'react'

const ChangeTitle = () => {
    const [set,settitle]=useState(0);
    useEffect(()=>{
        document.title=`clicked ${set}`;
    })
  return (
    <>
    <h4>the button is use for to change the title of the page </h4>
    <button onClick={()=>{
        settitle(set+1);
    }}>click{set}</button>
      
    </>
  )
}

export default ChangeTitle
