import React from 'react';
//Components
import H1 from '../H1';
import P from '../P';
//Components Skills
import Column1 from './skills/Column1';
import Column2 from './skills/Column2';

const Skills = () => {
    return (
        <article className="py-12 px-5">
            <H1 size="3xl" color="lightblue" marginBottom="mb-6">Habilidades</H1>
            <div className="flex flex-row">
                <div className="w-1/2">
                    <Column1/>
                </div>
                <div className="w-1/2">
                    <Column2/>
                </div>
            </div>
        </article>
    )
}

export default Skills;