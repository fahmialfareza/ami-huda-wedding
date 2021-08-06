const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err.message));

exports.message = require('./message');
