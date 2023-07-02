import React from 'react';

function Coin({coinItem}) {
    return (
        <div className='flex justify-between'>
           <div>{coinItem.name}</div>
           <div>{coinItem.current_price}</div>
           <div>{coinItem.price_change_percentage_24h}</div>
           <div>{coinItem.market_cap}</div>
        </div>
    );
}

export default Coin;