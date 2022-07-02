const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: ['./src/index.jsx'],
  devtool: 'inline-source-map',
  mode: 'development',
  output: {filename: 'bundle.js', publicPath: ''},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{loader: 'babel-loader', options: {
          presets: ['@babel/preset-env', '@babel/react'],
        }}],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'example', template: './src/index.html'}),
  ],
}
