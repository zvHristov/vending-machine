import React, { FC, useState, useCallback, useEffect } from 'react';
import './main.css';
import Header from './components/header/header';
import Product, { IProduct } from './components/product/product';
import Denomination from './components/denomination/denomination';
import OrederCounter from './components/orderCounter/orderCounter';
import SelectedProduct from './components/selectedProduct/selectedProduct';
import Output from './components/output/output';
import Footer from './components/footer/footer';

import { useFetchProducts } from './hooks/useFetchProducts';
import { useFetchDenomination } from './hooks/useFetchDenomination';

const Main:FC  = () => {

  const [         
    isError,
    products,
    isLoading,
  ] = useFetchProducts();

  const [         
    isErrorDenomination,
    denominations,
    isLoadingDenomination,
  ] = useFetchDenomination();

  const [count, setCount] = useState<number>(1);
  const [coins, setCoins] = useState<number>(0);
  const [worningCoins, setWorningCoins] = useState<string | null>();
  const [change, setChange] = useState<number>(0);

  const addMoney = useCallback((selectedCoins: number) => setCoins(coins + selectedCoins), [coins]);

  const selectProduct = 
  useCallback((product: IProduct) => {
    const changeValue = Math.round((coins - product.price * count) * 100) / 100;
    if (changeValue < 0 ) {
      console.log(changeValue,'error')
      setChange(0);
      setWorningCoins(`error coins need money ${changeValue}, pls`)
    } else if(product.order < count) {
      setWorningCoins(`error, the product order is no avaible`);
    } else {
      resetMashine(changeValue);
    }
  }, [coins, count, change]);

  const countProduct = useCallback((increment: number) => {
    if (count < 1) {
      setCount(1);
      return;
    } else {
      increment === 1 ? setCount(count + 1) : setCount(count - 1);
    }
  }, [count]);

  const resetMashine = useCallback((changeValue: number) => {
      setCoins(0);
      setCount(1);
      setChange(changeValue);
      setWorningCoins('');
  }, []);

  return (
    <div className='app'>
        <div className='vendingMachine'>
            <Header />
            <div className='productScreen'>
              <div className='products'>
                {isLoading && (<p>Loading...</p>)}
                {!isError && products !== undefined &&
                (products as IProduct[]).map((product: IProduct, index) =>
                 <Product product={product} selectedNumber={index + 1}/>)
                }
              </div>
              <div className='displayScreen'>
              {isLoadingDenomination && (<p>Loading...</p>)}
                {!isErrorDenomination && denominations &&
                  (<Denomination denominations={denominations} addMoney={addMoney} />)}
                <article className='textBox'>
                  <p className='fw500 mr0 borderBottomMain'>
                    {coins}
                    <abbr className='creditText'>your credits</abbr>
                  </p>
                  <p className='fw500 error mr0'>{worningCoins}</p>
                </article>
                <OrederCounter 
                  count={count} 
                  countProduct={countProduct}
                />
                {!isError && products !== undefined && (
                <SelectedProduct
                    products={(products as IProduct[])} 
                    selectProduct={selectProduct} 
                />)}
                <Output 
                  change={change}
                  resetMashine={resetMashine}
                />
              </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Main;
