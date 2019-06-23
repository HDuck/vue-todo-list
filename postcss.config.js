module.exports = ({ options }) => ({
    parser: 'postcss-scss',
    plugins: {
        stylelint: {},
        'postcss-easy-import': {},
        precss: {},
        'postcss-preset-env': {
            'custom-properties': {},
        },
        autoprefixer: { browsers: 'last 2 versions' },
        cssnano: options.mode === 'production' ? { preset: 'default' } : false,
    },
});
