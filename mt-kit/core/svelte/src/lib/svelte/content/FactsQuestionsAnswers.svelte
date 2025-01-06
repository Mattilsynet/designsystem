<script lang="ts">
  import Disclosure from '../components/Disclosure.svelte'
  import HeadingLevel from '../components/HeadingLevel.svelte'

  type QuestionAnswer = {
    question: string
    answer: string
    imageUrl?: string
    imageAltText?: string
    caption?: string
  }

  interface Props {
    title?: string
    facts?: string
    disclosureHeadClass?: string
    loadJs?: boolean
    questionsAnswers?: Array<QuestionAnswer>
    headerTag?: 'h1' | 'h2' | 'h3' | 'h4'
  }

  let {
    title,
    facts,
    disclosureHeadClass = 'text-body',
    loadJs = true,
    questionsAnswers = [],
    headerTag = 'h2'
  }: Props = $props()
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
  {#if question && answer}
    <Disclosure title={question} {loadJs} headerClass={disclosureHeadClass} panelClass="text">
      {@html answer}
      {#if imageUrl}
        <figure class="mt-figure">
          <img src={imageUrl} alt={imageAltText ? imageAltText : ''} class="mt-img" />
          {#if caption}
            <figcaption class="mt-caption">{caption}</figcaption>
          {/if}
        </figure>
      {/if}
    </Disclosure>
  {/if}
{/each}
