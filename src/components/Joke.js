import React from "react";
import Button from "./Button";
import "./styles.css";
import JokeWriter from "./JokeWriter";

const Joke = () => {
	const [joke, setJoke] = React.useState("");

	const fetchJoke = () => {
		fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
			.then((res) => res.json())
			.then((data) => setJoke(data.joke));
	};

	return (
		<>
			<div className="joke-box">
				{joke ? 
					<div className="joke-container">
						<JokeWriter content={joke} speed={35} /> 
					</div>
				: null}
			</div>
			<Button callApi={fetchJoke} />
		</>
	);
}

export default Joke;
