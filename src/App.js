import React, { useState, useEffect } from "react";

function App() {
	const [counter, setCounter] = useState(0);

    const tick = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    useEffect (() => {
        setInterval ( () => {
            tick()
        }, 1000)
    }, [])

    useEffect(()=> console.log('.. After Rendering ..'))

    return (
        <>
          <div> {counter} </div>  
        </>
    )
}

export default App;
