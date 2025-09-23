import React from 'react'
import ExperiencesImg from '../../assets/expricences.png'
import Button from '../../components/Button'

const Experiences = () => {
    return (
        <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
            <div className='md:w-1/2 md:h-[541px]'>
                <img src={ExperiencesImg} alt="ExperiencesImg" className='h-full w-full' />
                <div className='absolute inset-0 bg-black opacity-30'></div>
            </div>

            <div className='md:w-1/2 mx-auto'>
                <h3 className=' uppercase text-lg font-semibold text-primary mb-4'>Experiences</h3>
                <h2 className='capitalize mb-4 text-4xl font-bold lg:w-1/2  text-black'>we provide you the best experiences</h2>
                <p className='text-black dark:text-white mb-5 lg:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta eligendi rerum, sapiente nisi laborum labore asperiores omnis. Iure fuga repellendus ipsam dicta, est labore accusamus deleniti! Temporibus, quaerat voluptas.</p>
                <Button text="More Info" />
            </div>

        </section>
    )
}

export default Experiences