import React from 'react';
import Customers from '../../components/customers/customers.container';
import Addresses from '../../components/addresses/addresses.container';

import './home.css';

const HomePage = () => {
    return (
    <div className = 'home-page'>
        <Customers />
        <Addresses />
    </div>
    )
}

export default HomePage;