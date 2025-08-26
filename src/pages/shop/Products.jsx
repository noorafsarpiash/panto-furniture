import React from 'react'
import { products } from '../../utils/products'
import ProductCard from './ProductCard'

const Products = ({ headline }) => {
    const categories = ["Chair", "Beds", "Sofa", "Lamp"]
    return (
        <div>
            <div className='section-container'>
                <h2 className='text-4xl font-bold text-center my-8'>{headline}</h2>
                <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
                    <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
                        {
                            categories.map((category) => (
                                <button
                                    className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors`}
                                    key={category}>{category}</button>
                            )

                            )
                        }
                    </div>

                </div>
                <div>
                    {
                        products.map((product, index) => (
                            <ProductCard key={index} product={product} />

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products