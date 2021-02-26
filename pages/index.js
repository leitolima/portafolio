import React from 'react';
import Head from 'next/head';
//Sidebar
import Sidebar from '../components/sidebar';
//Section
import Section from '../components/section';

const Home = () => {
    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"/>
            <title>Leonel Lima | Web Developer</title>
        </Head>
        <main>
            <Sidebar/>
            <Section/>
        </main>
        </>
    )
}

export default Home;