<script>import Disclosure from "../components/Disclosure.svelte";
import HeadingLevel from "../components/HeadingLevel.svelte";
export let title;
export let facts;
export let disclosureHeadClass = "text-body";
export let loadJs = true;
export let questionsAnswers = [];
export let headerTag = "h2";
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
    <Disclosure title={question} {loadJs} headerClass={disclosureHeadClass}>
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
