module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-px-to-viewport': {
            viewportWidth: 750,
            minPixelValue: 1,
            unitPrecision: 3,
            selectorBlackList: ['.ignore', '.hairlines'],
            mediaQuery: false,
            exclude: [/node_modules/]
        }
    }
}
