import React from 'react';

const H1 = ({ 
    children, 
    size = 'lg',
    align = 'left',
    font = 'bold',
    color = 'white'
}) => {
    return (
        <h1 className={`text-${size} font-${font} text-${color} text-${align} mb-2`}>{children}</h1>
    )
}

export default H1;