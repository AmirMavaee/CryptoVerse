import React from 'react';
//component
import Navbar from '../Header/Navbar';
import CoinDetailContent from './CoinDetailContent';
//context
import Context from '../../Context/Context';



function CoinDetail(props) {

    return (
        <Context>
            <Navbar/>
            <CoinDetailContent/>
        </Context>
    );
}

export default CoinDetail;