export function focusOutside(node: HTMLElement, callBack: () => void): { destroy(): void } {
  function handleFocusIn(event: Event): void {
    if (event && event.target && !node.contains(document.activeElement)) {
      callBack()
    }
  }
  document.addEventListener('focusin', handleFocusIn)

  return {
    destroy: (): void => {
      document.removeEventListener('focusin', handleFocusIn)
    }
  }
}
