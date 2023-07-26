import './App.css';
import React, { useState } from 'react';
import JokeGenerator from './components/JokeGenerator';

function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  const startJokes = () => {
    setShowWelcomeScreen(false);
  }

  return (
    <div className="App">
      {showWelcomeScreen ? (
        <header className="App-header">
          <span className="pb-5">Let's make some Dad Jokes!</span>
        <button className="btn btn-primary py-2 px-4 rounded-md p bg-blue-400 text-color-white" onClick={startJokes}>
          I'm in!
        </button>
        </header>
      ) : (
        <JokeGenerator />
      )
    }
    </div>
  );
}

export default App;
