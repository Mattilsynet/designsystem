<script lang="ts">
  import {mapRelExternal} from '../ts/utils'
  import HeadingLevel from './HeadingLevel.svelte'

  export let title = ''
  export let headerTag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h3'
  export let menuPoints = []
</script>

<div class="menu-points">
  <h2 class="m-t-xxs">{@html title}</h2>
  <div
    class="layout-grid layout-grid--column-3 row-gap"
    style="--space-section:var(--spacer-medium)">
    {#each menuPoints as menuPoint, index}
      <div class="menu-point layout-flex-col layout-flex-col--x-small">
        <div class="menu-point--title">
          <div class="menu-point--icon">
            {#if menuPoint.iconResource}
              {@html menuPoint.iconResource}
            {:else if menuPoint.icon}
              <img src={menuPoint.icon} alt="" />
            {/if}
          </div>
          <a
            href={menuPoint.url}
            rel={mapRelExternal(menuPoint.url)}
            class="animated-header-arrow-after no-underline flex">
            <HeadingLevel class={headerTag} headingLevel={+headerTag.charAt(1)}>
              {menuPoint.displayName}
            </HeadingLevel>
          </a>
        </div>
        <p class="menu-point--keywords">
          {@html menuPoint.keywords ? menuPoint.keywords : menuPoint.intro}
        </p>
      </div>
    {/each}
  </div>
</div>
