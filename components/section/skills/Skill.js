import React from 'react';

const Skill = ({ tech, percentage }) => {
    return (
        <span className="block mb-2">{tech}<i className="float-right">{percentage}%</i></span>
    )
}

export default Skill;