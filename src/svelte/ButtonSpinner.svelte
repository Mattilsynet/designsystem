<script lang="ts">
  export let formInProgressAriaLabel = ''
  export let color: 'primary' | 'secondary' = 'primary'
  export let spinnerPlacement: 'start' | 'end' = 'end'

  let inProgress = false
  let formInProgressLabel = ''
  let colorClass = color === 'primary' ? 'button--primary' : 'button--secondary'

  function setInProgress(e){
    if(inProgress){
      e.preventDefault()
    } else {
      inProgress = true
      e.target.blur()
      formInProgressLabel = formInProgressAriaLabel
      e.target.focus()
    }
  }
</script>

<button on:click={setInProgress} class="button button--spinner {colorClass}" aria-label={formInProgressLabel} >
  {#if inProgress && spinnerPlacement === 'start'}
    <span class="spinner spinner--start"/>
  {/if}
  <slot/>
  {#if inProgress && spinnerPlacement === 'end'}
    <span class="spinner spinner--end"/>
  {/if}
</button>
