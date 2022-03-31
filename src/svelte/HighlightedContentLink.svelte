<script lang="ts">
  let url = ''
  let className = ''
  export {url as href}
  export {className as class}
  export let image: {src: string; alt: string | undefined} | undefined = undefined
  export let lang = 'NO-nb'
  export let heading: string | undefined
  export let isExternal = false
  export let headingClass = ''
  export let headerTag: 'h2' | 'h3' = 'h2'
</script>

<a
  href={url}
  class="hightlighted-content {className}"
  rel={isExternal ? 'external' : undefined}
  data-testid="hightlighted-content-link">
  {#if image && image.src}
    <img src={image.src} alt={image.alt} />
  {/if}
  <span class="layout-flex layout-flex-col highlighted-text" style="gap:0">
    {#if heading}
      {#if headerTag === 'h2'}
        <h2 class={`heading ${headingClass}`}>
          {heading}
        </h2>
      {:else}
        <h3 class={`heading ${headingClass}`}>
          {heading}
        </h3>
      {/if}
    {/if}
    <slot />
  </span>
</a>
