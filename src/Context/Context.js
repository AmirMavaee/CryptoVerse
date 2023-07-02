import React, { useState } from 'react';

export const ContextMoney = React.createContext();

function Context({children}) {

    const [selectedValue, setSelectedValue] = useState("USD");

    const changeHandler = (value)=>{
        setSelectedValue(value)
    }


    return (
        <ContextMoney.Provider value={{selectedValue , changeHandler}}>
            {children}
        </ContextMoney.Provider>
    );
}

export default Context;