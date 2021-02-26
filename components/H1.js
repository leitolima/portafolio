import React from 'react';

const H1 = ({ 
    children, 
    size = 'lg',
    align = 'left'
}) => {
    return (
        <h1 className={`text-${size} font-bold text-white text-${align} mb-2`}>{children}</h1>
    )
}

export default H1;