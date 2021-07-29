import React, { useState, useEffect, useRef } from "react";

function App() {
    const [timer, setTimer] = useState(0)
    const timerInstance = useRef();


    useEffect(
        () => {
            timerInstance.current = setInterval(() => setTimer(prevTimer => prevTimer + 1), 1000)
            return () => clearInterval(timerInstance.current);
        }, []
    )

    return (
        <>
            <div> {timer}</div>
            <button onClick={() => clearInterval(timerInstance.current)}> Clear Timer</button>
        </>
    )
}

export default App;
