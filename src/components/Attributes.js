import { calculateModifier } from "../utils/utils.js";
import { ATTRIBUTE_LIST } from "../consts.js";

export function Attributes({ attributes, handleDecrease, handleIncrease }) {
  return (
    <div>
      <h2>Attributes</h2>
      <ul>
        {ATTRIBUTE_LIST.map((attribute) => {
          const points = attributes[attribute];
          return (
            <li key={attribute} id={attribute}>
              <span>
                {attribute} {points} (Modifier: {calculateModifier(points)})
              </span>
              <button onClick={handleIncrease}>+</button>
              <button onClick={handleDecrease}>-</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
