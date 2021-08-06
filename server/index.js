require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const path = require('path');
const fs = require('fs');
const http = require('http');
const express = require('express');
const next = require('next');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Import error handler
  const errorHandler = require('./middlewares/errorHandler.js');

  // Import routes
  const messageRoutes = require('./routes/messages');

  const server = express();

  const httpServer = require('http').createServer(server);
  const options = {
    /* ... */
  };
  const io = require('socket.io')(httpServer, options);

  io.on('connection', (socket) => {
    /* ... */
  });

  // CORS
  server.use(cors());

  // Body Parser
  server.use(express.json());
  server.use(
    express.urlencoded({
      extended: true,
    })
  );

  // Sanitize data
  server.use(mongoSanitize());

  // Prevent XSS attact
  server.use(xss());

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 min
    max: 600,
  });

  server.use(limiter);

  // Prevent http param pollution
  server.use(hpp());

  // Use helmet
  server.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );

  if (process.env.NODE_ENV === 'development') {
    server.use(morgan('dev'));
  } else {
    // create a write stream (in serverend mode)
    let accessLogStream = fs.createWriteStream(
      path.join(__dirname, 'access.log'),
      {
        flags: 'a',
      }
    );

    // setup the logger
    server.use(morgan('combined', { stream: accessLogStream }));
  }

  // Use static files
  server.use(express.static('public'));

  // Routes
  server.use('/api/messages', messageRoutes);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.use(errorHandler);

  httpServer.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
