import React from 'react';
//Components
import H1 from '../H1';
import P from '../P';

const Section = () => {
    return (
        <>
            <section className="w-full">
                <article className="h-screen image-1 flex flex-col justify-center items-center">
                    <div className="relative text-left">
                        <H1 size="7xl">Leonel Lima</H1>
                        <P size="4xl">Desarrollador:</P>
                    </div>
                </article>
            </section>
            <section className="xl:ml-72 duration-500">
                
            </section>
        </>
    )
}

export default Section;