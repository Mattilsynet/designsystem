<script lang="ts">
  import type { Snippet } from 'svelte'

  type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

  interface Props {
    headingLevel?: HeadingLevel
    class?: string
    id?: string
    children?: Snippet
  }

  let { headingLevel = 1, class: classProp = '', id: idPassed, children }: Props = $props()

  let className = $derived(getClassName(classProp, headingLevel))

  function getClassName(className: string, headingLevel: HeadingLevel): string {
    const regExpExecArray = /mt-h[1-6]/g.exec(className)
    return regExpExecArray ? regExpExecArray.input : `mt-h${headingLevel} ${className}`
  }
</script>

{#if headingLevel === 1}
  <h1 id={idPassed} class={className}>{@render children?.()}</h1>
{:else if headingLevel === 2}
  <h2 id={idPassed} class={className}>{@render children?.()}</h2>
{:else if headingLevel === 3}
  <h3 id={idPassed} class={className}>{@render children?.()}</h3>
{:else if headingLevel === 4}
  <h4 id={idPassed} class={className}>{@render children?.()}</h4>
{:else if headingLevel === 5}
  <h5 id={idPassed} class={className}>{@render children?.()}</h5>
{:else if headingLevel === 6}
  <h6 id={idPassed} class={className}>{@render children?.()}</h6>
{:else if headingLevel > 6}
  <h6 id={idPassed} class="mt-h6 {className}">{@render children?.()}</h6>
{/if}
