import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext.js";
import { ClassItem } from './ClassItem.js';
import { CLASS_LIST } from "../consts.js";
import { calculateIsActive } from "../utils/utils.js";

export function Classes() {
    const { attributes } = useContext(CharacterContext);
    return (
        <div>
            <h2>Classes</h2>
            <ul>
                {Object.keys(CLASS_LIST).map((classItem) => {
                    const requirements = CLASS_LIST[classItem];
                    const isActive = calculateIsActive(requirements, attributes);
                    return (
                        <ClassItem
                            key={classItem}
                            title={classItem}
                            requirements={requirements}
                            isActive={isActive}
                        />
                    )
                })}
            </ul>
        </div>
    );
}