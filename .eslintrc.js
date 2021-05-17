module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, //Allows for parsing of modern ECMA Script features
        sourceType: 'module', // Allows for the use of imports
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'eslint-config-prettier',
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. this will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {},
};
