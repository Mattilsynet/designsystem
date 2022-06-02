/**
 * @jest-environment jsdom
 */

import {getFileExtension, mapRelExternal} from './utils'

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
    const res = mapRelExternal('http://www.mattilsynet.no')
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
