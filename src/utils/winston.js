const winston = require("winston");

// Define the transport to write logs in a text file
const fileTransport = new winston.transports.File({
  filename: "logs/combined.log",
  level: "info", // Level log: info, warning, error, etc.
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
});

// Define the transport to write logs in a text file
const errorTransport = new winston.transports.File({
  filename: "logs/error.log",
  level: "error", // Only capture logs at 'error' level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
});

// Create the logger and add the transport
const logger = winston.createLogger({
  transports: [fileTransport, errorTransport],
});

module.exports = logger;
