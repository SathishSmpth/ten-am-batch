import React, { useEffect } from "react";

function Child({ comment }) {
  useEffect(() => {
    console.log("Function was Called");
  }, [comment]);
  return <div>{comment("Santhosh")}</div>;
}

export default Child;
