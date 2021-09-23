module.exports = {
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "configFile": "./babel.config.js"
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest/globals": true
    },
    "extends": ["eslint:recommended", "google"],
    "rules": {
        'semi': 'off',
        'comma-dangle': 'off',
        'require-jsdoc': 'off',
        'no-trailing-spaces': 'off',
        'indent': 'off',
        'quotes': 'off',
        'linebreak-style': 'off',
        'eol-last': 'off',
        'no-debugger': 'off',
        'object-curly-spacing': 'off',
        'arrow-parens': 'off',
        'operator-linebreak': 'off'
    },
    "plugins": ["jest"]
}