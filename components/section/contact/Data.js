import React from 'react';
//Components
import H1 from '../../H1';
import P from '../../P';

const Data = ({ icon, title, text }) => {
    return (
        <div className="flex flex-row items-center mb-4">
            <div className="px-8">
                <img src={icon} alt="Mail svg" className="w-8 h-8"/>
            </div>
            <div>
                <H1 color="gray-900" size="2xl" marginBottom="mb-1">{title}</H1>
                <P>{text}</P>
            </div>
        </div>
    )
}

export default Data;