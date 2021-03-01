import React from 'react';
//Components
import H1 from '../H1';
import P from '../P';
//Components Skills
import Column1 from './skills/Column1';
import Column2 from './skills/Column2';

const Skills = () => {
    return (
        <article className="container mx-auto py-12 px-5">
            <H1 size="3xl" color="lightblue" marginBottom="mb-6">Habilidades</H1>
            <P>Soy bueno comunicandome y relacionandome con otras personas. Soy una persona empática, en general atenta y con intenciones de generar relaciones a largo plazo.</P>
            <P>Además de ello, estás son las principales habilidades técnicas que puedo destacar.</P>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <Column1/>
                </div>
                <div className="w-full md:w-1/2">
                    <Column2/>
                </div>
            </div>
        </article>
    )
}

export default Skills;