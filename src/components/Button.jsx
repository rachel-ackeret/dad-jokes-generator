import React from "react";
import "./styles.css";

const Button = (props) => {
	return <button onClick={props.callApi}>
		<div className="text-white">Show Me A Joke</div>
	</button>;
}

export default Button;
