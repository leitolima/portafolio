import React from 'react';
import Bar from './Bar';
import Skill from './Skill';

const Column2 = () => {
    return (
        <ul className="space-y-4 pr-5">
            <li><Skill tech="NodeJs" percentage="100"/><Bar width="100"/></li>
            <li><Skill tech="NoSQL (MongoDB)" percentage="100"/><Bar width="100"/></li>
            <li><Skill tech="GraphQL" percentage="100"/><Bar width="100"/></li>
            <li><Skill tech="SQL (MySQL)" percentage="100"/><Bar width="100"/></li>
            <li><Skill tech="Git" percentage="100"/><Bar width="100"/></li>
        </ul>
    )
}

export default Column2;