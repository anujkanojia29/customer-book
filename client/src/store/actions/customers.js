import axios from 'axios';

import { CLEAR_CUSTOMERS, GET_CUSTOMERS, GET_CUSTOMERS_ERROR, LOADING_CUSTOMERS } from './type';
import { getCustomersURL } from '../../helpers/request';

export const getCustomers = () => async dispatch => {
  axios.get(getCustomersURL()).then(response => {
    if (response.data.success) {
      if(response.data.data.length > 0) {
         dispatch({ type: GET_CUSTOMERS, payload: response.data.data })
         } else {
         dispatch({ type: GET_CUSTOMERS_ERROR, payload :'No Record Found' })
       }
     } else {
       dispatch({ type: GET_CUSTOMERS_ERROR, payload:  response.data.data  });
     }
  })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_CUSTOMERS_ERROR, payload: err.message })
    })
}

// Set loading to true
export const loadingCustomers = () => {
  return {
    type: LOADING_CUSTOMERS
  };
};


export const clearCustomers = () => {
  return {
    type: CLEAR_CUSTOMERS
  };
};

