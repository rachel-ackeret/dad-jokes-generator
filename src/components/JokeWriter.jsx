import React from 'react'
import { useState, useEffect } from "react";

const JokeWriter = ({ content, speed }) => {
    const [typedContent, setTypedContent] = useState("");
    const [index, setIndex] = useState(0);
    const [joke, setJoke] = useState("")
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (joke !== "") {
            setTypedContent(
                (typedContent) => typedContent + joke[index]
            );
        }
    }, [joke, index]);
    
    useEffect(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        if (joke !== "") {
            const animKey = setInterval(() => {
                setIndex((index) => {
                    /*This setState function will set the index
                    to index+1 if there is more content otherwise
                    it will destory this animation*/

                    if (index >= joke.length - 1) {
                        clearInterval(animKey);
                        return index;
                    }
                    return index + 1;
                });
            }, speed);
            setIntervalId(animKey);
        }
    }, [joke]);

    useEffect(() => {
        // Reset if a new joke is passed
        if (content !== "") {
            setJoke(content)
            if (index !== 0) setIndex(0);
            if (typedContent !== "") setTypedContent("");
        }
    }, [content]);

    return (
        <p className="joke">{typedContent !== "" ? typedContent : ''}</p>
    )
}

export default JokeWriter