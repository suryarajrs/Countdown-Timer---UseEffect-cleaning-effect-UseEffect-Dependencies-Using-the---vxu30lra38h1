import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 

  const [userInput, setuserInput]=useState(0)

  const handleDownkey = (e)=>{

    if (e.key === 'Enter'){
      const input = Math.floor(parseFloat(e.target.value));

      if(isNaN(input)||input<0){
        setuserInput(0)
        
      }else{
        setuserInput(input)
      }
    }




  }

  useEffect(()=>{

    let intervelUniqueID;

    if(userInput >0){

      intervelUniqueID = setInterval(()=>{
        setuserInput((prev)=>{
          return prev-1
        })
      
      },1000)
  

      
    }

     

  return()=>{

    clearInterval(intervelUniqueID)

  }
  },[userInput])



  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" type="number"  onKeyDown={handleDownkey}/>sec.
        </h1>
      </div>
      <div id="current-time">{userInput}</div>
    </div>
  )
}


export default App;
