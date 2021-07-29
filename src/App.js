import React, { useState, useEffect } from "react";

function App() {
	const [counter, setCounter] = useState(0);
	const [name, setName] = useState('')

	useEffect(
		() => {
			console.log('React Hooks - Updating ...')
			document.title = `You clicked ${counter} times`
		}, [counter]
	);

	const incrementCounter = () => {
		setCounter(prevCount => prevCount + 1);
	}

	return (
		<>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={incrementCounter}> Counter One - {counter} </button>
		</>
	)
}

export default App;
