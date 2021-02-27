import React from 'react';
//Components
import H1 from '../H1';
import P from '../P';

const Presentation = () => {
    return (
        <section className="w-full">
            <article className="h-screen image-1 flex flex-col justify-center items-center">
                <div className="relative text-left">
                    <H1 size="7xl">Leonel Lima</H1>
                    <P size="4xl" color="white">Desarrollador:</P>
                </div>
            </article>
        </section>
    )
}

export default Presentation