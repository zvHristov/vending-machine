import React, { FC, memo } from 'react';


interface OrederCounterProps {
    count: number;
    countProduct: (string: number) => void;
}

 const OrederCounter: FC<OrederCounterProps> = ({
    count,
    countProduct
 }) => (<div className='orderCounter borderBottomMain'>
            <p className='countDisplay'>
                {count}
                <abbr className='creditText'>your order</abbr>
            </p>
            <button className='buttonCounter' onClick={() => countProduct(1)}>
                <abbr>+</abbr>
            </button>
            <button className='buttonCounter' onClick={() => countProduct(0)}>
                <abbr>-</abbr>
            </button>
        </div>);

 export default memo(OrederCounter);
