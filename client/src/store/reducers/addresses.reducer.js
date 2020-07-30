import { CLEAR_ADDRESSES, GET_ADDRESSES, GET_ADDRESSES_ERROR, LOADING_ADDRESSES } from '../actions/type'

const initialState = {
    addresses: [],
    customer: undefined,
    loading: false,
    error: ''
}

const addressesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case GET_ADDRESSES:
        return {
          ...state,
          customer: payload.customer, 
          addresses: payload.addresses,
          loading: false,
          error: '',
        }
      case GET_ADDRESSES_ERROR:
          return {
            ...state,
            customer: payload.customer, 
            addresses: [],
            loading: false,
            error: payload.message,
          }
      case LOADING_ADDRESSES:
            return {
              ...state,
              loading: true,
            }
      case CLEAR_ADDRESSES:
          return initialState;
      default :
        return state
    }
}

export default addressesReducer;