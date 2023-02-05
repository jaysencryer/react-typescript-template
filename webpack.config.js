const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
});


module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: [/\.(js|jsx)$/, /test\.js$/],
                resolve: {
                    extensions: [".js", ".jsx"],
                },
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.png$/,

                loader: "file-loader",

                options: {
                    names: "[path][name].[hash].[ext]",
                },
            },
        ],
    },
    plugins: [htmlPlugin],
};
