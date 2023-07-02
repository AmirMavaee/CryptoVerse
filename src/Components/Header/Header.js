import React, { useContext } from 'react';
//styles
import styles from "./Header.module.css"
//components
import Navbar from './Navbar';

//carousle
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
//context
import { ContextMoney } from '../../Context/Context';
//functions
import { seprateData } from '../../Functions/SeprateData';


function Header() {

    const {selectedValue} = useContext(ContextMoney);

    const items =  seprateData(selectedValue,0,10).map(item => <>
        <img className={styles.imageCoin} src={item.image} alt="coin"/>
        <div className='text-white flex justify-center'>
            <p>{item.symbol.toUpperCase()}</p>
            <span className={item.market_cap_change_percentage_24h>0 ? "text-green-600 ml-2" : "text-red-600 ml-2"}>{item.market_cap_change_percentage_24h>0 ? "+" + item.market_cap_change_percentage_24h.toFixed(2)+"%":item.market_cap_change_percentage_24h.toFixed(2)+"%"}</span>
        </div>
        <p className='text-white text-xl'>{selectedValue === "USD" ? "$ " : "€ "}{item.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    </>)

    const responsive = {
        0: { items: 2 },
        568: { items: 4 },
    };
    

    return (
        <div>
            <Navbar/>
            <div className={styles.header}>
                <h1 className={styles.title}>Cryptoverse</h1>
                <p className='text-gray-400	text-sm	mb-16'>Get all the Info regarding your favorite Crypto Currency</p>
                <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        controlsStrategy="alternate"
                        disableDotsControls
                        disableButtonsControls
                        autoPlay
                        infinite
                        autoPlayInterval={500}
                        animationDuration={2000}
                    />
            </div>
        </div>
    );
}

export default Header;