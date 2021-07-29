import React, {useState} from "react";
import useDocumentTitle from './useDocumentTitle';

export default function DocTitleTwo() {
    const [counter, setCounter] = useState(0)

    useDocumentTitle(counter)
    
    return (
        <>
            <button onClick={() => setCounter(prevCounter => prevCounter +1 )}> Counter - {counter} </button>
        </>
    )
}