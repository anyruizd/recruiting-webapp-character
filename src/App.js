import { useState } from "react";
import { Attributes } from './components/Attributes.js';
import { Classes } from './components/Classes.js';
import './App.css';

function App() {
  const [ attributes, setAttributes ] = useState({
    'Strength': 10,
    'Dexterity': 10,
    'Constitution': 10,
    'Intelligence': 10,
    'Wisdom': 10,
    'Charisma': 10,
  });
  const handleIncrease = (event) => {
    const target = event.target.parentElement.id;
    setAttributes((prevState) => {
      return {
        ...prevState,
        [target]: prevState[target] + 1,
      };
    });
  };

  const handleDecrease = (event) => {
    const target = event.target.parentElement.id;
    setAttributes((prevState) => {
      return {
        ...prevState,
        [target]: prevState[target] - 1,
      };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
            <Attributes
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
                attributes={attributes}
            />
            <Classes  attributes={attributes} />
      </section>
    </div>
  );
}

export default App;
