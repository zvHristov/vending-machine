import React, { FC, memo } from 'react';
import { IProduct } from '../product/product';

interface OutputProps {
    change: number;
    resetMashine: (changeValue: number) => void;
}

 const Output: FC<OutputProps> = ({
    change,
    resetMashine,
 }) => (<div className='outputCoins'>
        <section>
            <button 
                type='button'
                className='borderColorMain'
                onClick={() => resetMashine(0)} 
            >reset</button>
        </section>
        <h2 className='nainTitle'>Your change:</h2>
        <input 
            type='number'
            value={change}
            disabled={true}
        />
        <section className='outputProductsBox'></section>
 </div>);

 export default memo(Output);
