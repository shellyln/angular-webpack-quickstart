var path = require('path');
var webpack = require('webpack');


module.exports = function (env) { return [

    // [Browser-single-js-file]: Packing a library Javascript file.
    {
        entry: (env && env.env === 'test') ? void 0 : {
            // TODO: YOU SHOULD REPLACE THE LIBRARY OUTPUT NAME!
            main: [
                path.resolve(__dirname, 'node_modules/zone.js/dist/zone.js'),
                path.resolve(__dirname, 'src/main.ts')
            ]
        },
        // TODO: YOU SHOULD MODIFY PATTERN OF EXTERNAL MODULES!
        // If you call "require()" with passing modules paths matched to following pattern,
        // "require()" will be resolved runtime.
        //externals: /^(fs)$/,
        output: (env && env.env === 'test') ? void 0 : {
            // TODO: YOU SHOULD REPLACE THE LIBRARY NAME!
            library: 'Quickstart',

            libraryTarget: 'amd',
            filename: process.env.NODE_ENV === 'production' ? '[name].js' : '[name].js',
            path: path.resolve(__dirname, 'src'),
            devtoolModuleFilenameTemplate: process.env.NODE_ENV === 'production' ? '[resource-path]' : void 0
        },
        target: "web",
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader?' + JSON.stringify({
                    configFileName: 'tsconfig-webpack-dist.json'
                })],

                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                // exclude 'node_module' directory except myself (refered from other packages)
                exclude: /node_modules[\/\\](?!(webpack-typescript-lib-quickstart)|(zone.js)).*$/
            }, {
                test: /\.jsx?$/,
                use: ['babel-loader'],

                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                // exclude 'node_module' directory except myself (refered from other packages)
                exclude: /node_modules[\/\\](?!(webpack-typescript-lib-quickstart)|(zone.js)).*$/
            }, {
                enforce: 'pre',
                test: /\.[tj]sx?$/,
                use: ['source-map-loader']
            }, {
                test: /\.html?(\?.+)?$/,
                use: ['html-loader']
            }, {
                test: /\.(css|scss)$/,
                use: [
                    'to-string-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('postcss-custom-properties')(),
                                require('postcss-nested')(),
                                require('autoprefixer')({ browsers: ['last 2 versions'] })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.(jpg|jpeg|png|ttf|otf|eot|svg|woff2?)(\?.+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        devServer: {
            contentBase: [
                path.resolve(__dirname, "src"),
                path.resolve(__dirname, "node_modules")
            ],
            publicPath: "/",
            compress: true,
            port: 8080
        },
        devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map'
    }

]}
