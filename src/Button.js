import React from "react";

function Button({ handler, children }) {
	console.log('Rendering Button - ', children)
	return (
		<button onClick={handler}>
			{children}
		</button>
	)
}

export default React.memo(Button);