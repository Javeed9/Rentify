const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

require('dotenv').config();

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'app.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new webpack.EnvironmentPlugin(['PORT', 'MONGO_URL', 'JWT_SECRET_KEY', 'JWT_EXPIRES_IN']),
  ],
};