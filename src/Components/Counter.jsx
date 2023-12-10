// import React from 'react'

import { useState } from "react"

function Counter() {
    const [count,setCount]=useState(0);
    
    const handleIncrement=()=>{
        
        if(count==20){
            return
        }else{
            setCount(count+1);
        }
    }
    const handleDeccrement=()=>{
        if(count==0){
            return
        }else{
            setCount(count-1);
        }
    }

    
  return (
    <>
    <div >
        <div>
            <h3>Counter: {count}</h3>
        </div>
        <br />
        <div>
            <button disabled={count==20} onClick={handleIncrement}>Increment</button>
            <button disabled={count==0} onClick={handleDeccrement}>Decrement</button>
        </div>
    </div>
    </>
  )
}

export default Counter