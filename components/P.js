import React from 'react';

const P = ({
    children,
    size = 'lg',
    align = 'left',
    color = 'gray-800',
    transform = '',
    marginBottom = '2'
}) => {
    return (
        <p className={`text-${size} text-${color} text-${align} ${transform} mb-${marginBottom}`}>{children}</p>
    )
}

export default P;