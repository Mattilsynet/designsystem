import type { Action, CountCharsParams, ErrorDetail } from './types'

export function errorOnTooManyCharacters(
  e: InputEvent,
  countCharsParams: CountCharsParams,
  name: string,
  errorText: string
): ErrorDetail | undefined {
  if (!countCharsParams.countCharacters) {
    return
  }
  if (countCharsParams.maxlength < (e.target as HTMLInputElement).value.length) {
    return { key: name, message: errorText }
  } else {
    return
  }
}

export const countCharacters: Action<HTMLInputElement | HTMLTextAreaElement> = (
  node,
  params: CountCharsParams = {
    countCharacters: false,
    countCharactersLeftLabel: 'tegn igjen',
    countCharactersTooManyLabel: 'tegn for mange',
    maxlength: 100,
    id: ''
  }
) => {
  const charactersTooMany = params.countCharactersTooManyLabel ?? 'tegn for mange'
  const charactersLeft = params.countCharactersLeftLabel ?? 'tegn igjen'
  const counterElVisible = document.createElement('div')
  const counterElHidden = document.createElement('div')
  counterElVisible.classList.add('self-end')
  counterElVisible.classList.add('text-small')
  counterElVisible.classList.add('count-character')
  counterElVisible.setAttribute('aria-hidden', 'true')
  counterElHidden.classList.add('inclusively-hidden')
  counterElHidden.setAttribute('aria-live', 'polite')

  if (params.id) {
    counterElHidden.setAttribute('id', `${params.id}-maxlength`)
  }

  let timeout: number
  function updateCounter() {
    clearTimeout(timeout)
    const countCharactersLeft = params.maxlength - node.value.length
    if (countCharactersLeft < 0) {
      counterElVisible.innerText = `${-countCharactersLeft} ${charactersTooMany}`
      counterElVisible.classList.add('color-error')
    } else {
      counterElVisible.innerText = `${countCharactersLeft} ${charactersLeft}`
      counterElVisible.classList.remove('color-error')
    }
    timeout = setTimeout(() => {
      counterElHidden.innerText = `${counterElVisible.innerText}.`
    }, 1000)
  }

  if (params.countCharacters) {
    updateCounter()
    node.after(counterElVisible)
    node.after(counterElHidden)
    node.addEventListener('input', updateCounter)
    return {
      destroy() {
        node.removeEventListener('input', updateCounter)
      }
    }
  }

  return
}
