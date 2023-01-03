<script lang="ts">
  import {mapRelExternal, toKebabCase} from '../../ts/utils'

  export let ariaLabelledBy: string
  export let headerTag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h3'
  export let menuPoints = []
</script>

<div
  aria-labelledby={ariaLabelledBy}
  class="layout-grid layout-grid--column-3"
  style="--gap:var(--spacer-medium);">
  {#each menuPoints as menuPoint, index}
    <div class="menu-point layout-flex-col layout-flex-col--x-small">
      <div class="menu-point--title">
        <div class="menu-point--icon" aria-hidden="true">
          {#if menuPoint.iconResource}
            {@html menuPoint.iconResource}
          {:else if menuPoint.icon}
            <img src={menuPoint.icon} alt="" data-testid="img-icon" />
          {/if}
        </div>
        <a
          href={menuPoint.url}
          rel={mapRelExternal(menuPoint.url)}
          class="animated-header-arrow-after no-underline hover-indent flex {headerTag}"
          aria-describedby={toKebabCase(menuPoint.keywords || `menuPoint-${index}`)}
          data-testid="menupoints-link">
          {@html menuPoint.title}
        </a>
      </div>
      <p id={toKebabCase(menuPoint.keywords || `menuPoint-${index}`)}>
        {@html menuPoint.keywords && menuPoint.keywords.length > 0
          ? menuPoint.keywords
          : '[Legg til stikkord på innholdet]'}
      </p>
    </div>
  {/each}
</div>
