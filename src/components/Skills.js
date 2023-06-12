import { useContext, useState } from "react";
import { CharacterContext, CharacterDispatchContext } from "../context/CharacterContext.js";
import { SKILL_LIST } from "../consts.js";

export function Skills() {
    const { skills, attributeModifiers } = useContext(CharacterContext);
    const [ errorMessage, setErrorMessage ] = useState('');
    const dispatch = useContext(CharacterDispatchContext);

    const availablePoints = 10 + (4 * attributeModifiers.Intelligence);

    const canDecrease = (skillId) => {
        return skills[skillId] > 0;
    }

    const canIncrease = () => {
        const totalSum = Object.values(skills).reduce((sum, value) => sum + value, 0);
        return totalSum < availablePoints;
    }

    const handleIncrease = (event) => {
        const skillId = event.target.parentElement.id;
        if (canIncrease()) {
            dispatch({
                type: 'UPDATE_SKILL',
                skill: skillId,
                value: skills[skillId] + 1,
            });
            setErrorMessage('');
        } else {
            setErrorMessage('You need more skill points! Upgrade intelligence to get more.');
        }

    }

    const handleDecrease = (event) => {
        const skillId = event.target.parentElement.id;
        if(canDecrease(skillId)) {
            dispatch({
                type: 'UPDATE_SKILL',
                skill: skillId,
                value: skills[skillId] - 1,
            });
        }
        setErrorMessage('');
    }

    return (
        <div>
            <h2>Skills</h2>
            <p>Total skill points available: {availablePoints}</p>
            <p className="error-message">{errorMessage}</p>
            <ul>
                {SKILL_LIST.map(({ name, attributeModifier }) => { 
                    const id = name.split(' ').join(''); // make id one single word
                    const skillValue = skills[id];
                    const modifierValue = attributeModifiers[attributeModifier];
                    const total = skillValue + modifierValue;
                    return (
                        <li key={name} id={id}>
                            <span>{name}: {skillValue}</span>
                            <span> (Modifier: {attributeModifier} {modifierValue})</span>
                            <button onClick={handleIncrease}>+</button>
                            <button onClick={handleDecrease}>-</button>
                            <span>total: {total}</span>
                        </li>
                    )
                })}
            </ul> 
        </div> 
    );
}
