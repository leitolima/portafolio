import React, { useState } from 'react';
import Head from 'next/head';
//Components
import Sidebar from '../components/sidebar';
import BtnSidebar from '../components/BtnSidebar';
import Section from '../components/section';

const Home = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"/>
            <title>Leonel Lima | Web Developer</title>
        </Head>
        <main>
            <BtnSidebar setOpen={() => setOpen(!open)}/>
            <Sidebar open={open}/>
            <Section/>
        </main>
        </>
    )
}

export default Home;