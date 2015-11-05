module.exports = {
  prefix: 'babel-plugin-',
  names: [
    {
      prefix: 'syntax-',
      names: [
        'jsx',
        'async-functions',
        'decorators',
        'exponentiation-operator',
        'function-bind',
        'object-rest-spread'
      ]
    },
    'dedent',
    {
      prefix: 'transform-',
      names: [
        'react-jsx',
        'strict-mode',
        'async-to-generator',
        'decorators',
        'exponentiation-operator',
        'function-bind',
        'object-rest-spread',
        {
          prefix: 'es2015-',
          names: [
            'template-literals',
            'literals',
            'function-name',
            'arrow-functions',
            'block-scoped-functions',
            'classes',
            'object-super',
            'shorthand-properties',
            'computed-properties',
            'for-of',
            'sticky-regex',
            'unicode-regex',
            'constants',
            'spread',
            'parameters',
            'destructuring',
            'block-scoping',
            'typeof-symbol',
            'modules-commonjs'
          ]
        },
        'regenerator'
      ]
    }
  ]
}
