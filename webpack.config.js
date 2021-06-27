const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"], // 확장자 설정
  },
  entry: {
    app: ["./client"],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"), // __dirname = 현재경로,
    filename: "app.js",
  }, // 출력
};
