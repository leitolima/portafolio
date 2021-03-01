import React from 'react';
//Components
import H1 from '../../H1';
import P from '../../P';

const Data = ({ children, title, text, marginBottom = 'mb-1', css = '' }) => {
    return (
        <div className={`${css} hover:text-lightblue duration-200 flex flex-row items-center mb-4`}>
            <div className="px-8">
                { children }
            </div>
            <div>
                <H1 color="gray-900" size="2xl" marginBottom={marginBottom}>{title}</H1>
                {text && <P>{text}</P>}
            </div>
        </div>
    )
}

export default Data;