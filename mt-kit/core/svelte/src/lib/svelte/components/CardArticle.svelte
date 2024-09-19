<script lang="ts">
  import HeadingLevel from './HeadingLevel.svelte'
  import { mapRelExternal } from '../../ts/utils'

  export let headingId: string
  export let title: string
  export let intro: string | undefined
  export let text: string | undefined
  export let linkUrl: string | undefined
  export let linkText: string | undefined
  export let type: 'task' | 'form-intro-module' | 'legal-text' | 'highlighted-link' | '' = ''
  export let headerTag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined = 'h3' // Fallback is h3
  export let iconClass: 'info-icon' | 'warning-icon' | 'task-icon' | '' =
    type === 'task' ? 'task-icon' : ''
</script>

<article class={type} aria-labelledby={headingId}>
  <HeadingLevel
    id={headingId}
    class="title {iconClass} {headerTag === 'h2' ? 'mt-h3' : ''}"
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
    <a href={linkUrl} rel={mapRelExternal(linkUrl)} class="mt-link link--transport">
      {@html linkText}
    </a>
  {/if}
</article>
