const { SAMPLE_DATA } = require("../helpers/constants");
const asyncHandler = require("../middleware/async");

exports.getCustomers = asyncHandler(async (req, res, next) => {
    const result = SAMPLE_DATA.map(customer => {
        return {
            id: customer.id,
            name: customer.name,
            age: customer.age,
            gender: customer.gender
        };
    });
    res.status(200).json({
        success: true,
        data: result
    });
});

exports.getAddress = asyncHandler(async (req, res, next) => {
    const customer = SAMPLE_DATA.find(customer => customer.id == req.params.id);
    if (!customer) {
      return next(
        new ErrorResponse(`Customer not found`, 404)
      );
    }
    res.status(200).json({
        success: true,
        data: customer.addresses
    });
});
