import {
  createInputAriaDescribedby,
  getFileExtension,
  interpolate,
  mapRelExternal,
  detectMobileOrTablet
} from './utils'

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
    const error = { key: name, message: errorMessage }
    const res = createInputAriaDescribedby(name, error, maxLength)
    expect(res).toEqual('input-name-maxlength input-name-hint input-name-error')
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
    expect(res).toEqual('input-name-maxlength input-name-hint')
  })
})

describe('detectMobileOrTablet', () => {
  const mobile = [
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/122.0.6261.62 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/123.0 Mobile/15E148 Safari/605.1.15',
    'Mozilla/5.0 (iPad; CPU OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.64 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 14; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.64 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 14; SM-A102U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.64 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 14; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.64 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 14; SM-N960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.64 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 14; LM-Q720) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.64 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 14; LM-X420) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.64 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 14; LM-Q710(FGN)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.64 Mobile Safari/537.36',
    'Mozilla/5.0 (Android 14; Mobile; rv:68.0) Gecko/68.0 Firefox/123.0',
    'Mozilla/5.0 (Android 14; Mobile; LG-M255; rv:123.0) Gecko/123.0 Firefox/123.0'
  ]

  mobile.forEach(agent => {
    test(`Detect mobile agent ${agent}`, () => {
      const t = detectMobileOrTablet(agent)
      expect(t).toEqual(true)
    })
  })

  const desktop = [
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_3_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/121.0.2277.128',
    'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Vivaldi/6.5.3206.63',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Vivaldi/6.5.3206.63'
  ]
  desktop.forEach(agent => {
    test(`Detect desktop agent ${agent}`, () => {
      const t = detectMobileOrTablet(agent)
      expect(t).toEqual(false)
    })
  })
})
