const root = require('app-root-path').path;

module.exports = {
    entry: __dirname + '/src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: `${root}/dist/assets/js`
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                loader:  "style-loader!css-loader"
            }
        ],

    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}