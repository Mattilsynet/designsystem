<script lang="ts">
  import {mapRelExternal} from '../../ts/utils'
  import HeadingLevel from '../components/HeadingLevel.svelte'

  export let title = ''
  export let headerTag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h3'
  export let menuPoints = []
</script>

<div class="menu-points" data-testid="menu-points">
  <h2 class="m-t-xxs">{@html title}</h2>
  <div class="layout-grid layout-grid--column-3 " style="--gap:var(--spacer-small);">
    {#each menuPoints as menuPoint, index}
      <div class="menu-point layout-flex-col layout-flex-col--x-small">
        <div class="menu-point--title">
          <div class="menu-point--icon">
            {#if menuPoint.iconResource}
              {@html menuPoint.iconResource}
            {:else if menuPoint.icon}
              <img src={menuPoint.icon} alt="" data-testid="img-icon" />
            {/if}
          </div>
          <a
            href={menuPoint.url}
            rel={mapRelExternal(menuPoint.url)}
            class="animated-header-arrow-after no-underline hover-indent flex"
            data-testid="menupoints-link">
            <HeadingLevel class={headerTag} headingLevel={+headerTag.charAt(1)}>
              {@html menuPoint.title}
            </HeadingLevel>
          </a>
        </div>
        <p>
          {@html menuPoint.keywords && menuPoint.keywords.length > 0
            ? menuPoint.keywords
            : '[Legg til stikkord på innholdet]'}
        </p>
      </div>
    {/each}
  </div>
</div>
