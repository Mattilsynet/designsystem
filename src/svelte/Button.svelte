<script lang="ts">
  export let progressIndicator = false
  let inProgress = false
  let formInProgressLabel = ''

  function setInProgress(e){
    if(progressIndicator && inProgress){
      e.preventDefault()
    } else {
      inProgress = true
      e.target.blur()
      formInProgressLabel = 'Sender inn skjema, venter på svar'
      e.target.focus()
    }
  }
</script>

<button on:click={setInProgress} class="button button--primary self-start" aria-label={formInProgressLabel} >
  <slot/>
  {#if progressIndicator && inProgress}
    <span class="spinner"/>
  {/if}
</button>
