import React from 'react';
//Components
import H1 from '../../H1';
import P from '../../P';

const Education = () => {
    return (
        <>
            <div className="resume_item pl-6 pr-3 pb-3">
                <H1 color="gray-800" marginBottom="mb-0" transform="uppercase">TECNICATURA DE ANALISTA DE SISTEMAS</H1>
                <P transform="italic font-semibold">I.S.F.T. 38 | 2019 - Actualidad</P>
                <ul className="list-disc pl-8">
                    <li><P>Desarrollo y mantenimiento de sistemas de software</P></li>
                </ul>
            </div>
            <div className="resume_item pl-6 pr-3 pb-3">
                <H1 color="gray-800" marginBottom="mb-0" transform="uppercase">UDEMY</H1>
                <P transform="italic font-semibold">Cursos online en Udemy | 2019 - Actualidad</P>
                <ul className="list-disc pl-8">
                    <li><P>Tomé varios cursos en la plataforma Udemy sobre tecnologías JavaScript</P></li>
                    <li><P>Actualmente poseo un buen manejo de ReactJs, NextJs, NodeJs y Express</P></li>
                    <li><P>Tengo mayor preferencia por el desarrollo de Frontend, aunque también poseo conocimientos en desarrollo de Backend.</P></li>
                    <li><P>También tengo conocimiento en los lenguajes de consulta SQL y GraphQL</P></li>
                </ul>
            </div>
            <div className="resume_item pl-6 pr-3 pb-3">
                <H1 color="gray-800" marginBottom="mb-0" transform="uppercase">PRELIMINARY ENGLISH TEST</H1>
                <P transform="italic font-semibold">Cambridge Assessment English | Noviembre 2016</P>
                <ul className="list-disc pl-8">
                    <li><P>Estudié inglés durante 7 años en un instituto.</P></li>
                    <li><P>En noviembre de 2016 rendí el examen PET de Cambridge.</P></li>
                </ul>
            </div>
        </>
    )
}

export default Education;