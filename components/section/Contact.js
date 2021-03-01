import React from 'react';
import Link from 'next/link';
//Components
import H1 from '../H1';
//Components Contact
import Data from './contact/Data';
//Icons
import Mail from '../../public/mail2.svg';
import Phone from '../../public/phone.svg';
import LinkedIn from '../../public/link.svg';

const Contact = () => {
    return (
        <article className="container mx-auto py-14 px-5">
            <H1 size="3xl" color="lightblue" marginBottom="mb-6">Contacto</H1>
            <div className="w-full md:w-2/3 lg:w-1/2 shadow flex flex-col py-6">
                <Data
                    title="Email:"
                    text="leonel_lima19@hotmail.com"
                ><Mail/></Data>
                <Data
                    title="Telefono:"
                    text="+3364519919"
                ><Phone/></Data>
                <Data
                    title="LinkedIn"
                    marginBottom="mb-0"
                    css="cursor-pointer"
                ><a href="https://www.linkedin.com/in/leonel-lima/" target="_blank"><LinkedIn/></a></Data>
            </div>
        </article>
    )
}

export default Contact;