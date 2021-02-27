import React from 'react';

const P = ({
    children, 
    size = 'lg',
    align = 'left',
    color = 'gray-800',
    transform = ''
}) => {
    return (
        <p className={`text-${size} text-${color} text-${align} ${transform} mb-2`}>{children}</p>
    )
}

export default P;