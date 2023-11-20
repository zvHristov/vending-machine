import React, { FC } from 'react';

export interface IDenomination {
    denomination: number,
    currencyUid: string,
  }

interface DenominationProps {
    denominations: any;
    addMoney: (string: number) => void;
}

 const Denomination: FC<DenominationProps> = ({
    denominations,
    addMoney
 }) => {

    return(
        <section className='wrapper-denomination borderBottomMain'>
            <h2 className='nainTitle'>Select money:</h2>
            <p className='fw400'>List of Available Denomination: LV</p>
            <div className='listDenomination'>
            {denominations !== undefined &&
            (denominations as IDenomination[]).map((denomination, index) => 
            (<button key={index} onClick={() => addMoney(denomination.denomination)} >
                {denomination.denomination}
                </button>))
            }
            </div>
      </section>
    );
 }; 

 export default Denomination;
