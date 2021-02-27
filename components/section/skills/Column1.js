import React from 'react';
import P from '../../P';

const Column1 = () => {
    return (
        <ul className="space-y-4 pr-5">
            <li>
                <span className="block mb-2">HTML<i className="float-right">100%</i></span>
                <div className="w-full h-3 bg-gradient-to-br from-pink-500 to-purple-600"></div>
            </li>
            <li>
                <span className="block mb-2">CSS<i className="float-right">100%</i></span>
                <div className="w-full h-3 bg-gradient-to-br from-pink-500 to-purple-600"></div>
            </li>
            <li>
                <span className="block mb-2">Framework CSS (Tailwind)<i className="float-right">100%</i></span>
                <div className="w-full h-3 bg-gradient-to-br from-pink-500 to-purple-600"></div>
            </li>
            <li>
                <span className="block mb-2">JavaScript<i className="float-right">100%</i></span>
                <div className="w-full h-3 bg-gradient-to-br from-pink-500 to-purple-600"></div>
            </li>
            <li>
                <span className="block mb-2">ReactJs y NextJs<i className="float-right">100%</i></span>
                <div className="w-full h-3 bg-gradient-to-br from-pink-500 to-purple-600"></div>
            </li>
        </ul>
    )
}

export default Column1;