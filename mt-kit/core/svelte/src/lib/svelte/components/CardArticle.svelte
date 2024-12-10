<script lang="ts">
  import HeadingLevel from './HeadingLevel.svelte'
  import { mapRelExternal } from '../../ts/utils'

  interface Props {
    headingId: string
    title: string
    intro: string | undefined
    text: string | undefined
    linkUrl: string | undefined
    linkText: string | undefined
    type?: 'task' | 'form-intro-module' | 'legal-text' | 'highlighted-link' | ''
    class?: string
    headerTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined // Fallback is h3
    iconClass?: 'info-icon' | 'warning-icon' | 'task-icon' | ''
  }

  let {
    headingId,
    title,
    intro,
    text,
    linkUrl,
    linkText,
    type = '',
    class: className = '',
    headerTag = 'h3',
    iconClass = type === 'task' ? 'task-icon' : ''
  }: Props = $props()
</script>

<article class="{type} {className}" aria-labelledby={headingId}>
  <HeadingLevel
    id={headingId}
    class="title {iconClass} {headerTag === 'h2' ? 'mt-h3' : ''}"
    headingLevel={+headerTag.charAt(1)}
  >
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
    <p>
      <a href={linkUrl} rel={mapRelExternal(linkUrl)} class="mt-link link--transport">
        {@html linkText}
      </a>
    </p>
  {/if}
</article>
