import { useReducer } from "react";
import { Attributes } from './components/Attributes.js';
import { Classes } from './components/Classes.js';
import { Skills } from './components/Skills.js';
import { CharacterContext, CharacterDispatchContext, initialCharacter, characterReducer } from "./components/CharacterContext.js";

import './App.css';

function App() {
    const [character, dispatch] = useReducer(characterReducer, initialCharacter);

    return (
        <CharacterContext.Provider value={character}>
            <CharacterDispatchContext.Provider value={dispatch}>
                <div className="App">
                    <header className="App-header">
                        <h1>React Coding Exercise</h1>
                    </header>
                    <section className="App-section">
                        <Attributes />
                        <Classes />
                        <Skills />
                    </section>
                </div>
            </CharacterDispatchContext.Provider>
        </CharacterContext.Provider>
        );
}

export default App;
