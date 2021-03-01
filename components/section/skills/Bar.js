import React from 'react'

const Bar = ({ width }) => {
    return (
        <div className={`w-${width} h-3 bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-800`}></div>
    )
}

export default Bar;