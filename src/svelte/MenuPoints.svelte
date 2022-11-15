<script lang="ts">
  import {mapRelExternal} from '../ts/utils'

  export let title = ''
  export let menuPoints = []
</script>

<div class="layout-flex-col" style="--gap:var(--spacer-medium)">
  <h2 class="col-1-span-12">{@html title ? title : ''}</h2>
  <div
    class="layout-grid layout-grid--column-3 container row-gap"
    style="--space-section:var(--spacer-medium)">
    {#each menuPoints as menuPoint, index}
      <div
        class="layout-grid layout-grid--column-12 row-gap"
        style="--space-section:var(--spacer-xx-small)">
        {#if menuPoint.icon}
          <img src={menuPoint.icon} alt="#" />
        {/if}
        <a
          href={menuPoint.url}
          rel={mapRelExternal(menuPoint.url)}
          class="forward-arrow-end-link col-2-span-10">{menuPoint.displayName}</a>
        <p class="col-2-span-10">
          {@html menuPoint.keywords ? menuPoint.keywords : menuPoint.intro ?? ''}
        </p>
      </div>
    {/each}
  </div>
</div>
