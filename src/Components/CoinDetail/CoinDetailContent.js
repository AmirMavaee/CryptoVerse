import React, { useContext } from 'react';
import {useParams} from 'react-router-dom'
//context
import { ContextMoney } from '../../Context/Context';
//data
import { seprateData, priceStyle } from '../../Functions/SeprateData';
// styles
import styles from './CoinDetailContent.module.css'
// component
import LineChart from './LineChart/LineChart';

function CoinDetailContent() {
    const { id } = useParams();
    const {selectedValue} = useContext(ContextMoney);
    return (
        <div>
            {seprateData(selectedValue,0,100).map(
                item => item.id === id && 
                <div className={styles.container}>
                    <div className={styles.coinContent}>
                        <img src={item.image}/>
                        <h1>{id}</h1>
                        <p>{id} is the first successful internet 
                        money based on peer-to-peer technology; whereby no central 
                        bank or authority is involved in the transaction and production of 
                        the Bitcoin currency.</p>
                        <h2>Rank: <span>{item.market_cap_rank}</span></h2>
                        <h2 className='my-4'>Current Price: <span>{priceStyle(selectedValue)}{priceStyle(item.current_price)}</span></h2>
                        <h2>Market Cap: <span>{priceStyle(selectedValue)}{priceStyle(item.market_cap) + " M"}</span></h2>
                    </div>
                    <LineChart value={selectedValue} name={id}/>
                </div>
            )}
        </div>
    );
}

export default CoinDetailContent;