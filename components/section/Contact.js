import React from 'react';
//Components
import H1 from '../H1';
//Components Contact
import Data from './contact/Data';

const Contact = () => {
    return (
        <article className="py-12 px-5">
            <H1 size="3xl" color="blue-500" marginBottom="mb-6">Contacto</H1>
            <div className="w-1/2 shadow flex flex-col py-6">
                <Data
                    title="Email:"
                    icon="/mail.svg"
                    text="leonel_lima19@hotmail.com"
                />
                <Data
                    title="Telefono:"
                    icon="/phone.svg"
                    text="+3364519919"
                />
            </div>
        </article>
    )
}

export default Contact;