import {combineReducers} from 'redux';
import customersReducer from './customers.reducer';
import addressesReducer from './addresses.reducer';

export default combineReducers({
  customers: customersReducer,
  addresses: addressesReducer
})