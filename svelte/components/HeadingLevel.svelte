<script>export let headingLevel = 1;
let className = "";
export { className as class };
let idPassed = void 0;
export { idPassed as id };
$: {
  className = getClassName(className, headingLevel);
}
function getClassName(className2, headingLevel2) {
  const regExpExecArray = /mt-h[1-6]/g.exec(className2);
  return regExpExecArray ? regExpExecArray.input : `mt-h${headingLevel2} ${className2}`;
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
