import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader/loader';
import CustomerItem from './customer-item';

import './customers.css';

const Customers = ({ loading, customers, error, getAddresses, loadingAddresses, getCustomers, loadingCustomers}) => {
    useEffect(() => {
        loadingCustomers();
        getCustomers();
        // eslint-disable-next-line
      }, []);
  if (loading) return <Loader />;
  
  if (error) return <div className = 'text-danger'>{error}</div>;
  
  return (
    <div className='customers-layout'>
      {customers.map(customer => (
        <CustomerItem key={customer.id} customer={customer} getAddresses = {(customer) => {
          loadingAddresses();
          getAddresses(customer);
        }}/>
      ))}
    </div>
  );

};

Customers.propTypes = {
  customers: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  getAddresses: PropTypes.func.isRequired,
  loadingAddresses: PropTypes.func.isRequired,
  getCustomers: PropTypes.func.isRequired,
  loadingCustomers: PropTypes.func.isRequired
};


export default Customers;