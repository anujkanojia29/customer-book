import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader/loader';
import AddressItem from './address-item';

import './addresses.css';

const Addresses = ({ customer, loading, error, addresses }) => {
    if (customer === undefined || customer === {}) {
        return <div className='address-content text-danger'>Select Cutomer to view the address</div>;
    }
    if (loading) return <Loader />;

    return (
    <div className = 'address-container'>
        <h2 className = 'address-content'>{customer.name}</h2>
        {error ? <div className='address-content text-danger'> {error}</div> :
            <div className='address-layout'>
                {addresses.map((address, index) => (
                    <AddressItem key={index} address={address} />
                ))}
            </div>
        }
    </div>)
};

Addresses.propTypes = {
    addresses: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string,
};


export default Addresses;