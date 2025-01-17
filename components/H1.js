import React from 'react';

const H1 = ({ 
    children, 
    size = 'lg',
    align = 'left',
    font = 'bold',
    color = 'white',
    marginBottom = 'mb-3',
    marginTop = '',
    marginRight = '',
    marginLeft = '',
    transform = '',
    css = ''
}) => {
    return (
        <h1 className={`${css} ${transform} text-${size} font-${font} text-${color} text-${align} ${marginTop} ${marginBottom} ${marginRight} ${marginLeft}`}>{children}</h1>
    )
}

export default H1;