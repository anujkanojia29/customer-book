import axios from 'axios';

import { CLEAR_ADDRESSES, GET_ADDRESSES, GET_ADDRESSES_ERROR, LOADING_ADDRESSES } from './type';
import { getAddressesURL } from '../../helpers/request';

export const getAddresses = (customer) => async dispatch => {
  axios.get(getAddressesURL(customer.id)).then(response => {
    if (response.data.success) {
     if(response.data.data.length > 0) {
        dispatch({ type: GET_ADDRESSES, payload : { customer: customer , addresses: response.data.data }  })
        } else {
        dispatch({ type: GET_ADDRESSES_ERROR, payload : { customer: customer , message: 'No Record Found'} })
      }
    } else {
      dispatch({ type: GET_ADDRESSES_ERROR, payload: { customer: customer , message: response.data.data } });
    }
  })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_ADDRESSES_ERROR, payload: { customer , message: err.message } })
    })
}

// Set loading to true
export const loadingAddresses = () => {
  return {
    type: LOADING_ADDRESSES
  };
};


export const clearAddresses = () => {
  return {
    type: CLEAR_ADDRESSES
  };
};
