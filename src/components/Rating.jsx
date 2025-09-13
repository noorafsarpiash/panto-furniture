import React from 'react'

const Rating = ({ rating }) => {
    const totalStars = 5;
    return (
        <div className='flex space-x-1' >

            {
                Array.from({ length: totalStars }, (_, index))
            }

        </div>
    )
}

export default Rating
//