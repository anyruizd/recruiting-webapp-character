import { useState } from "react";

export const ClassItem = ({requirements, title, isActive}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <li>
            <span className={isActive ? "active" : "inactive"}>{title}</span>
            <button onClick={toggleOpen}>{isOpen ? '-' : '+'}</button>
            <div className={isOpen ? "open" : "closed"}>
                <b><pre>Minimum requirements</pre></b>
                <ul>
                    {Object.keys(requirements).map((attribute) => {
                        return (
                            <li key={attribute}>
                                <pre>{attribute}: {requirements[attribute]}</pre>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </li>
    );
}