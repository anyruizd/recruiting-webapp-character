import { useState } from 'react';
import { ATTRIBUTE_LIST } from '../consts.js';

export function Attributes() {
    const [attributes, setAttributes] = useState({
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
        }
      })
    }

    const handleDecrease = (event) => {
      const target = event.target.parentElement.id;
      setAttributes((prevState) => {
        return {
          ...prevState,
          [target]: prevState[target] - 1,
        }
      })
    }

    return (
      <div>
        <h2>Attributes</h2>
        <ul>
          {ATTRIBUTE_LIST.map((attribute) => {
            return (
              <li key={attribute} id={attribute}>
                {attribute} {attributes[attribute]}
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
}
