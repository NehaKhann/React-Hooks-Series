import React from 'react'

const Shortcircuit = () => {
    const [state, setstate] = React.useState("hello")
    return (
        <div>
            <h1> {state || <>
            <h1>How are u?</h1>
            <h2>I m good.. how about u?</h2>
            </>}</h1>
            <h2>{state && "Evaluation"}</h2>
        </div>
    )
}

export default Shortcircuit
