import { connect } from 'react-redux';
import Addresses from './addresses';

const mapStateToProps = state => ({
    addresses: state.addresses.addresses,
    customer: state.addresses.customer,
    loading: state.addresses.loading,
    error: state.addresses.error
});

export default connect(
    mapStateToProps,
    null
)(Addresses);
