import React from 'react';
import Link from 'next/link';
//Components
import H1 from '../H1';
import P from '../P';
//Components Contact
import Data from './contact/Data';
//Icons
import Mail from '../../public/mail2.svg';
import Phone from '../../public/phone.svg';
import LinkedIn from '../../public/link.svg';

const Contact = () => {
    return (
        <article className="container mx-auto py-16 px-5">
            <H1 size="3xl" color="lightblue" marginBottom="mb-6">Contacto</H1>
            <P>Me mantengo atento en todo momento a cualquier tipo de llamado, mensaje o intento de comunicación.</P>
            <P>Por favor, siéntete libre de contactarme por cualquiera de los siguiente medios.</P>
            <div className="w-full md:w-2/3 lg:w-1/2 shadow flex flex-col py-6 mt-4">
                <Data
                    title="Email:"
                    text="leonel_lima19@hotmail.com"
                ><Mail/></Data>
                <Data
                    title="Telefono / WhatsApp:"
                    text="+549-3364519919 (Arg.)"
                ><Phone/></Data>
                <Data
                    title="LinkedIn"
                    marginBottom="mb-0"
                    text="Leonel Lima"
                    css="cursor-pointer"
                ><a href="https://www.linkedin.com/in/leonel-lima/" target="_blank"><LinkedIn/></a></Data>
            </div>
        </article>
    )
}

export default Contact;