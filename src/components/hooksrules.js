import React from 'react'

const Hooksrules = () => {
    const [state, setstate] = React.useState("Neha Khan")
   
    return (
    
        <div>
            <h1>{state}</h1>
            <button onClick={()=>{setstate("Technical Channel")}}>Click on</button>
        </div>
    )
}

export default Hooksrules

//1. always use hooks inside your react function component
//2. the name of function component should always be in Pascal Case
//3. import your hook from either react or by writing React.nameofHook
//4. always use hook or define hook at the top level inside the component
//5. never define hook inside conditions or loops or even in return statements
