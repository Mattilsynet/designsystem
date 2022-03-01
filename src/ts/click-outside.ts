export let buttonId: string
export function clickOutside(node: HTMLInputElement, buttonId: string): {destroy(): void} {
  const handleClick = (event: Event): void => {
    if (
      event &&
      event.target &&
      !node.contains(event.target as Node) &&
      event.target.id !== buttonId
    ) {
      node.dispatchEvent(new CustomEvent('clickOutside'))
    }
  }

  document.addEventListener('click', handleClick, true)

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true)
    }
  }
}
