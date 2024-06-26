// 'use strict';

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = (config, webpack) => {
//   // Customize the entry point
//   config.entry = './src/index.js'; // Adjust if your entry point is different

//   // Customize the output
//   config.output = {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'main.[contenthash].js',
//     publicPath: '/', // Ensure paths do not include '/admin'
//   };

//   // Add necessary loaders
//   config.module.rules.push(
//     {
//       test: /\.js$/,
//       exclude: /node_modules/,
//       use: {
//         loader: 'babel-loader',
//       },
//     },
//     {
//       test: /\.css$/,
//       use: ['style-loader', 'css-loader'],
//     }
//   );

//   // Customize plugins
//   config.plugins.push(
//     new HtmlWebpackPlugin({
//       template: '/build/index_template.html',
//       filename: 'index_template.html',
//     })
//   );

//   // Customize devServer if needed
//   config.devServer = {
//     contentBase: path.join(__dirname, 'build'),
//     compress: true,
//     port: 9000,
//     historyApiFallback: true, // Enable history API fallback for single-page applications
//   };

//   return config;
// };

'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (config, webpack) => {
  // Customize the output path and filename
  config.output = {
    ...config.output,
    path: path.resolve(__dirname, '../../build'), // Set the output path to the root build directory
    publicPath: '/', // Ensure paths do not include '/admin'
  };

  // Iterate over plugins to find HtmlWebpackPlugin and customize it
  config.plugins.forEach((plugin) => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      // Modify options to remove '/admin' from script paths
      plugin.options = {
        ...plugin.options,
        filename: 'index.html',
        publicPath: '/',
      };
    }
  });

  return config;
};
