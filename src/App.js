import React, { useState, useMemo } from "react";

function App() {
	const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    
    const incrementCounterOne = () => {    
        setCounterOne(counterOne+1);
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo+ 1);
    }

    const isEven = useMemo (() => {
        var i = 0;
        while(i<1000000000) {
            i++;
        }
        return counterOne % 2 === 0 ? 'Even' : 'Odd';
    },[counterOne])
    
    return (
        <>
        <div>
            <button onClick={incrementCounterOne}> Counter One - {counterOne} </button>
            <span> {isEven}</span>
        </div>      
        <div>
            <button onClick={incrementCounterTwo}> Counter Two - {counterTwo} </button>
        </div>
        </>
    )
}

export default App;
