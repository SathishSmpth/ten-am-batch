import React, { useState, useReducer } from "react";


const reducer = (state,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return { count:state.count +1 , showText:state.showText}
        case "TOGGLE":
            return { count:state.count , showText: !state.showText}
        default:
            return state
    }
}

function LandPage() {
  // const [count,setCount] = useState(0)
  // const [showText,setShowText] = useState(false)

  // function setState() {
  //     setCount(count + 1)
  //     setShowText(!showText)
  // }
  
  const [state,dispatch] = useReducer(reducer,{count:0,showText:true})

  return (
    <div>
      <p>{state.count}</p>
      <button className="btn btn-primary" onClick={()=>{
        dispatch({type:"INCREMENT"})
        dispatch({type:"TOGGLE"})
      }}>
        Increment
      </button>
      {state.showText && <h1>This is Text</h1>}
    </div>
  );
}

export default LandPage;
