import React, { useState,useEffect } from "react";

const Useeffect = () => {
  const [state, setstate] = useState(0);
  useEffect(()=>{
      if(state>=1){
        document.title = `Messages (${state})`;
      }
      else{
        document.title = `Messages`;
      }
 
  },[state])
  useEffect(()=>{
    console.log("hello from second use Effect hook");
  },[])
  alert("hello after use Effect Hook ")
  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          setstate(state + 1);
        }}
      >
        Click Meh
      </button>
    </div>
  );
};

export default Useeffect;
