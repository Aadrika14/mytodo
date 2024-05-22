const mongoose = require('mongoose');
require("dotenv").config();

const connection = mongoose.connect(process.env.mongoUrl);
const path = require('path');
module.exports = {connection,
    // other configuration settings
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
  }
};
