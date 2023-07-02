import React, { useContext } from 'react';
//styles
import styles from "./Navbar.module.css"
//context
import { ContextMoney } from "../../Context/Context"

function Navbar() {

    const {changeHandler} = useContext(ContextMoney);

    return (
        <div className={styles.container}>
            <h1 className={styles.navbar_brand}>Cryptoverse</h1>
            <div>
                <select className="border border-gray-700 rounded p-2 bg-transparent text-white outline-0 mr-3" defaultValue={"USD"} onChange={(e) => changeHandler(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <button className={styles.login}>LOGIN</button>
            </div>
        </div>
    );
}

export default Navbar;