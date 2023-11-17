<script lang="ts">
  import HeadingLevel from '../components/HeadingLevel.svelte'
  import { mapRelExternal } from '../../ts/utils'

  let url = ''
  let className = ''
  export { url as href }
  export { className as class }
  export let image: { src: string; alt: string | undefined } | undefined = undefined
  export let lang = 'NO-nb'
  export let title: string | undefined
  export let shortTitle: string | undefined
  export let displayType: HighlightedContentDisplayType | undefined
  export let headingClass = ''
  export let headerTag: 'h2' | 'h3' = 'h2'

  type HighlightedContentDisplayType = 'white' | 'blue' | 'promotion'
</script>

{#if displayType === 'blue'}
  <a
    href={url}
    rel={mapRelExternal(url)}
    class="mt-link col-1-span-12 layout-flex layout-flex-col border-radius highlighted-content highlighted-content--{displayType}"
    data-testid="highlighted-content-link">
    <HeadingLevel
      class="heading {headingClass} icon--forward-arrow-after"
      headingLevel={+headerTag.charAt(1)}>
      {title}
    </HeadingLevel>
    <slot />
  </a>
{:else if displayType === 'promotion'}
  <a
    href={url}
    rel={mapRelExternal(url)}
    class="mt-link highlighted-content highlighted-content--{displayType} {className}">
    <span class="col-1-span-5 layout-flex layout-flex-col highlighted-text">
      {#if shortTitle}
        <HeadingLevel class="heading {headingClass}" headingLevel={+headerTag.charAt(1)}>
          {shortTitle}
        </HeadingLevel>
      {/if}
      <slot />
    </span>
    {#if image && image.src}
      <img src={image.src} alt={image.alt} class="col-7-span-6" />
    {/if}
  </a>
{:else}
  <a
    href={url}
    rel={mapRelExternal(url)}
    class="mt-link highlighted-content {className}"
    data-testid="highlighted-content-link">
    {#if image && image.src}
      <img src={image.src} alt={image.alt} />
    {/if}
    <span class="layout-flex layout-flex-col highlighted-text" style="gap:0">
      {#if shortTitle}
        <HeadingLevel class="heading {headingClass}" headingLevel={+headerTag.charAt(1)}>
          {shortTitle}
        </HeadingLevel>
      {/if}
      <slot />
    </span>
  </a>
{/if}
