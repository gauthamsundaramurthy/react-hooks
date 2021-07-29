import React from "react";

function Title({ title }) {
	console.log('Rendering Title')
	return (
		<div>
			{title}
		</div>
	)
}

export default React.memo(Title);