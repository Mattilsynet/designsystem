<script lang="ts">
  import HeadingLevel from '../components/HeadingLevel.svelte'
  import { mapRelExternal } from '../../ts/utils'

  export let title = 'Aktuelle saker'
  export let headingClass = 'h4'
  export let headerTag: 'h2' | 'h3' | 'h4' = 'h2'
  export let issues = []
</script>

<section
  class="layout-grid layout-grid--column-12 current-issues"
  data-testid="current-issues"
  aria-labelledby="current-issues-heading">
  <HeadingLevel class="col-1-span-12 heading h3" headingLevel={+headerTag.charAt(1)}>
    {title}
  </HeadingLevel>
  {#each issues as issue, index}
    <span
      class="layout-flex-col"
      class:col-1-span-5={issues.length > 1 && index % 2 === 0}
      class:col-7-span-5={issues.length > 1 && index % 2 !== 0}
      class:col-1-span-12={issues.length === 1}
      data-testid="current-issue-span-{index}">
      {#if issue.title}
        <a
          class="mt-link self-start {headingClass}"
          rel={mapRelExternal(issue.href)}
          href={issue.href}
          data-testid="current-issue-a-{index}">
          {@html issue.title}
        </a>
      {/if}
      {#if issue.text}
        {@html issue.text}
      {/if}
    </span>
  {/each}
</section>
