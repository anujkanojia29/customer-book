const API_PATH= '/api/v1';

exports.CUSTOMERS_PATH = `${API_PATH}/customers`;
exports.GET_ADDRESS_ROUTE = `/:id/address`;

exports.SAMPLE_DATA = require('../../../data/customers.json')