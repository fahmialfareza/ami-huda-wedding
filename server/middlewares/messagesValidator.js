const validator = require('validator');

exports.createMessageValidator = async (req, res, next) => {
  try {
    const errorMessages = [];

    if (!req.body.name) {
      errorMessages.push('Nama harus diisi!');
    }

    if (!validator.isBoolean(req.body.attended)) {
      errorMessages.push('Kehadiran harus diisi!');
    }

    if (!req.body.message) {
      errorMessage.push('Pesan harus diisi!');
    }

    if (errorMessages.length > 0) {
      return next({ messages: errorMessages, statusCode: 400 });
    }

    next();
  } catch (error) {
    next(error);
  }
};
