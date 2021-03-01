import React from 'react';
//Components
import H1 from '../H1';
import P from '../P';
//Components CV
import Experience from './cv/Experience';
import Education from './cv/Education';

const Curriculum = () => {
    return (
        <article className="container mx-auto py-12 px-5">
            <H1 size="3xl" color="lightblue" marginBottom="mb-6">Currículum</H1>
            <P>Como autodidacta, puedo decir con certeza y seguridad que no me cuesta adaptarme a nuevas tecnologías o formas de trabajo.</P>
            <P>Siempre estoy intentando mantenerme al día lo más que puedo, ya sea participando en comunidades y grupos con otros alumnos o mediante cursos, como bien detalle a continuación.</P>
            <div className="flex flex-col md:flex-row mt-4">
                <div className="w-full md:w-1/2">
                    <H1 size="2xl" color="lightblue">Experiencia profesional</H1>
                    <Experience/>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <H1 size="2xl" color="lightblue">Educación</H1>
                    <Education/>
                </div>
            </div>
        </article>
    )
}

export default Curriculum;