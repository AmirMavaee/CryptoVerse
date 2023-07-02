import React, { useContext, useState } from 'react';
//styles
import styles from "./Main.module.css"
//react-router-dom
import { Link } from 'react-router-dom';
//component
import Coin from './Coin';
import {ContextMoney} from "../../Context/Context"
//functions
import { seprateData } from '../../Functions/SeprateData';
import { priceStyle } from '../../Functions/SeprateData';





function Main() {

    const [value , setValue] = useState("");
    const [start , setStart] = useState(0);
    const [end , setEnd] = useState(10);
    const [focused, setFocused] = React.useState(false);
    const {selectedValue} = useContext(ContextMoney);



    const changeValue = (e)=>{
        setValue(e.target.value)
        setStart(0);
        if(value.length === 1){
            setEnd(10);
        }
        else{
            setEnd(100);
        }
    }

    const spcifiedStartAndEnd = (e)=>{
        // set start and enf
        let value = parseInt(e.target.innerText);
        let Start = value * 10 - 10;
        let End = value * 10;
        setStart(Start);
        setEnd(End);
    }

    const HasOrNoActiveclass =(e)=>{
        const link = Array.from(document.querySelectorAll("li#pagination"));
        link.map(item => 
            item.classList.contains("text-red-500") ? 
            item.classList.remove("text-red-500") : 
            e.currentTarget.classList.add("text-red-500"));
    }


    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);



    return (
        <div className='px-8'>
            <h1 className='text-center text-white text-4xl py-6'>Cryptocurrency Prices by Market Cap</h1>
            <div className='relative'>
                <input type="text" className={focused ? styles.inputFoucus : styles.inputText} onFocus={onFocus} onBlur={onBlur} onChange={changeValue}/>
                <span className={(focused || value.length !== 0) ? styles.floatingLabelFocus : styles.floatingLabel}>Search For a Crypto Currency..</span>
            </div>
            <table className="rounded overflow-hidden mt-6">
                <thead>
                    <tr className={styles.coinHeader}>
                        <th className='p-3 text-start'>Coin</th>
                        <th className='p-3 text-end'>Price</th>
                        <th className='p-3 text-end'>24h Change</th>
                        <th className='p-3 text-end'>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {seprateData(selectedValue,start,end).map(item => 
                            item.name.toLowerCase().includes(value.toLowerCase()) && 
                            <tr key={item.id} className={styles.CoinContent}>
                            <td className="text-start">
                                <Link to={`/coin/${item.id}`}>
                                        <div className='flex p-3.5'>
                                            <img src={item.image}/>
                                            <div>
                                                <p className={styles.CoinTextHeader}>{item.symbol.toUpperCase()}</p>
                                                <p className={styles.CoinText}>{item.name}</p>
                                            </div>
                                        </div>
                                </Link>
                            </td>
                            <td className="text-white text-end p-3.5"><Link to={`/coin/${item.id}`}>{priceStyle(selectedValue)}{priceStyle(item.current_price)}</Link></td>
                            <td className={item.price_change_percentage_24h > 0 ? "text-green-600 text-end p-3.5":"text-red-600 text-end p-3.5"}><Link to={`/coin/${item.id}`}>{item.price_change_percentage_24h}</Link></td>
                            <td className="text-white text-end p-3.5"><Link to={`/coin/${item.id}`}>{priceStyle(selectedValue)}{priceStyle(item.market_cap)+ " M"}</Link></td>
                        </tr>        
                    )}
                </tbody>
            </table>
            {/* text-teal-500 px-3 */}
            <div className={value.length > 1 && "hidden"}>
                <ul className='flex justify-center'>
                    <li id='pagination' onClick={HasOrNoActiveclass} class="text-teal-500 px-3"><a onClick={spcifiedStartAndEnd} href='#'>1</a></li>
                    <li id='pagination' onClick={HasOrNoActiveclass} class="text-teal-500 px-3"><a onClick={spcifiedStartAndEnd} href='#'>2</a></li>
                    <li id="pagination" onClick={HasOrNoActiveclass} class="text-teal-500 px-3"><a onClick={spcifiedStartAndEnd} href='#'>3</a></li>
                    <li id="pagination" onClick={HasOrNoActiveclass} class="text-teal-500 px-3"><a onClick={spcifiedStartAndEnd} href='#'>4</a></li>
                    <li id="pagination" onClick={HasOrNoActiveclass} class="text-teal-500 px-3"><a onClick={spcifiedStartAndEnd} href='#'>5</a></li>
                    <li id="pagination" onClick={HasOrNoActiveclass} class="text-teal-500 px-3"><a onClick={spcifiedStartAndEnd} href='#'>6</a></li>
                    <li id="pagination" onClick={HasOrNoActiveclass} class="text-teal-500 px-3"><a onClick={spcifiedStartAndEnd} href='#'>7</a></li>
                    <li id="pagination" onClick={HasOrNoActiveclass} class="text-teal-500 px-3"><a onClick={spcifiedStartAndEnd} href='#'>8</a></li>
                    <li id="pagination" onClick={HasOrNoActiveclass} class="text-teal-500 px-3"><a onClick={spcifiedStartAndEnd} href='#'>9</a></li>
                    <li id="pagination" onClick={HasOrNoActiveclass} class="text-teal-500 px-3"><a onClick={spcifiedStartAndEnd} href='#'>10</a></li>
                </ul> 
            </div>
        </div>
    );
}

export default Main;