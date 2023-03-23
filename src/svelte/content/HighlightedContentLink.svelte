<script lang="ts">
  import HeadingLevel from '../components/HeadingLevel.svelte'
  import {mapRelExternal} from '../../ts/utils'

  let url = ''
  let className = ''
  export {url as href}
  export {className as class}
  export let image: {src: string; alt: string | undefined} | undefined = undefined
  export let lang = 'NO-nb'
  export let title: string | undefined
  export let shortTitle: string | undefined
  export let displayType: HighlightedContentDisplayType | undefined
  export let headingClass = ''
  export let headerTag: 'h2' | 'h3' = 'h2'

  type HighlightedContentDisplayType = 'white' | 'blue'
</script>

{#if displayType === 'blue'}
  <div
    class="col-1-span-12 layout-flex layout-flex-col border-radius p-xs bg-lighter-light-blue"
    data-testid="highlighted-content-link-blue">
    <HeadingLevel class="heading {headingClass}" headingLevel={+headerTag.charAt(1)}>
      {title}
    </HeadingLevel>
    <slot />
    <a
      href={url}
      rel={mapRelExternal(url)}
      class="link--transport color--primary forward-arrow-end no-underline fit-content"
      data-testid="highlighted-content-link">
      {shortTitle}
    </a>
  </div>
{:else}
  <a
    href={url}
    rel={mapRelExternal(url)}
    class="highlighted-content {className}"
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
