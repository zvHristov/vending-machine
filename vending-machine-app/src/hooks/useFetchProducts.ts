
import React, { useEffect, useState } from 'react';
import { IProduct } from '../components/product/product';

export const useFetchProducts = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<IProduct[] | undefined>();
    const [isError, setIsError] = useState<boolean>(false);

    const controller = new AbortController();

    const getProduct = async () => {    
        setIsLoading(true);

        try {
            const responce = fetch('http://localhost:8181/products', {
                method: "GET", 
                credentials: "include",
                mode: "cors",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                signal: controller.signal
            }).then( res => res.json());
            console.log(responce, 'responce products');
            
            const data: IProduct[] = await responce || false;

            if (!data) return;

            setProducts(data);
            setIsLoading(false);
            setIsError(false);
        }
        catch (error) {
            setIsError(true);
        } 
    }

    useEffect(() => {
        getProduct();

        return () => {
            controller.abort();
        }
    }, []);

    return  [
        isError,
        products,
        isLoading

    ];

};