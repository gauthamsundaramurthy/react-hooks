import React, { useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((prevCount) => prevCount + 1);
    }
    const decrementCounter = () => {
        setCounter((prevCount) => prevCount - 1);
    }
    const incrementFive = () => {
        for (var i=0; i<5; i++) {
            setCounter((prevCount) => prevCount + 1);
        }
    }
    
    return (
        <>
            <span> {counter} </span>
            <button onClick={incrementCounter}> Increment </button>
            <button onClick={decrementCounter}> Decrement </button>
            <button onClick={incrementFive}> Increment by 5</button>
        </>
    )
}

export default App;
