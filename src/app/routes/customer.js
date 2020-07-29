const express = require('express');
const { GET_ADDRESS_ROUTE } = require('../helpers/constants')
const {
  getAddress,
  getCustomers
} = require('../controllers/customers');

const router = express.Router();

router.get('', getCustomers);
router.get(GET_ADDRESS_ROUTE, getAddress);


module.exports = router;
