<script lang="ts">
  export let headingId: string;
  export let title: string;
  export let intro: string | undefined;
  export let text: string | undefined;
  export let linkUrl: string | undefined;
  export let linkText: string | undefined;
  export let type: 'task' | 'form-intro' | 'legal-text' | '' = '';
</script>

<article class={type} aria-labelledby={headingId}>
  <h3 id={headingId} class="title">{title}</h3>

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
