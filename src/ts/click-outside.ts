/** Dispatch event on click outside of node */
export function clickOutside(node: Node) {
  const handleClick = event => {
    if (!node.contains(event.target)) {
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
