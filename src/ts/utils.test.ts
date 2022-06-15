/**
 * @jest-environment jsdom
 */

import {getFileExtension, interpolate, mapRelExternal} from './utils'

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
