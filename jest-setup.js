// eslint-disable-next-line no-undef
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
)
window.scroll = jest.fn()
