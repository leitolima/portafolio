import React from 'react';

const NavItem = ({ icon, text }) => {
    return (
        <li className="text-xl py-3">
            <p className="text-gray-200 flex flex-row items-center">
                <svg className="w-12 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon}/></svg>
                {text}
            </p>
        </li>
    )
}

export default NavItem;