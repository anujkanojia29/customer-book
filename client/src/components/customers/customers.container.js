import { connect } from 'react-redux';
import Customers from './customers';

import { getCustomers, loadingCustomers } from '../../store/actions/customers';
import { getAddresses, loadingAddresses } from '../../store/actions/addresses';

const mapStateToProps = state => ({
    customers: state.customers.customers,
    loading: state.customers.loading,
    error: state.customers.error
});

export default connect(
    mapStateToProps,
    { getCustomers, getAddresses, loadingAddresses, loadingCustomers}
)(Customers);
