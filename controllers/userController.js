const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllUsers = catchAsync(async function (request, response) {
  const users = await User.find();

  response.status(200).json({
    status: 'success',
    results: users.length,
    data: { users },
  });
});

exports.createUser = function (request, response) {
  response.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

exports.getUser = function (request, response) {
  response.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

exports.updateUser = function (request, response) {
  response.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

exports.deleteUser = function (request, response) {
  response.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
