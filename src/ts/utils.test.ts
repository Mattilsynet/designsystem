/**
 * @jest-environment jsdom
 */

import {createInputAriaDescribedby, getFileExtension, interpolate, mapRelExternal} from './utils'

describe('getFileExtension', () => {
  test('Get file extension', () => {
    const res = getFileExtension('test.pdf')
    expect(res).toEqual('PDF')
  })

  test('Get file extension - no extension', () => {
    const res = getFileExtension('testWithoutExtention')
    expect(res).toEqual(null)
  })
})

describe('mapRelExternal', () => {
  test('Returns external when url is external', () => {
    const res = mapRelExternal('https://www.mattilsynet.no')
    expect(res).toEqual('external')
  })
  test('Returns undefined when url is relative', () => {
    const res = mapRelExternal('/varsle')
    expect(res).toEqual(undefined)
  })
  test('Returns undefined when url is undefined', () => {
    const res = mapRelExternal()
    expect(res).toEqual(undefined)
  })
})

describe('interpolate', () => {
  test('Inserts strings into string', () => {
    const res = interpolate('{0}, {1} av {2}', ['Test', '2', '4'])
    expect(res).toEqual('Test, 2 av 4')
  })

  test('Inserts strings into string - missing replacers', () => {
    const res = interpolate('{0}, {1} av {2}', ['Test'])
    expect(res).toEqual('Test, {1} av {2}')
  })

  test('Inserts strings into string - wrong index', () => {
    const res = interpolate('{1}, {2} av {3}', ['Test', '2', '4'])
    expect(res).toEqual('2, 4 av {3}')
  })
})

describe('createInputAriaDescribedby', () => {
  test('Creates full described by', () => {
    const maxLength = 300
    const name = 'input-name'
    const errorMessage = 'This is the error'
    const error = {key: name, message: errorMessage}
    const res = createInputAriaDescribedby(name, error, maxLength)
    expect(res).toEqual('input-name-hint input-name-error input-name-maxlength')
  })

  test('Creates described when no hint, error, maxlength', () => {
    const res = createInputAriaDescribedby(undefined, undefined, undefined)
    expect(res).toBeUndefined()
  })

  test('Creates described by with hint', () => {
    const name = 'input-name'
    const res = createInputAriaDescribedby(name, undefined, undefined)
    expect(res).toEqual('input-name-hint')
  })

  test('Creates described by with hint and max length', () => {
    const maxLength = 300
    const name = 'input-name'
    const res = createInputAriaDescribedby(name, undefined, maxLength)
    expect(res).toEqual('input-name-hint input-name-maxlength')
  })
})
