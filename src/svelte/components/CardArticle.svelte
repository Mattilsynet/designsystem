<script lang="ts">
  import HeadingLevel from './HeadingLevel.svelte'
  import {mapRelExternal} from '../../ts/utils'

  export let headingId: string
  export let title: string
  export let intro: string | undefined
  export let text: string | undefined
  export let linkUrl: string | undefined
  export let linkText: string | undefined
  export let type: 'task' | 'form-intro-module' | 'legal-text' | '' = ''
  export let headerTag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h3' // Fallback is h3
</script>

<article class={type} aria-labelledby={headingId}>
  <HeadingLevel
    id={headingId}
    class="title {headerTag === 'h2' ? 'h3' : ''}"
    headingLevel={+headerTag.charAt(1)}>
    {@html title}
  </HeadingLevel>

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
    <a href={linkUrl} rel={mapRelExternal(linkUrl)} class="button button--primary self-start">
      {linkText}
    </a>
  {/if}
</article>
