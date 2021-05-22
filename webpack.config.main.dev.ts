import base from './webpack.config.base'
import path from "path"
import merge from 'webpack-merge';
export default merge(base, {
    mode: "development",
    entry: path.resolve(__dirname, "src/main/index.ts"),
    target: "electron-main",
    output: {
        path: path.join(__dirname, "dist/main"),
        filename: "main.js"
    }
})