import type {Action} from './types'

export const countCharacters: Action<HTMLInputElement | HTMLTextAreaElement> = (
  node,
  params: {
    countCharacters: boolean
    countCharactersLeftLabel: string
    countCharactersTooManyLabel: string
    maxlength: number
    id: string
  } = {
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
  counterElVisible.setAttribute('aria-hidden', 'true')
  counterElHidden.classList.add('display-none')
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
    } else {
      counterElVisible.innerText = `${countCharactersLeft} ${charactersLeft}`
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
