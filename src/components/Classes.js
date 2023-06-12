import { ClassItem } from "./ClassItem.js";
import { CLASS_LIST } from "../consts.js";
import { calculateIsActive } from "../utils/index.js";

export function Classes({attributes}) {
    return (
        <div>
        <h2>Classes</h2>
        <ul>
            {Object.keys(CLASS_LIST).map((classItem) => {
                const requirements = CLASS_LIST[classItem];
                return (
                    <ClassItem
                        key={classItem}
                        title={classItem}
                        requirements={requirements}
                        isActive={calculateIsActive(requirements, attributes)}
                    />
                )
            })}
        </ul>
        </div>
    );
}