import { CLEAR_CUSTOMERS, GET_CUSTOMERS, GET_CUSTOMERS_ERROR, LOADING_CUSTOMERS } from '../actions/type'

const initialState = {
    customers: [],
    loading: false,
    error: ''
}

const customersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case GET_CUSTOMERS:
        return {
          ...state,
          customers: payload, 
          loading: false,
          error: '',
        }
      case GET_CUSTOMERS_ERROR:
          return {
            ...state,
            customers: [], 
            loading: false,
            error: payload,
          }
      case LOADING_CUSTOMERS:
            return {
              ...state,
              loading: true,
            }
      case CLEAR_CUSTOMERS:
          return initialState;
      default :
        return state
    }
}

export default customersReducer;