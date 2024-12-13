export function focusOutside(node: HTMLElement, buttonId: string): { destroy(): void } {
  function handleFocusIn(event: Event): void {
    if (
      event &&
      event.target &&
      !node.contains(document.activeElement) &&
      event.target.id !== buttonId
    ) {
      node.dispatchEvent(new CustomEvent('focusOutside'))
    }
  }

  document.addEventListener('focusin', handleFocusIn)

  return {
    destroy: (): void => {
      document.removeEventListener('focusin', handleFocusIn)
    }
  }
}
