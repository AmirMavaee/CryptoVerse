import React, { Component } from 'react';
//component
import Header from '../Header/Header';
import Main from '../Body/Main';
//context
import Context from '../../Context/Context'


function BodyContent() {
    return (
        <div>
            <Context>
                <Header/>
                <Main/>
            </Context>
        </div>
    );
}

export default BodyContent;