<script lang="ts">
  export let headingId: string
  export let title: string
  export let intro: string | undefined
  export let text: string | undefined
  export let linkUrl: string | undefined
  export let linkText: string | undefined
  export let type: 'task' | 'form-intro-module' | 'legal-text' | '' = ''
  export let headerTag: 'h2' | 'h4' | 'h3' = 'h3' // Fallback is h3
</script>

<article class={type} aria-labelledby={headingId}>
  {#if headerTag === 'h2'}
    <h2 id={headingId} class="title h3">{@html title}</h2>
  {:else if headerTag === 'h4'}
    <h4 id={headingId} class="title h4">{@html title}</h4>
  {:else}
    <h3 id={headingId} class="title">{@html title}</h3>
  {/if}

  {#if intro}
    <div class="intro">
      {@html intro}
    </div>
  {/if}

  {#if text}
    <div class="text">
      {@html text}
    </div>
  {/if}

  {#if linkUrl && linkText}
    <a href={linkUrl} class="button button--primary self-start">
      {linkText}
    </a>
  {/if}
</article>
