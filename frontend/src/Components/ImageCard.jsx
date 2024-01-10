import React from 'react'

const ImageCard = (props) => {
    return (
        <>
            <div className="group cursor-pointer relative overflow-hidden">
                <img src={props.image} alt="Image" className="w-full h-48 object-cover scr rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                        View
                    </button>
                </div>
            </div>
        </>
    )
}

export default ImageCard
