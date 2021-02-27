import React from 'react';
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
                <NavItem text="Inicio"><Home/></NavItem>
                <NavItem text="Sobre mí"><User/></NavItem>
                <NavItem text="Habilidades"><Puzzle/></NavItem>
                <NavItem text="Currículum"><CV/></NavItem>
                <NavItem text="Contacto"><Mail/></NavItem>
            </ul>
        </nav>
    )
}

export default Navigation;