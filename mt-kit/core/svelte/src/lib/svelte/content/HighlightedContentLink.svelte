<script lang="ts">
  import HeadingLevel from '../components/HeadingLevel.svelte'
  import { mapRelExternal } from '$lib/ts'
  import type { Snippet } from 'svelte'

  interface Props {
    href?: string
    class?: string
    image?: { src: string; alt: string | undefined }
    title?: string
    shortTitle?: string
    displayType?: HighlightedContentDisplayType
    headingClass?: string
    headerTag?: 'h2' | 'h3'
    children?: Snippet
  }

  let {
    href: url = '',
    class: className = '',
    image,
    title,
    shortTitle,
    displayType,
    headingClass = '',
    headerTag = 'h2',
    children
  }: Props = $props()

  type HighlightedContentDisplayType = 'normal' | 'cta' | 'campaign' | 'blue' | 'white'
</script>

{#if displayType === 'cta' || displayType === 'blue'}
  <a
    href={url}
    rel={mapRelExternal(url)}
    class="mt-link col-1-span-12 layout-flex layout-flex-col box-border-radius-br-l highlighted-content highlighted-content--{displayType}"
    data-testid="highlighted-content-link">
    <HeadingLevel class="heading {headingClass}" headingLevel={+headerTag.charAt(1)}>
      {title}
    </HeadingLevel>
    {@render children?.()}
  </a>
{:else if displayType === 'campaign'}
  <a
    href={url}
    rel={mapRelExternal(url)}
    class="mt-link box-border-radius-br-l highlighted-content highlighted-content--{displayType} {className}">
    <span class="col-1-span-5 layout-flex layout-flex-col highlighted-text">
      {#if shortTitle}
        <HeadingLevel class="heading {headingClass}" headingLevel={+headerTag.charAt(1)}>
          {shortTitle}
        </HeadingLevel>
      {/if}
      {@render children?.()}
    </span>
    {#if image && image.src}
      <img src={image.src} alt={image.alt} class="col-7-span-6" />
    {/if}
  </a>
{:else}
  <a
    href={url}
    rel={mapRelExternal(url)}
    class="mt-link highlighted-content border-radius {className}"
    data-testid="highlighted-content-link">
    {#if image && image.src}
      <img src={image.src} alt={image.alt} class="mt-img" />
    {/if}
    <span class="layout-flex layout-flex-col highlighted-text" style="gap:0">
      {#if shortTitle}
        <HeadingLevel class="heading {headingClass}" headingLevel={+headerTag.charAt(1)}>
          {shortTitle}
        </HeadingLevel>
      {/if}
      {@render children?.()}
    </span>
  </a>
{/if}
