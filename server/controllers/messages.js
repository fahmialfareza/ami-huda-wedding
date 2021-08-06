const { message } = require('../models');

class Messages {
  async getMessages(req, res, next) {
    try {
      const data = await message.find();

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async createMessage(req, res, next) {
    try {
      const data = await message.create(req.body);

      // Socket io

      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Messages();
