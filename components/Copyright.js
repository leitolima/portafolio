import React from 'react';

const Copyright = ({ text , name }) => {
    return (
        <p className="text-white text-lg text-center">{text} | © Copyright <span className="font-semibold">{name}</span></p>
    )
}

export default Copyright;