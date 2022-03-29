/**
 * @jest-environment jsdom
 */

import {getFileExtension} from './utils'

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
