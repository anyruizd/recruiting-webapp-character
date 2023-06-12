import { createContext } from 'react';
import { calculateModifier } from "../utils/utils.js";

export const CharacterContext = createContext(null);
export const CharacterDispatchContext = createContext(null);

export function characterReducer(character, action) {
    switch(action.type) {
        case 'UPDATE_ATTRIBUTE': {
            const newState = {
                ...character,
                attributes: {
                    ...character.attributes,
                    [action.attribute]: action.value
                },
                attributeModifiers: {
                    ...character.attributeModifiers,
                    [action.attribute]: calculateModifier(action.value) 
                }
            }
            return newState;
        }
        case 'UPDATE_SKILL': {
            const newState = {
                ...character,
                skills: {
                    ...character.skills,
                    [action.skill]: action.value
                }
            }
            return newState;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export const initialCharacter = {
    attributes: {
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10,
    },
    attributeModifiers: {
        Strength: 0,
        Dexterity: 0,
        Constitution: 0,
        Intelligence: 0,
        Wisdom: 0,
        Charisma: 0,
    },
    skills: {
        Acrobatics: 0,
        AnimalHandling: 0,
        Arcana: 0,
        Athletics: 0,
        Deception: 0,
        History: 0,
        Insight: 0,
        Intimidation: 0,
        Investigation: 0,
        Medicine: 0,
        Nature: 0,
        Perception: 0,
        Performance: 0,
        Persuasion: 0,
        Religion: 0,
        SleightofHand: 0,
        Stealth: 0,
        Survival: 0,
    }
}