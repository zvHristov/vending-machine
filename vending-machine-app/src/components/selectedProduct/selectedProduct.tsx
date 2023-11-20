import React, { FC, memo } from 'react';
import { IProduct } from '../product/product';


interface SelectedProductProps {
    products: IProduct[];
    selectProduct: (product: IProduct) => void;
}

 const SelectedProduct: FC<SelectedProductProps> = ({
    products,
    selectProduct
 }) => {
    
    return (
        <section className='selectedProductsBox borderBottomMain'>
        <h3 className='mainSubtitle'>Selected code product</h3>
        {products.map((product: IProduct, index) => (
            <button 
                key={index}
                type='button' 
                className='selectProduc'
                onClick={() => selectProduct(product)} 
            >
                {index + 1}
            </button>
        ))}</section>
    )
 };

 export default memo(SelectedProduct);
