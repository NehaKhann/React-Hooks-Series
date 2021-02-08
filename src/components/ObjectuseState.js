import React from 'react'

const ObjectuseState = () => {
    const [state, setstate] = React.useState({
        name:"Neha Khan",
        age:18,
        depart:"Software"
    })
    const updateName=()=>{
        setstate({...state,name:"A programmer"})
    }
    return (
        <div>
          <h1>Name : {state.name} Age: {state.age} Depart: {state.depart}</h1>
          <button onClick={updateName}>Update me</button>
        </div>
    )
}

export default ObjectuseState
