import React, { useEffect, useRef } from "react";

function App() {
    const inputRef = useRef();

    useEffect(
        () => inputRef.current.focus()
        , []
    )

    return (
        <>
            <input type="text" ref={inputRef} />
        </>
    )
}

export default App;
