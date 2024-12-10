<script lang="ts">
  import { mapRelExternal, toKebabCase } from '../../ts/utils'
  import type { MenuPoint } from '$lib/ts'
  import HeadingLevel from '../components/HeadingLevel.svelte'

  interface Props {
    ariaLabelledBy: string;
    headerTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    menuPoints?: Array<MenuPoint>;
  }

  let { ariaLabelledBy, headerTag = 'h3', menuPoints = [] }: Props = $props();
</script>

<ul
  aria-labelledby={ariaLabelledBy}
  class="mt-ul list-unstyled no-space-top layout-grid layout-grid--column-3 m-t-0"
  style="--gap:var(--spacer-medium);"
  data-testid="menu-points">
  {#each menuPoints as menuPoint, index}
    <li>
      <a
        href={menuPoint.url}
        rel={mapRelExternal(menuPoint.url)}
        class="menu-point border-radius p-xs"
        aria-describedby={menuPoint.keywords ? toKebabCase(menuPoint.keywords) : ''}
        data-testid="menupoints-link">
        {#if menuPoint.iconResource}
          <div class="svg-wrapper" aria-hidden="true">
            {@html menuPoint.iconResource}
          </div>
        {:else if menuPoint.icon}
          <img
            src={menuPoint.icon}
            alt=""
            class="mt-img"
            aria-hidden="true"
            data-testid="img-icon" />
        {/if}
        <HeadingLevel class="mt-h3 menu-point-heading" headingLevel={+headerTag.charAt(1)}
          >{@html menuPoint.text}</HeadingLevel>

        {#if menuPoint.keywords}
          <p id={toKebabCase(menuPoint.keywords)}>
            {@html menuPoint.keywords}
          </p>
        {/if}
      </a>
    </li>
  {/each}
</ul>
