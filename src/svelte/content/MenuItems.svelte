<script lang="ts">
  import Disclosure from '../Disclosure.svelte'
  interface MenuItem {
    title: string
    path: string
    isActive: string
    hasChildren: boolean
    url: string
    type: string
    children: Array<MenuItem>
    iconResource?: string
  }

  export let itemsLeft: Array<MenuItem> = []
  export let itemsRight: Array<MenuItem> = []
  export let itemsBottom: Array<MenuItem> = []
  export let splitColLimit = 5
  export let titleId
  export let loadJs = true

  function addRelExternal(url: string): 'external' | undefined {
    return url?.startsWith('http') ? 'external' : undefined
  }
</script>

<ol class="menu border col-1-span-8" aria-labelledby={titleId}>
  {#each itemsLeft as item}
    {#if item.children && item.children.length > 0}
      <li>
        <Disclosure
          title={item.title}
          theme="no-border"
          class="on-primary"
          headerClass="p-tb-xxs"
          {loadJs}
          icon={item.iconResource}>
          <a
            href={item.url}
            rel={addRelExternal(item.url)}
            class="forward-arrow-small on-primary no-underline hover-indent {item.isActive
              ? 'is-active'
              : ''}">{item.title}</a>
          <ol class="sub-menu {item.children.length > splitColLimit ? 'split-long' : ''}">
            {#each item.children || [] as child}
              <li>
                <a
                  href={child.url}
                  rel={addRelExternal(child.url)}
                  class="forward-arrow-small no-underline hover-indent on-primary {child.isActive
                    ? 'is-active'
                    : ''}">
                  {child.title}
                </a>
              </li>
            {/each}
          </ol>
        </Disclosure>
      </li>
    {:else}
      <li class="disclosure disclosure-no-border">
        <a
          href={item.url}
          rel={addRelExternal(item.url)}
          class="disclosure-header no-underline hover-indent layout-flex layout-flex--center-vertical layout-full-width on-primary p-tb-xxs border-radius-0 {item.isActive
            ? 'is-active'
            : ''} "
          style="gap: var(--spacer-xx-small)">
          {#if item.iconResource}
            {@html item.iconResource}
          {/if}
          {item.title}
        </a>
      </li>
    {/if}
  {/each}
</ol>
{#if itemsRight}
  <ol class="menu border col-10-span-3">
    {#each itemsRight as right}
      <li>
        <a
          href={right.url}
          rel={addRelExternal(right.url)}
          class="no-underline hover-indent layout-flex layout-flex--space-between layout-flex--center-vertical layout-full-width on-primary p-tb-xxs p-r-xxs forward-arrow-end border-radius-0 {right.isActive
            ? 'is-active'
            : ''}">
          {right.title}
        </a>
      </li>
    {/each}
  </ol>
{/if}
{#if itemsBottom}
  <ol class="col-1-span-8 menu-row m-t-m p-lr-0">
    {#each itemsBottom as bottom}
      <li class="m-t-0">
        <a
          href={bottom.url}
          rel={addRelExternal(bottom.url)}
          class="layout-flex layout-flex--center-vertical on-primary {bottom.isActive
            ? 'is-active'
            : ''}"
          style="gap: var(--spacer-xx-small)">
          {#if bottom.iconResource}
            {@html bottom.iconResource}
          {/if}
          {bottom.title}
        </a>
      </li>
    {/each}
  </ol>
{/if}
