const path = require('path')

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.join(__dirname, "app/temp/scripts"),
//    path: "./app/temp/scripts",
//	  path: path.join('/Users/SJ/sinogry', "./app/temp/scripts"),
    filename: "[name].js"
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/   // to only apply to JavaScript and nothing else
      }
    ]
  }
}
