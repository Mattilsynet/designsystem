<script lang="ts">
  import {displayDataTime} from '../ts/utils';

  let url = '';
  let className = '';
  export {url as href};
  export {className as class};
  export let image: {src: string; alt: string | undefined} | undefined = undefined;
  export let lang = 'nb-NO';
  export let date: string | undefined;
  export let heading: string | undefined;
  export let headingClass: string = '';

  $: displayDate = displayDataTime(lang, date);
</script>

<a href={url} class="hightlighted-content {className}">
  {#if image}
    <img src={image.src} alt={image.alt} />
  {/if}
  <div class="layout-flex layout-flex-col highlighted-text" style="gap:0">
    {#if date}
      <time class="text-small" datetime={date}>{displayDate}</time>
    {/if}
    {#if heading}
      <h3 class={`heading ${headingClass}`}>
        {heading}
      </h3>
    {/if}
    <slot />
  </div>
</a>
