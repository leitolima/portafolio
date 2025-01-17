import React from 'react';
//Components
import H1 from '../H1';
import P from '../P';

const About = () => {
    return (
        <article className="container mx-auto py-12 px-5">
            <H1 size="3xl" color="lightblue" marginBottom="mb-6">Sobre mí</H1>
            <P>
                Soy estudiante de terceriario, residente en Argentina. Me desempeño en el ámbito del desarrollo de software (web) 
                de forma autodidacta al mismo tiempo que curso una Tecnicatura en Análisis de Sistemas. Llevo poco más de un año 
                desarrollando aplicaciones web con tecnologías JavaScript. También invierto en conocimiento en cursos certificados 
                en UDEMY, y siempre busco mejorar mis habilidades mediante la práctica, desarrollando aplicaciones y sitios web como este.
            </P>
            <div className="flex flex-col md:flex-row mt-8">
                <img src="/my_img1.jpg" alt="Leonel Lima" className="block mx-auto w-80 h-80 object-contain"/>
                <div className="w-full mt-8 md:mt-0 md:px-5">
                    <H1 size="3xl" font="tight" color="lightblue">Desarrollador: Web, Backend & Frontend.</H1>
                    <P transform="italic">
                        Desarrollador con conocimientos en JavaScript (vanilla, NodeJs en backend, y ReactJs/NextJs en frontend);
                        CSS3 (Framework Tailwind); bases de datos SQL y NoSQL (MySQL y MongoDB) y en lenguaje de consulta GraphQL.
                    </P>
                    <div className="mt-6">
                        <P size="xl" color="gray-700">
                            <svg className="w-8 h-8 text-lightblue inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                            <span className="text-gray-800 font-bold">LinkedIn: </span>
                            <a href="https://www.linkedin.com/in/leonel-lima/" target="_blank" className="hover:text-lightblue duration-150">Leonel Lima</a>
                        </P>
                        <P size="xl" color="gray-700">
                            <svg className="w-8 h-8 text-lightblue inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                            <span className="text-gray-800 font-bold">País: </span> Argentina
                        </P>
                        <P size="xl" color="gray-700">
                            <svg className="w-8 h-8 text-lightblue inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                            <span className="text-gray-800 font-bold">Ciudad: </span> San Nicolás de los Arroyos
                        </P>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default About;