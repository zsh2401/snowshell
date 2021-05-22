import mainDevConfig from './webpack.config.main.dev'
import merge from 'webpack-merge';
export default merge(mainDevConfig, {
    mode: "production"
})