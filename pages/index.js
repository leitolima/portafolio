import React from 'react';
//Sidebar
import Sidebar from '../components/sidebar';
//Section
import Section from '../components/section';

const Home = () => {
    return (
        <main className="flex flex-row">
            <Sidebar/>
            <Section/>
        </main>
    )
}

export default Home;