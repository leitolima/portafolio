import React from 'react';

const Copyright = ({ name }) => {
    return (
        <p className="text-white text-center mt-4">
            © Copyright <span className="font-semibold">{name}</span>
        </p>
    )
}

export default Copyright;