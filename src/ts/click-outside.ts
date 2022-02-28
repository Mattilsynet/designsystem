/** Dispatch event on click outside of node */
export let buttonId: string
export function clickOutside(node: Node, buttonId: string): {destroy(): void} {
  const handleClick = event => {
    if (!node.contains(event.target) && event.target.id !== buttonId) {
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
