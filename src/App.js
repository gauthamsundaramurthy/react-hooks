import React, { useState } from "react";

function App() {
	const [name, setName] = useState({ firstName: '', lastName: '' });

	return (
		<>
			<div>
				First Name : <input type="text" value={name.firstName} onChange={(e) => setName({ ...name, firstName: e.target.value })} />
			</div>
			<div>
				Last Name : <input type="text" value={name.lastName} onChange={(e) => setName({ ...name, lastName: e.target.value })} />
			</div>
			<span> {JSON.stringify(name)} </span>
		</>
	)
}

export default App;
