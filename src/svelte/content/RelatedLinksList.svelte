<script lang="ts">
  import {toKebabCase} from '../../ts/utils'

  export let title: string = ''
  export let linkGroups: Array<{title: string; links: Array<{url: string; text: string}>}> = []
  export let leftColClass = ''
  export let rightColClass = ''
</script>

<div class="{leftColClass} layout-flex-col" style="gap: 0" data-testid="left-col">
  <h2>{title}</h2>
</div>
<div class="{rightColClass} layout-flex-col link-group" style="gap: 0" data-testid="right-col">
  {#each linkGroups as group}
    <h3 id={toKebabCase(group.title ?? '')}>{group.title}</h3>
    <ul class="list-unstyled" aria-labelledby={toKebabCase(group.title ?? '')}>
      {#each group.links as link}
        {#if link.url && link.text}
          <li>
            <a href={link.url} class="forward-arrow-end-link">{link.text}</a>
          </li>
        {/if}
      {/each}
    </ul>
  {/each}
</div>

<style lang="scss">
  .link-group > :first-child {
    margin-top: var(--spacer-xx-small);
  }
  ul + h3 {
    margin-top: var(--spacer-medium);
  }
</style>
