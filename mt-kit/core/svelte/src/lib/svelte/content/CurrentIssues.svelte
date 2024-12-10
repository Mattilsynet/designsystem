<script lang="ts">
  import HeadingLevel from '../components/HeadingLevel.svelte'
  import { mapRelExternal } from '../../ts/utils'

  interface Props {
    title?: string
    headingClass?: string
    headerTag?: 'h2' | 'h3' | 'h4'
    issues?: any
  }

  let {
    title = 'Aktuelle saker',
    headingClass = 'mt-h4',
    headerTag = 'h2',
    issues = []
  }: Props = $props()
</script>

<section
  class="layout-grid layout-grid--column-12 current-issues"
  data-testid="current-issues"
  aria-labelledby="current-issues-heading"
>
  <!--  todo-->
  <HeadingLevel class="col-1-span-12 heading mt-h3" headingLevel={+headerTag.charAt(1)}>
    {title}
  </HeadingLevel>
  {#each issues as issue, index}
    <span
      class="layout-flex-col"
      class:col-1-span-5={issues.length > 1 && index % 2 === 0}
      class:col-7-span-5={issues.length > 1 && index % 2 !== 0}
      class:col-1-span-12={issues.length === 1}
      data-testid="current-issue-span-{index}"
    >
      {#if issue.title}
        <a
          class="self-start {headingClass}"
          rel={mapRelExternal(issue.href)}
          href={issue.href}
          data-testid="current-issue-a-{index}"
        >
          {@html issue.title}
        </a>
      {/if}
      {#if issue.text}
        {@html issue.text}
      {/if}
    </span>
  {/each}
</section>
