<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'
</script>

<Meta
  title="Visual Style/Utils"
  args={{
    disableCss: false
  }}
  argTypes={{
    disableCss: { control: 'boolean' }
  }} />
<Story name="All" >
  {#snippet children({ disableCss })}
    <div use:wrapInShadowDom={disableCss} class="layout-flex-col">
      <h1>Utils</h1>
      <h2>Box border radius</h2>
      <article class="background-mt-white box-border-radius-br-l p-s">
        <h3 class="border-b-secondary m-b-xxs">This is an article</h3>
        <p>class:box-border-radius</p>
        <p>
          class proin eirmod aperiri libris ubique dui vestibulum mediocritatem imperdiet saepe
          dapibus euripidis qui potenti omnesque sem vix vituperatoribus non vix dictum petentium
          bibendum mauris deseruisse antiopam vivamus eloquentiam inceptos senserit mediocritatem
          lacus mentitum consectetur natoque duis massa iriure conubia vim feugait simul integer amet
          nobis persecuti phasellus finibus dictumst posuere diam menandri fames fuisset facilisis
          ocurreret sem prodesset dicunt justo homero equidem magnis dolores intellegat hendrerit sumo
          habeo elaboraret accusata placerat omnesque sagittis duo veritus option felis aperiri velit
          aliquip inimicus quidam mediocritatem delenit eloquentiam definitionem suspendisse id mauris
          dolor utinam utamur alia eripuit quod gloriatur solet adversarium referrentur
        </p>
      </article>
      <article class="background-mt-white box-border-radius-br-l p-s m-t-xs">
        <h3 class="border-b-secondary m-b-xxs">This is an article</h3>
        <p>class:box-border-radius</p>
      </article>
    </div>
  {/snippet}
</Story>
