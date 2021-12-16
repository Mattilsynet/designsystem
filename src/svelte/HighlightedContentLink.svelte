<script lang="ts">
  let url = '';
  let className = '';
  export {url as href};
  export {className as class};
  export let image: {src: string; alt: string | undefined} | undefined = undefined;
  export let lang = 'nb-NO';
  export let heading: string | undefined;
  export let headingClass: string = '';
</script>

<a href={url} class="hightlighted-content {className}">
  {#if image.src}
    <img src={image.src} alt={image.alt} />
  {/if}
  <div class="layout-flex layout-flex-col highlighted-text" style="gap:0">
    {#if heading}
      <h3 class={`heading ${headingClass}`}>
        {heading}
      </h3>
    {/if}
    <slot />
  </div>
</a>
