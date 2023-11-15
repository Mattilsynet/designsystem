<script lang="ts">
  import Disclosure from '../components/Disclosure.svelte'
  import { mapRelExternal } from '../../ts/utils'
  interface MenuItem {
    title: string
    contentTitle?: string
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
  export let titleId
  export let loadJs = true
</script>

<ol class="mt-ol m-t-xxs menu menu--icon border col-1-span-8" aria-labelledby={titleId}>
  {#each itemsLeft as item}
    {#if item.children && item.children.length > 0}
      <li>
        <Disclosure
          title={item.contentTitle ? item.contentTitle : item.title}
          theme="no-border"
          class="on-primary"
          headerClass="menu-level-1"
          {loadJs}
          icon={item.iconResource}>
          <ol class="mt-ol m-t-xxs sub-menu">
            <li class="menu-level-2">
              <a
                href={item.url}
                rel={item.url === '/dyr' ? 'external' : mapRelExternal(item.url)}
                class="forward-arrow-small on-primary no-underline hover-indent"
                aria-current={item.isActive ? 'page' : false}>
                {item.title}
              </a>
            </li>
            {#each item.children || [] as child}
              <li class="menu-level-3">
                <a
                  href={child.url}
                  rel={mapRelExternal(child.url)}
                  class="forward-arrow-small no-underline hover-indent on-primary small-link"
                  aria-current={child.isActive ? 'page' : false}>
                  {child.title}
                </a>
              </li>
            {/each}
          </ol>
        </Disclosure>
      </li>
    {:else}
      <li class="disclosure disclosure-no-border on-primary">
        <a
          href={item.url}
          rel={mapRelExternal(item.url)}
          class="disclosure-header no-underline hover-indent layout-flex layout-flex--center-vertical layout-full-width on-primary menu-level-1 border-radius-0"
          aria-current={item.isActive ? 'page' : false}>
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
  <ol class="mt-ol m-t-xxs menu border col-10-span-3">
    {#each itemsRight as right}
      <li>
        <a
          href={right.url}
          rel={mapRelExternal(right.url)}
          class="no-underline hover-indent on-primary menu-level-1 p-r-xxs forward-arrow-end border-radius-0 small-link"
          aria-current={right.isActive ? 'page' : false}>
          {right.title}
        </a>
      </li>
    {/each}
  </ol>
{/if}
{#if itemsBottom}
  <ol class="mt-ol col-1-span-8 menu-row m-t-s p-lr-0 no-space-between">
    {#each itemsBottom as bottom}
      <li class="m-t-0">
        <a
          href={bottom.url}
          rel={mapRelExternal(bottom.url)}
          class="mt-link layout-flex layout-flex--center-vertical on-primary icon--arrow-forward-x-small-after"
          aria-current={bottom.isActive ? 'page' : false}
          style="gap: var(--spacer-xxx-small)">
          {#if bottom.iconResource}
            {@html bottom.iconResource}
          {/if}
          {bottom.title}
        </a>
      </li>
    {/each}
  </ol>
{/if}
