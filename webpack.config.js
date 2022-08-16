const path = require('path');

module.exports = {
	mode: 'development',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    entry: './src/app.ts',
    // 出力先の設定
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist',
        clean: {
            keep: /index.html/, // index.html をキープ（削除しない）
        },
    },
	devtool: 'source-map',
	// dev Serverの設定
	devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        }
    },
	module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
	resolve: {
        extensions: [".ts", ".js"],
    },
}