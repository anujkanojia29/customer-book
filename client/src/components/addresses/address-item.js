import React from 'react';
import PropTypes from 'prop-types';

const AddressItem = ({ address: { address, alias, pincode } }) => {
    return (
        <div className='address-card text-center'>
            <h2> {alias} </h2>
            <p className='address'>{address}</p>
            <div className='pincode'>Pincode: {pincode}</div>
        </div>
    )
};

AddressItem.propTypes = {
    address: PropTypes.object.isRequired,
};

export default AddressItem;
