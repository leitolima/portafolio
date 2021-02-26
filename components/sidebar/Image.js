import React from 'react';

const Image = () => {
    return (
        <div className="w-36 h-36 bg-gray-600 mx-auto rounded-full text-center mb-4">
            <span className="inline-block h-full align-middle"></span>
            <img 
                src="/my_image.jpg" 
                alt="Leonel Lima - web developer"
                className="w-32 h-32 m-auto rounded-full inline-block align-middle"
            />
        </div>
    )
}

export default Image;