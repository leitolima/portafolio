import React from 'react';
//Components
import H1 from '../H1';
//Components CV
import Experience from './cv/Experience';
import Education from './cv/Education';

const Curriculum = () => {
    return (
        <article className="py-12 px-5">
            <H1 size="3xl" color="blue-500" marginBottom="mb-6">Currículum</H1>
            <div className="flex flex-row">
                <div className="w-1/2">
                    <H1 size="2xl" color="blue-500">Experiencia profesional</H1>
                    <Experience/>
                </div>
                <div className="w-1/2">
                    <H1 size="2xl" color="blue-500">Educación</H1>
                    <Education/>
                </div>
            </div>
        </article>
    )
}

export default Curriculum;