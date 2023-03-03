const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

// Set app
const app = express();

// Set data json
app.use(express.json());

// Set security HTTP headers
app.use(helmet());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// 2 handler
const roomRouter = require("./routes/roomRoutes");

// 3 routers
app.use("/api/rooms", roomRouter);

// 4 server
module.exports = app;
