<script lang="ts">
  import HeadingLevel from './HeadingLevel.svelte'

  let className = ''
  export { className as class }

  export let labelledBy: string
  export let listOfDescriptionLists: Record<string, unknown>[] = []
  export let descriptionValuesToUseAsTitle: string[] = []
  export let titleSeparator: string = ' - '
  export let noValueAriaLabel: string = 'No value'
  export let headerTag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2'
</script>

<ul class="mt-ul list-unstyled {className}" aria-labelledby={labelledBy}>
  {#each listOfDescriptionLists as descriptionList, i}
    {@const id = labelledBy + i}
    <li class="description-list m-b-s background-mt-white">
      <HeadingLevel {id} class="mt-h3 p-xs bg-furu" headingLevel={+headerTag.charAt(1)}>
        {descriptionValuesToUseAsTitle?.map(d => descriptionList[d] || '')?.join(titleSeparator) ||
          i + 1}
      </HeadingLevel>
      <dl class="mt-dl custom-borders p-xs" aria-describedby={id}>
        {#each Object.entries(descriptionList) as [description, value], i}
          <dt class="mt-dt text" class:border-top={i}>
            {description}
          </dt>
          <dd class="mt-dd text" aria-label={value || noValueAriaLabel}>{value || '–'}</dd>
        {/each}
      </dl>
    </li>
  {/each}
</ul>
