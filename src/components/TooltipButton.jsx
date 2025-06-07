import React from 'react'

const TooltipButton = ({ position = "bottom", colors = ["bg-red-700", "bg-green-700", "bg-blue-700"] }) => {
    const postionClasses = {
        bottom: {
            tooltip: "bottom-full left-1/2 transform -translate-x-1/2 mb-3",
            arrow: "left-1/2 transform -translate-x-1/2 -bottom-2 border-1"

        }

    }



    return (
        <div className='relative group'>
            <button className='relative p-4 bg-white/25 rounded-full  border border-1 bg-white text-xl'>
                <div className={`hidden absolute space-x-1  p-2 rounded-lg bg-white/25 shadow-md group-hover:flex ${postionClasses[position].tooltip} `}>
                    {
                        colors.map((color, index) => (
                            <div key={index} className={`size-6 ${color} border border-white rounded-full`}></div>
                        ))
                    }

                    <div className={`absolute ${postionClasses[position].arrow}  w-0 h-0 border-1-8 border-1-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35`}>

                    </div>

                </div>
            </button >
        </div >
    )
}

export default TooltipButton