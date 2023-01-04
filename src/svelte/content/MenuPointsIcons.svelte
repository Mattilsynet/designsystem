<script lang="ts">
  import {mapRelExternal, toKebabCase} from '../../ts/utils'

  export let ariaLabelledBy: string
  export let headerTag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h3'
  export let menuPoints = []
</script>

<ul
  aria-labelledby={ariaLabelledBy}
  class="list-unstyled no-space-top layout-grid layout-grid--column-3 m-t-0"
  style="--gap:var(--spacer-medium);" data-testid="menu-points">
  {#each menuPoints as menuPoint, index}
    <li class="menu-point">
        {#if menuPoint.iconResource}
          {@html menuPoint.iconResource}
        {:else if menuPoint.icon}
          <img src={menuPoint.icon} alt="" aria-hidden="true" data-testid="img-icon" />
        {/if}
        <a
          href={menuPoint.url}
          rel={mapRelExternal(menuPoint.url)}
          class="animated-header-arrow-after no-underline hover-indent flex {headerTag}"
          aria-describedby={toKebabCase(menuPoint.keywords || `menuPoint-${index}`)}
          data-testid="menupoints-link">
          {@html menuPoint.text}
        </a>
      <p id={toKebabCase(menuPoint.keywords)}>
        {@html menuPoint.keywords && menuPoint.keywords.length > 0
          ? menuPoint.keywords
          : '[Legg til stikkord på innholdet]'}
      </p>
    </li>
  {/each}
</ul>
