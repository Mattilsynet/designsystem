<script lang="ts">
  import HeadingLevel from './HeadingLevel.svelte'

  let url = ''
  let className = ''
  export {url as href}
  export {className as class}
  export let image: {src: string; alt: string | undefined} | undefined = undefined
  export let lang = 'NO-nb'
  export let title: string | undefined
  export let shortTitle: string | undefined
  export let displayType: highlightedContentDisplayType | undefined
  export let isExternal = false
  export let headingClass = ''
  export let headerTag: 'h2' | 'h3' = 'h2'

  type highlightedContentDisplayType = 'white' | 'blue'
</script>

{#if displayType === 'blue'}
  <div class="col-1-span-12 layout-flex layout-flex-col border-radius p-xs bg-lighter-light-blue">
    <HeadingLevel class="heading {headingClass}" headingLevel={+headerTag.charAt(1)}>
      {title}
    </HeadingLevel>
    <slot />
    <a
      href={url}
      class="button button--primary button--space-between forward-arrow-end padded"
      rel={isExternal ? 'external' : undefined}
      data-testid="hightlighted-content-link">
      {shortTitle}
    </a>
  </div>
{:else}
  <a
    href={url}
    class="hightlighted-content {className}"
    rel={isExternal ? 'external' : undefined}
    data-testid="hightlighted-content-link">
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
