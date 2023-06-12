import React, { useCallback, useState } from "react";
import Child from "./child";

function UseCallback() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("something Text!");
  const comment = useCallback((name)=>{
    return data + name
  },[data])
  return (
    <div>
        <Child comment={comment}/>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <h1> Toggled </h1>}
    </div>
  );
}

export default UseCallback;
