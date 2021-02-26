import React from 'react';
import H1 from './H1';
import Image from './Image';
import Copyright from './Copyright';
import Navigation from './Navigation';

const Sidebar = () => {
    return (
        <aside className="w-72 bg-gray-900 h-screen flex flex-col justify-between py-4 px-6 overflow-y-auto">
            <Image/>
            <H1>Leonel Lima</H1>
            <Navigation/>
            <Copyright name="Leonel Lima"/>
        </aside>
    )
}

export default Sidebar;