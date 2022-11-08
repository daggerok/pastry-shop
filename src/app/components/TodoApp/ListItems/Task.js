import React, { useState } from 'react';

export const Task = ({ description }) => {
    const [ isCrossed, setIsCrossed ] = useState(false);
    const [ taskStyles, setTaskStyles ] = useState({ textDecoration: 'none '});

    const crossText = () => {
        setIsCrossed(!isCrossed);
        const textDecoration = isCrossed ? 'line-through' : 'none';
        setTaskStyles({ textDecoration: textDecoration });
    };
    return <li style={taskStyles} onClick={crossText}>
        {description}
    </li>;
}
