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

  interface Props {
    itemsLeft?: Array<MenuItem>
    itemsRight?: Array<MenuItem>
    itemsBottom?: Array<MenuItem>
    titleId: any
    loadJs?: boolean
  }

  let {
    itemsLeft = [],
    itemsRight = [],
    itemsBottom = [],
    titleId,
    loadJs = true
  }: Props = $props()
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
          icon={item.iconResource}
        >
          <ol class="mt-ol m-t-xxs sub-menu">
            <li class="menu-level-2">
              <a
                href={item.url}
                rel={item.url === '/dyr' ? 'external' : mapRelExternal(item.url)}
                class="mt-link forward-arrow"
                aria-current={item.isActive ? 'page' : false}
              >
                {item.title}
              </a>
            </li>
            {#each item.children || [] as child}
              <li class="menu-level-3">
                <a
                  href={child.url}
                  rel={mapRelExternal(child.url)}
                  class="mt-link forward-arrow small-link"
                  aria-current={child.isActive ? 'page' : false}
                >
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
          class="mt-link menu-level-1"
          aria-current={item.isActive ? 'page' : false}
        >
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
          class="mt-link menu-level-1 forward-arrow"
          aria-current={right.isActive ? 'page' : false}
        >
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
          class="mt-link layout-flex layout-flex--center-vertical on-primary forward-arrow"
          aria-current={bottom.isActive ? 'page' : false}
          style="gap: var(--spacer-xxx-small)"
        >
          {#if bottom.iconResource}
            {@html bottom.iconResource}
          {/if}
          {bottom.title}
        </a>
      </li>
    {/each}
  </ol>
{/if}
