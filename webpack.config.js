// webpack.config.js

module.exports = {
  // ... other configuration settings ...
  module: {
    rules: [
      // ... your other rules ...
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // Disable optipng in favor of pngquant
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // Enable WEBP conversion
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
};
