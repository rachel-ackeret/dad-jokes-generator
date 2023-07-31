import React from "react";
import "./styles.css";

const Button = (props) => {
	return <button onClick={props.callApi}>
		Show Me A Joke
	</button>;
}

export default Button;
