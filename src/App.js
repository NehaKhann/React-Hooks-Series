
import React, { useState } from 'react'

const App = () => {
 
  const [state, setstate] = useState("Neha Khan")
  const changeName=()=>{
    let name = state;
    name==="Neha Khan"?setstate("Technical Channel"): setstate("Neha Khan")
 
  }

  // let name = "Neha Khan"
  // const changeName= ()=>{
  //   name="technical channel "
  //   console.log(name);
  // }
  // console.log(name);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={changeName}>Click meh</button>
    </div>
  )
}

export default App

