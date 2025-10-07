import React from 'react'
import ExperiencesImg from '../../assets/expricences.png'
import Button from '../../components/Button'

import materialImg1 from "../../assets/material1.png"
import materialImg2 from "../../assets/material2.png"
import materialImg3 from "../../assets/material3.png"

const Materials = () => {
    return (
        <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>


            <div className='md:w-1/2 mx-auto'>
                <h3 className=' uppercase text-lg font-semibold text-primary mb-4'>Materials</h3>
                <h2 className='capitalize mb-4 text-4xl font-bold lg:w-1/2  text-black'>Very Serious Materials For Making Furniture</h2>
                <p className='text-black dark:text-white mb-5 lg:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta eligendi rerum, sapiente nisi laborum labore asperiores omnis. Iure fuga repellendus ipsam dicta, est labore accusamus deleniti! Temporibus, quaerat voluptas.</p>
                <Button text="More Info" />
            </div>

            <div className='md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center'>

                <div>
                    <img src={materialImg1} alt="" />
                    <img src={materialImg2} alt="" />
                </div>
                <div className='md:col-span-2 col-span-1'>
                    <img src={materialImg3} alt="" className='w-full md:h-[541px] ' />
                </div>

            </div>

        </section>
    )
}

export default Materials