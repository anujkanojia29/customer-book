import React from 'react';
import PropTypes from 'prop-types';

const CustomerItem = ({ customer, getAddresses }) => {
  const { name, age, gender } = customer;
  return (
    <div className='customer-card text-center' onClick = {() => getAddresses(customer)}>
      {
      (gender === 'male') ? 
        <i className='fas fa-male customer-avatar'/>:
        <i className='fas fa-female customer-avatar'/>
      }   
      <div className = 'customer-name'>{name}</div>
      <div className = 'customer-info'>Age : {age}</div>
    </div>
  )
};

CustomerItem.propTypes = {
    customer: PropTypes.object.isRequired,
    getAddresses: PropTypes.func.isRequired
};

export default CustomerItem;
