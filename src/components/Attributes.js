import { useContext } from "react";
import { CharacterContext, CharacterDispatchContext } from "../context/CharacterContext.js";
import { ATTRIBUTE_LIST } from "../consts.js";

export function Attributes() {
    const { attributes, attributeModifiers } = useContext(CharacterContext);
    const dispatch = useContext(CharacterDispatchContext);

    const handleIncrease = (event) => {
        const attributeId = event.target.parentElement.id;
        dispatch({
            type: 'UPDATE_ATTRIBUTE',
            attribute: attributeId,
            value: attributes[attributeId] + 1
        })
    };

    const handleDecrease = (event) => {
        const attributeId = event.target.parentElement.id;
        dispatch({
            type: 'UPDATE_ATTRIBUTE',
            attribute: attributeId,
            value: attributes[attributeId] - 1
        })
    };

  return (
    <div>
      <h2>Attributes</h2>
      <ul>
        {ATTRIBUTE_LIST.map((attribute) => {
          const points = attributes[attribute];
          const modifier = attributeModifiers[attribute];
          return (
            <li key={attribute} id={attribute}>
              <span>
                {attribute} {points} (Modifier: {modifier})
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