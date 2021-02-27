import React from 'react';
//Components
import H1 from '../../H1';
import P from '../../P';

const Experience = () => {
    return (
        <div className="resume_item pl-6 pr-3 pb-3">
            <H1 color="gray-800" transform="uppercase">Desarrollador Javascript</H1>
            <P transform="italic font-semibold">Julio 2020 - Actualidad</P>
            <ul className="list-disc pl-8">
                <li><P>Desarrollo y mantenimiento de sistemas de software en NodeJs y Jquery</P></li>
            </ul>
        </div>
    )
}

export default Experience;