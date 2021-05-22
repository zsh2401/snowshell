import rendererDevConfig from './webpack.config.renderer.dev'
import merge from 'webpack-merge';
export default merge(rendererDevConfig, {
    mode: "production"
})