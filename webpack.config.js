const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    // input
    entry: ["@babel/polyfill", "./src/index.js"],

    // output
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        library: "__ckeditor__"
    },

    // transformations
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            camelCase: true,
                            minimize: true,
                            namedExport: true,
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '🤙[hash:base64:10]',
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                exclude: [
                    /ckeditor/
                ],
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            camelCase: true,
                            minimize: true,
                            namedExport: true,
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '🤙[hash:base64:10]',
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: /ckeditor/,
                use: ["ignore-loader"]
            },
            {
                test: /\.jsx?/i,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-proposal-object-rest-spread",
                        "@babel/plugin-transform-react-jsx"
                    ]
                }
            },
            {
                test: /\.json$/,
                loader: "file-loader",
                type: "javascript/auto"
            },
            {
                test: /\.svg$/,
                loader: "svg-inline-loader"
            }
        ]
    },

    // server
    // devServer: {
    //     contentBase: path.join(__dirname, "src"),
    //     compress: false,
    //     historyApiFallback: true
    // },

    plugins: [
        // new CKEditorWebpackPlugin({
        //     language: "en",
        // }),
        new CopyWebpackPlugin([
            {
                from: "src/index.html",
                to: "index.html"
            }
        ]),
    ]
};
