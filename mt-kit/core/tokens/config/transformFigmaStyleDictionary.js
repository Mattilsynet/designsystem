const {transformTokens} = require('token-transformer')

const rawTokens = {
  setA: {
    sizing: {
      base: {
        value: '4',
        description: 'Alias value',
        type: 'sizing'
      },
      large: {
        value: '$sizing.base * 2',
        description: 'Math value',
        type: 'sizing'
      }
    },
    fontfamily: {
      value: 'Helvetica',
      type: 'fontFamilies'
    },
    Light: {
      value: 'Light',
      type: 'fontWeights'
    },
    normalLineHeight: {
      value: '150%',
      type: 'lineHeights'
    },
    paragraph: {
      value: '16',
      type: 'fontSizes'
    },
    fontXlarge: {
      value: '$paragraph * 2.6',
      type: 'fontSizes'
    },
    normalLetterSpacing: {
      value: '0%',
      type: 'letterSpacing'
    },
    paragraphIndent: {
      value: '0',
      type: 'asset'
    },
    normalCase: {
      value: 'none',
      type: 'textCase'
    },
    noTextDecoration: {
      value: 'none',
      type: 'textDecoration'
    },
    h1: {
      value: {
        fontFamily: '{setA.fontfamily}',
        // fontWeight: '{setA.Light}',
        // lineHeight: '{setA.normalLineHeight}',
        // fontSize: '{setA.fontXlarge}',
        // letterSpacing: '{setA.normalLetterSpacing}',
        // paragraphSpacing: '{setA.normalParagraphSpacing}',
        // paragraphIndent: '{setA.paragraphIndent}',
        // textCase: '{setA.normalCase}',
        // textDecoration: '{setA.noTextDecoration}'
      },
      type: 'typography'
    }
  }
}

const setsToUse = ['setA']
const excludes = []

const transformerOptions = {
  expandTypography: true,
  expandShadow: true,
  expandComposition: true,
  expandBorder: true,
  preserveRawValue: false,
  throwErrorWhenNotResolved: true,
  resolveReferences: true
}

const resolved = transformTokens(rawTokens, setsToUse, excludes, transformerOptions)
console.log('resolved', resolved)
