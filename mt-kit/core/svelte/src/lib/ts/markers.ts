const successMarkerColor = '#539D82'

export const markers = {
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="55" fill="none"><path fill="#fff" stroke="#054" d="M6.803 7.03c8.395-8.707 22-8.707 30.394 0 8.404 8.717 8.404 22.857 0 31.574L22 54.282 6.803 38.604C-1.6 29.888-1.6 15.747 6.803 7.03Z"/><circle cx="22" cy="22" r="18" fill="#4F3521"/><path fill="#fff" d="M20.2 27.4h3.6V31h-3.6v-3.6Zm0-14.4h3.6v10.8h-3.6V13Z"/></svg>',
  success: `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="55" fill="none"><path fill="#fff" stroke="#054" d="M6.803 7.03c8.395-8.707 22-8.707 30.394 0 8.404 8.717 8.404 22.857 0 31.574L22 54.282 6.803 38.604C-1.6 29.888-1.6 15.747 6.803 7.03Z"/><circle cx="22" cy="22" r="18" fill="${successMarkerColor}"/><path fill="#fff" d="M14.978 20.404 12.5 23.283l8.212 6.314L31.5 18.378l-2.608-2.292-8.162 9.003-5.752-4.685Z"/></svg>`,
  neutral:
    '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="55" fill="none"><path fill="#fff" stroke="#054" d="M6.803 7.03c8.395-8.707 22-8.707 30.394 0 8.404 8.717 8.404 22.857 0 31.574L22 54.282 6.803 38.604C-1.6 29.888-1.6 15.747 6.803 7.03Z"/><circle cx="22" cy="22" r="18" fill="#9ECCED"/><path fill="#054449" d="M23.8 17.77V31h-3.6V17.77h3.6Zm0-4.77v3.192h-3.6V13h3.6Z"/></svg>',
  warning:
    '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="55" fill="none"><path fill="#fff" stroke="#054" d="M6.803 7.03c8.395-8.707 22-8.707 30.394 0 8.404 8.717 8.404 22.857 0 31.574L22 54.282 6.803 38.604C-1.6 29.888-1.6 15.747 6.803 7.03Z"/><circle cx="22" cy="22" r="18" fill="#F1BE3C"/><path fill="#054449" d="M20.2 27.4h3.6V31h-3.6v-3.6Zm0-14.4h3.6v10.8h-3.6V13Z"/></svg>',
  danger:
    '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="55" fill="none"><path fill="#fff" stroke="#054" d="M6.803 7.03c8.395-8.707 22-8.707 30.394 0 8.404 8.717 8.404 22.857 0 31.574L22 54.282 6.803 38.604C-1.6 29.888-1.6 15.747 6.803 7.03Z"/><circle cx="22" cy="22" r="18" fill="#92301C"/><g clip-path="url(#a)"><path fill="#fff" d="M29.2 16.6 23.8 22l5.4 5.4-1.8 1.8-5.4-5.4-5.4 5.4-1.8-1.8 5.4-5.4-5.4-5.4 1.8-1.8 5.4 5.4 5.4-5.4 1.8 1.8Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M14.8 14.8h14.4v14.4H14.8z"/></clipPath></defs></svg>',
  default:
    '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="55" fill="none"><path fill="#054449" d="M37.557 6.683c-8.591-8.91-22.523-8.91-31.114 0-8.59 8.91-8.59 23.358 0 32.268L22 55l15.557-16.049c8.59-8.91 8.59-23.358 0-32.268Z"/></svg>',
  cluster: {
    default:
      '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none"><circle cx="22" cy="22" r="21.5" fill="#fff" stroke="#054449"/><circle cx="22" cy="22" r="18" fill="#4F3521"/><path fill="#fff" d="M23.8 17.77V31h-3.6V17.77h3.6Zm0-4.77v3.192h-3.6V13h3.6Z"/></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="55" fill="none"><circle cx="22" cy="22" r="21.5" fill="#fff" stroke="#054449"/><circle cx="22" cy="22" r="18" fill="#4F3521"/><path fill="#fff" d="M20.2 27.4h3.6V31h-3.6v-3.6Zm0-14.4h3.6v10.8h-3.6V13Z"/></svg>',
    success: `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none"><circle cx="22" cy="22" r="21.5" fill="#fff" stroke="#054449"/><circle cx="22" cy="22" r="18" fill="${successMarkerColor}"/><path fill="#fff" d="M14.978 20.404 12.5 23.283l8.212 6.314L31.5 18.378l-2.608-2.292-8.162 9.003-5.752-4.685Z"/></svg>`,
    neutral:
      '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none"><circle cx="22" cy="22" r="21.5" fill="#fff" stroke="#054449"/><circle cx="22" cy="22" r="18" fill="#9ECCED"/><path fill="#054449" d="M23.8 17.77V31h-3.6V17.77h3.6Zm0-4.77v3.192h-3.6V13h3.6Z"/></svg>',
    warning:
      '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none"><circle cx="22" cy="22" r="21.5" fill="#fff" stroke="#054449"/><circle cx="22" cy="22" r="18" fill="#F1BE3C"/><path fill="#054449" d="M20.2 27.4h3.6V31h-3.6v-3.6Zm0-14.4h3.6v10.8h-3.6V13Z"/></svg>',
    danger:
      '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none"><circle cx="22" cy="22" r="21.5" fill="#fff" stroke="#054449"/><circle cx="22" cy="22" r="18" fill="#92301C"/><g clip-path="url(#a)"><path fill="#fff" d="M29.2 16.6 23.8 22l5.4 5.4-1.8 1.8-5.4-5.4-5.4 5.4-1.8-1.8 5.4-5.4-5.4-5.4 1.8-1.8 5.4 5.4 5.4-5.4 1.8 1.8Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M14.8 14.8h14.4v14.4H14.8z"/></clipPath></defs></svg>'
  },
  icon: {
    geolocation:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none"><path id="tracker-icon" fill="#054449" d="M14.946 11.027A3.942 3.942 0 0 1 11 14.966a3.95 3.95 0 0 1-3.946-3.94A3.95 3.95 0 0 1 11 7.087a3.95 3.95 0 0 1 3.946 3.94Zm7.043 1.059h-2.704c-.478 3.76-3.47 6.736-7.235 7.224V22H9.93v-2.69c-3.766-.477-6.747-3.464-7.235-7.224H0V9.967h2.705c.477-3.76 3.469-6.736 7.234-7.224V0h2.122v2.743c3.765.477 6.746 3.464 7.234 7.224H22v2.119h-.01Zm-4.752-1.06c0-3.442-2.8-6.238-6.248-6.238-3.447 0-6.247 2.796-6.247 6.239 0 3.442 2.8 6.238 6.247 6.238 3.448 0 6.248-2.796 6.248-6.239Z"/></svg>'
  }
}
