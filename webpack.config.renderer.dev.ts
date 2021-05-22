import base from './webpack.config.base'
import path from "path"
import merge from 'webpack-merge';
import webpack from "webpack"
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from "copy-webpack-plugin"
export default merge(base, {

    mode: "development",

    target: ["web"],

    entry: {
        app: path.resolve(__dirname, "src/renderer/AppLoader.ts"),
    },

    output: {
        path: path.join(__dirname, "dist/renderer"),
        filename: "[name].[hash].js",
        publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'  // Put css to <style/>
                    },
                    {
                        loader: 'css-loader?modules=true'    // parse css
                    }
                ]
            },

            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)?$/,
                use: {
                    loader: 'url-loader?limit=100000&name=images/[name]_[hash:8].[ext]'
                }
            },
        ]
    },

    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 20_000,
        }
    },

    //@ts-ignore
    devServer: {
        contentBase: path.join(__dirname, 'dist/renderer/'),
        open: false,
        host: "0.0.0.0",
        port: 10310,
        publicPath: "/",
        // hot: true,
        // disableHostCheck: true,
        // watchContentBase: true,
    },


    plugins: [

        new webpack.ProgressPlugin(),

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "./src/renderer/AppPage.html"),
            favicon: path.resolve(__dirname, "./assets/icons/icon.ico"),
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            chunks: ["app"]
        }),

        //@ts-ignore
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./public"),
                    to: path.resolve(__dirname, "./dist/renderer/")
                },
                {
                    from: path.resolve(__dirname, "./assets"),
                    to: path.resolve(__dirname, "./dist/renderer/assets")
                }
            ]
        }),

        // //@ts-ignore
        // new CleanWebpackPlugin.CleanWebpackPlugin(),

        //@ts-ignore
        // new BundleAnalyzerPlugin({
        // 	analyzerMode:"static"
        // }),

        //https://stackoverflow.com/questions/65018431/webpack-5-uncaught-referenceerror-process-is-not-defined
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.jpg', '.png', '.ico', '.gif', '.json']
    }
})