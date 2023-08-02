import React from 'react'
import { useState, useEffect } from "react";

const JokeWriter = ({ content, speed }) => {
    const [typedContent, setTypedContent] = useState("");
    const [index, setIndex] = useState(0);
    const [newJoke, setNewJoke] = useState('');

    useEffect(() => {
        let animKey;
        // Reset interval if a new joke is passed
        if (animKey) clearInterval(animKey);

        animKey = setInterval(() => {
            setIndex((index) => {
                /*This setState function will set the index
                to index+1 if there is more content otherwise
                it will destory this animation*/

                if (index >= content.length - 1) {
                    clearInterval(animKey);
                    return index;
                }
                return index + 1;
            });
        }, speed);
    }, [newJoke]);


    useEffect(() => {
        setTypedContent(
            (typedContent) => typedContent + newJoke[index]
        );
    }, [index]);
    
    useEffect(() => {
        // Reset if a new joke is passed
        setNewJoke(content);
        setIndex(0);
        setTypedContent("");
    }, [content]);

    return (
        <p className="joke">{typedContent}</p>
    )
}

export default JokeWriter