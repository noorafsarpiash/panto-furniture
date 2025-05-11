import React from 'react'
import bannerImg from "../../assets/banner.png"

const Hero = () => {
    return (
        <div className='h-screen' style={{ backgroundImage: `url(${bannerImg})` }}></div>
    )
}

export default Hero