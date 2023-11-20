import React, { FC, memo } from 'react';

export interface IProduct {
    name: string,
    uid: string,
    price: number,
    currency: string,
    currencyUid: number,
    order: number,
  }

interface ProductProps {
    product: IProduct;
    selectedNumber: number;
}

 const Product: FC<ProductProps> = ({
    product,
    selectedNumber,
 }) => {

    return(
        <div
        key={product.uid + product.name}
        className='product'
                   >
                    <header>
                      <p className='fw500'>{product.name}</p>
                      <p>price</p>
                      <p className='fw400'>{product.price}</p>
                      <p>avaible order</p>
                      <p>{product.order}</p>
                      <p>your code</p>
                      <p>{selectedNumber}</p>
                    </header>
                  </div>
    );
 }; 

 export default memo(Product);