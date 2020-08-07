const HTMLPlugin = require('html-webpack-plugin');
const BundlePlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.jsx',

  output: {
    filename: '[hash].js'
  },

  module: {
    rules: [
      // Tell Webpack how to handle .JSX file
      {
        test: /\.jsx/,
        loader: 'babel-loader'
      },
      // Tell Webpack how to handle .scss files
      {
        test: /\.scss/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jpg/,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            // options: {
            //   mozjpeg: {
            //     progressive: true,
            //     quality: 10 // Kills computer
            //   }
            // }
          }
        ]
      }
    ]
  },

  plugins: [
    new HTMLPlugin({
      template: './src/index.html'
    }),
    new BundlePlugin({
      analyzerMode: 'static'
    })
  ]
}
