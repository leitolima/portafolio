import React from 'react';

const P = ({
    children, 
    size = 'lg',
    align = 'left',
    color = 'white'
}) => {
    return (
        <p className={`text-${size} text-${color} text-${align} mb-2`}>{children}</p>
    )
}

export default P;