const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    attended: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

messageSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('message', messageSchema);
