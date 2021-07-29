import React, {useState,  useEffect} from "react";

export default function Cursor() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('Mouse Movement Capture')
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect (
        () => {
            console.log('React Hooks - useEffect ...')
            window.addEventListener('mousemove', logMousePosition);  
            return () => window.removeEventListener('mousemove', logMousePosition);
        },[]
    );

    return (
        <>
            <div> {x} - {y}</div>
        </>
    )
}
