import React from 'react';
//Components
import H1 from '../H1';
//Components Contact
import Data from './contact/Data';
//Icons
import Mail from '../../public/mail2.svg';
import Phone from '../../public/phone.svg';

const Contact = () => {
    return (
        <article className="py-12 px-5">
            <H1 size="3xl" color="lightblue" marginBottom="mb-6">Contacto</H1>
            <div className="w-1/2 shadow flex flex-col py-6">
                <Data
                    title="Email:"
                    text="leonel_lima19@hotmail.com"
                ><Mail/></Data>
                <Data
                    title="Telefono:"
                    text="+3364519919"
                ><Phone/></Data>
            </div>
        </article>
    )
}

export default Contact;