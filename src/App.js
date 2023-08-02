import './App.css';
import React from 'react';
import Joke from "./components/Joke";

  
function App() {
    return (
        <div className="App">
            <h1 className="absolute top-10 text-xl">Joke Generator Using React and Joke API</h1>
            <Joke/>
        </div>
    );
}
 
export default App;
