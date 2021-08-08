const { message } = require('../models');

class Messages {
  async getMessages(req, res, next) {
    try {
      const data = await message.find().sort('-createdAt');

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async createMessage(req, res, next) {
    try {
      let data = await message.create(req.body);
      data = await message.find().sort('-createdAt');

      // Socket io
      req.io.emit('message', data);

      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Messages();
