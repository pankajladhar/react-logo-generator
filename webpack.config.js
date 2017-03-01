module.exports = {

    entry: {
        '/app/index': __dirname + "/app/index.js"
    },

    output: {
        path: __dirname,
        filename: "/app/bundle.js"
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            "plugins": ["transform-react-jsx"],
            query: { presets: ['es2015', 'react', 'airbnb'] }
        }]
    }
};