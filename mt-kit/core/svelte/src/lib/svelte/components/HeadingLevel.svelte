<script lang="ts">
  type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
  export let headingLevel: HeadingLevel = 1
  let className = ''
  export { className as class }
  let idPassed: string | undefined = undefined
  export { idPassed as id }

  className = getClassName(className, headingLevel)

  function getClassName(className: string, headingLevel: HeadingLevel): string {
    const regExpExecArray = /mt-h[1-6]/g.exec(className)
    return regExpExecArray ? regExpExecArray.input : `mt-h${headingLevel} ${className}`
  }
</script>

{#if headingLevel === 1}
  <h1 id={idPassed} class={className}><slot /></h1>
{:else if headingLevel === 2}
  <h2 id={idPassed} class={className}><slot /></h2>
{:else if headingLevel === 3}
  <h3 id={idPassed} class={className}><slot /></h3>
{:else if headingLevel === 4}
  <h4 id={idPassed} class={className}><slot /></h4>
{:else if headingLevel === 5}
  <h5 id={idPassed} class={className}><slot /></h5>
{:else if headingLevel === 6}
  <h6 id={idPassed} class={className}><slot /></h6>
{:else if headingLevel > 6}
  <h6 id={idPassed} class="mt-h6 {className}"><slot /></h6>
{/if}
