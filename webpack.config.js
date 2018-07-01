const webpack = require('webpack')

const config = {
  devtool: 'source-map',
  module: {
    rules: [
     {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'postcss-loader']
     }
    ]
  },
  externals: {
    'stellar-sdk': 'StellarSdk'
  }
}

const main = Object.assign({}, config, {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'main.js',
    library: 'lib',
    libraryTarget: 'var'
  }
})

const worker = Object.assign({}, config, {
  entry: './src/worker.js',
  output: {
    path: __dirname,
    filename: 'worker.js',
  }
})

module.exports = [ main, worker ]
