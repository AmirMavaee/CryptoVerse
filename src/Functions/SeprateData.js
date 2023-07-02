import axios from "axios"
//data USD
import data from "./markets.json";
import dataEUR from "./marketsEUR.json";


export const seprateData = (value,start,end)=>{
    const splitedArray = value === "USD" ? data.slice(start,end) : dataEUR.slice(start,end);
    return splitedArray;
}


export const priceStyle = (Value)=>{
    if(Value === "USD"){
        return "$ ";
    }
    else if(Value === "EUR"){
        return "€ ";
    }
    else{
        return Value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
