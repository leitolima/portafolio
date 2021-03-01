import React from 'react';
import Bar from './Bar';
import Skill from './Skill';

const Column2 = () => {
    return (
        <ul className="space-y-4 pr-5">
            <li><Skill tech="NodeJs" percentage="80"/><Bar width="80"/></li>
            <li><Skill tech="NoSQL (MongoDB)" percentage="70"/><Bar width="70"/></li>
            <li><Skill tech="GraphQL" percentage="90"/><Bar width="90"/></li>
            <li><Skill tech="SQL (MySQL)" percentage="80"/><Bar width="80"/></li>
            <li><Skill tech="Git" percentage="90"/><Bar width="90"/></li>
        </ul>
    )
}

export default Column2;