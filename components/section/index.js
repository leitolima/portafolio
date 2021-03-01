import React from 'react';
import { Element } from 'react-scroll';
//Components section
import Presentation from './Presentation';
import Curriculum from './Curriculum';
import Contact from './Contact';
import Skills from './Skills';
import About from './About';

const Section = () => {
    return (
        <>
            <Element name="presentation" className="element">
                <Presentation/>
            </Element>
            <section className="xl:ml-72 duration-500">
                <Element name="about" className="element">
                    <About/>
                </Element>
                <Element name="skills" className="element">
                    <Skills/>
                </Element>
                <Element name="cv" className="element">
                    <Curriculum/>
                </Element>
                <Element name="contact" className="element">
                    <Contact/>
                </Element>
            </section>
        </>
    )
}

export default Section;