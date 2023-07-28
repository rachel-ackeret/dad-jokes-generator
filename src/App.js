import './App.css';
import React, { useState } from 'react';
import Joke from "./components/Joke";
// import JokeGenerator from './components/JokeGenerator';

// function App() {
//   const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

//   const startJokes = () => {
//     setShowWelcomeScreen(false);
//   }

//   return (
//     <div className="App">
//       {showWelcomeScreen ? (
//         <header className="App-header">
//           <span className="pb-5">Let's make some Dad Jokes!</span>
//         <button className="btn btn-primary py-2 px-4 rounded-md p bg-blue-400 text-color-white" onClick={startJokes}>
//           I'm in!
//         </button>
//         </header>
//       ) : (
//         <JokeGenerator />
//       )
//     }
//     </div>
//   );
// }

// App.js
  
function App() {
    return (
        <div className="App">
            <h1>Joke Generator Using React and Joke API</h1>
            <Joke/>
        </div>
    );
}
 
export default App;
