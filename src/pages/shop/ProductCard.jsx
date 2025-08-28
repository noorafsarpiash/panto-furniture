import React from 'react'
import { getImgUrl } from '../../utils/getImageURL'

const ProductCard = ({ product }) => {
    return (
        <div>
            <div className='bg-[#FAFAFA]'>
                <img src={getImgUrl(`${product.imgUrl}`)} alt="" />

            </div>
        </div>
    )
}

export default ProductCard