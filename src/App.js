import React, { useState } from "react";
import Cursor from './Cursor';

function App() {
	const [display, setDisplay] = useState(true);

    return (
        <>
            <button onClick = {() => setDisplay(prevDisplay => !prevDisplay)}> Toggle display </button>
            {display && <Cursor />}
        </>
    )
}

export default App;
