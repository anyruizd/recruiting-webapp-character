import { ATTRIBUTE_LIST } from '../consts.js';

export function Attributes({ attributes, handleDecrease, handleIncrease }) {

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
