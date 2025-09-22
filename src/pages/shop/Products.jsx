import React, { useState } from 'react'
import { products } from '../../utils/products'
import ProductCard from './ProductCard'

const Products = ({ headline }) => {
    const categories = ["Chair", "Beds", "Sofa", "Lamp"]
    const [selectedCategory, setSelectedCategory] = useState("Chair")
    const filteredProducts = products.filter((product) => product.category === selectedCategory)

    const [visibleProducts, setVisibleProducts] = useState(4);

    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 4);
    }

    return (
        <div>
            <div className='section-container'>
                <h2 className='text-4xl font-bold text-center my-8'>{headline}</h2>
                <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
                    <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
                        {
                            categories.map((category) => (
                                <button
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setVisibleProducts(4);
                                    }}

                                    className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${selectedCategory === category ? 'bg-white text-primary' : 'text-black'}`}
                                    key={category}>{category}</button>
                            )

                            )
                        }
                    </div>

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
                    {
                        filteredProducts.slice(0, visibleProducts).map((product, index) => (
                            <ProductCard key={index} product={product} />

                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Products