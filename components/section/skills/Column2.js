import React from 'react';
import P from '../../P';

const Column2 = () => {
    return (
        <ul className="space-y-4 pr-5">
            <li>
                <span className="block mb-2">NodeJs<i className="float-right">100%</i></span>
                <div className="w-full h-3 bg-gradient-to-br from-pink-500 to-purple-600"></div>
            </li>
            <li>
                <span className="block mb-2">NoSQL (MongoDB)<i className="float-right">100%</i></span>
                <div className="w-full h-3 bg-gradient-to-br from-pink-500 to-purple-600"></div>
            </li>
            <li>
                <span className="block mb-2">GraphQL<i className="float-right">100%</i></span>
                <div className="w-full h-3 bg-gradient-to-br from-pink-500 to-purple-600"></div>
            </li>
            <li>
                <span className="block mb-2">SQL (MySQL)<i className="float-right">100%</i></span>
                <div className="w-full h-3 bg-gradient-to-br from-pink-500 to-purple-600"></div>
            </li>
            <li>
                <span className="block mb-2">Git<i className="float-right">100%</i></span>
                <div className="w-full h-3 bg-gradient-to-br from-pink-500 to-purple-600"></div>
            </li>
        </ul>
    )
}

export default Column2;