import React from 'react';
import Bar from './Bar';
import Skill from './Skill';

const Column1 = () => {
    return (
        <ul className="space-y-4 pr-5">
            <li><Skill tech="HTML" percentage="100"/><Bar width="100"/></li>
            <li><Skill tech="CSS" percentage="100"/><Bar width="100"/></li>
            <li><Skill tech="Framework CSS (Tailwind)" percentage="100"/><Bar width="100"/></li>
            <li><Skill tech="JavaScript" percentage="90"/><Bar width="90"/></li>
            <li><Skill tech="ReactJs y NextJs" percentage="100"/><Bar width="100"/></li>
        </ul>
    )
}

export default Column1;