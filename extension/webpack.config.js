const path = require('path')

module.exports = {
  entry: './connect.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}