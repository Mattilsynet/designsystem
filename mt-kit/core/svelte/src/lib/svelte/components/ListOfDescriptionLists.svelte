<script lang="ts">
  import HeadingLevel from './HeadingLevel.svelte'

  interface Props {
    class?: string
    labelledBy: string
    listOfDescriptionLists?: Record<string, unknown>[]
    descriptionKeysToUseInTitle?: { descriptionKey: string; prefix?: string }[]
    titleSeparator?: string
    noValueAriaLabel?: string
    headerTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }

  let {
    class: className = '',
    labelledBy,
    listOfDescriptionLists = [],
    descriptionKeysToUseInTitle = [],
    titleSeparator = ' - ',
    noValueAriaLabel = 'No value',
    headerTag = 'h2'
  }: Props = $props()
</script>

<ul class="mt-ul list-unstyled {className}" aria-labelledby={labelledBy}>
  {#each listOfDescriptionLists as descriptionList, i}
    {@const id = labelledBy + i}
    <li class="description-list m-b-s background-mt-white">
      <HeadingLevel
        {id}
        class="mt-h3 p-xs background-mt-bg-furu"
        headingLevel={+headerTag.charAt(1)}
      >
        {#each descriptionKeysToUseInTitle as { descriptionKey, prefix }, i}
          {prefix || ''}
          {descriptionList[descriptionKey]}
          {#if i < descriptionKeysToUseInTitle.length - 1}
            <span aria-label=". ">{titleSeparator}</span>
          {/if}
        {:else}
          {i + 1}
        {/each}
      </HeadingLevel>
      <dl class="mt-dl custom-borders p-xs" aria-labelledby={id}>
        {#each Object.entries(descriptionList) as [description, value], i}
          <dt class="mt-dt text" class:border-top={i}>
            {description}
          </dt>
          <dd class="mt-dd text" aria-label={value ? undefined : noValueAriaLabel}>
            {value || '–'}
          </dd>
        {/each}
      </dl>
    </li>
  {/each}
</ul>
