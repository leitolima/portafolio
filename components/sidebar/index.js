import React from 'react';
//Components
import H1 from '../H1';
//Components sidebar
import Image from './Image';
import Copyright from './Copyright';
import Navigation from './Navigation';

const Sidebar = () => {
    return (
        <aside className="w-72 bg-gray-900 h-screen flex flex-col justify-between py-4 px-6 overflow-y-auto fixed -left-72 xl:left-0 duration-500">
            <Image/>
            <H1 size="3xl" align="center">Leonel Lima</H1>
            <Navigation/>
            <Copyright name="Leonel Lima"/>
        </aside>
    )
}

export default Sidebar;