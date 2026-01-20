const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const RemarkHTML = require("remark-html");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                ["@babel/preset-react", { "runtime": "automatic" }],
                                "@babel/preset-typescript",
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                    {
                        loader: "remark-loader",
                        options: {
                            remarkOptions: {
                                plugins: [RemarkHTML],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "public",
                    to: ".",
                    globOptions: {
                        ignore: ["**/index.html"],
                    },
                },
            ],
        }),
    ],
    devServer: {
        static: "./public",
        hot: true,
        historyApiFallback: true,
        port: 3001,
        open: true,
    },
    mode: "development",
    watch: process.env.NODE_ENV !== 'production' && !process.env.CI,
    watchOptions: {
        ignored: /node_modules/,
    }
};
