<script lang="ts">
  import Disclosure from '../components/Disclosure.svelte'
  import HeadingLevel from '../components/HeadingLevel.svelte'

  export let title: string | undefined
  export let facts: string | undefined
  export let disclosureHeadClass = 'text-body'
  export let loadJs = true
  export let questionsAnswers: Array<{
    question: string
    answer: string
    imageUrl?: string
    imageAltText?: string
    caption?: string
  }> = []
  export let headerTag: 'h2' | 'h3' | 'h4' = 'h2'
</script>

{#if title}
  <HeadingLevel headingLevel={+headerTag.charAt(1)}>{@html title}</HeadingLevel>
{/if}

{#if facts}
  <div class="text">
    {@html facts}
  </div>
{/if}

{#each questionsAnswers as { question, answer, imageUrl, imageAltText, caption }}
  <Disclosure title={question} {loadJs} headerClass={disclosureHeadClass}>
    {@html answer}
    {#if imageUrl}
      <figure>
        <img src={imageUrl} alt={imageAltText ? imageAltText : undefined} />
        {#if caption}
          <figcaption>{caption}</figcaption>
        {/if}
      </figure>
    {/if}
  </Disclosure>
{/each}
