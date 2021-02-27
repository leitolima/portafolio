import React from 'react';

const NavItem = ({ children, text }) => {
    return (
        <li className="text-xl py-3">
            <p className="text-gray-200 flex flex-row items-center">
                {children}
                {text}
            </p>
        </li>
    )
}

export default NavItem;