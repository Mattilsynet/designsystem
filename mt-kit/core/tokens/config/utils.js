function toKebabCase(text){
  return text
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/ /g, '-')
    .toLowerCase()
}

module.exports = {
  toKebabCase
}
