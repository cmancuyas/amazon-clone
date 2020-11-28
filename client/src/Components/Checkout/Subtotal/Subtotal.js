import React, { useState } from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../States/StateProvider/StateProvider';
import { getBasketTotal } from '../../../States/Reducer';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  console.log('basket subtotal >>>', basket);
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Homework */}
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
