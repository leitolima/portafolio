import React from 'react';
//Components section
import Presentation from './Presentation';
import Curriculum from './Curriculum';
import Skills from './Skills';
import About from './About';

const Section = () => {
    return (
        <>
            <Presentation/>
            <section className="xl:ml-72 duration-500">
                <About/>
                <Skills/>
                <Curriculum/>
            </section>
        </>
    )
}

export default Section;