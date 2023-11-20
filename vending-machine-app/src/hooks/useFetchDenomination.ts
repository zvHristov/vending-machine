
import React, { useEffect, useState } from 'react';

export const useFetchDenomination = () => {
    const [isLoadingDenomination, setIsLoading] = useState<boolean>(false);
    const [denominations, setDenominations] = useState<any[] | false>();
    const [isErrorDenomination, setIsError] = useState<boolean>(false);

    const controller = new AbortController();

    const getProduct = async () => {    
        setIsLoading(true);

        try {
            const responce = fetch('http://localhost:8181/denominations', {
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
            console.log(responce, 'responce');
            
            const data: any[] = await responce || false;

            if (!data) return;
           
            setDenominations(data);
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
        isErrorDenomination,
        denominations,
        isLoadingDenomination

    ];

};