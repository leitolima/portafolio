import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import NavItem from './NavItem';
//Icons
import Home from '../../public/home.svg';
import User from '../../public/user.svg';
import Puzzle from '../../public/puzzle.svg';
import CV from '../../public/cv.svg';
import Mail from '../../public/mail.svg';

const Navigation = () => {
    return (
        <nav className="flex-1 w-full m-auto mt-6 px-4">
            <ul className="list-none">
                <ScrollLink activeClass="active" to="presentation" spy={true} smooth={true} duration={800}>
                    <NavItem text="Inicio"><Home/></NavItem>
                </ScrollLink>
                <ScrollLink activeClass="active" to="about" spy={true} smooth={true} duration={800}>
                    <NavItem text="Sobre mí"><User/></NavItem>
                </ScrollLink>
                <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} duration={800}>
                    <NavItem text="Habilidades"><Puzzle/></NavItem>
                </ScrollLink>
                <ScrollLink activeClass="active" to="cv" spy={true} smooth={true} duration={800}>
                    <NavItem text="Currículum"><CV/></NavItem>
                </ScrollLink>
                <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} duration={800}>
                    <NavItem text="Contacto"><Mail/></NavItem>
                </ScrollLink>
            </ul>
        </nav>
    )
}

export default Navigation;