<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { toKebabCase } from '$lib/ts/utils'
  import DialogBox from '$lib/svelte/components/DialogBox.svelte'
  import { tick } from 'svelte'
  import TextArea from '$lib/svelte/components/form/TextArea.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'

  let hideFeedbackText = $state(false)
  let feedbackTextInput: HTMLInputElement | undefined = $state()

  let dialogOpen = true

  async function handleClick() {
    hideFeedbackText = true
    await tick()
    feedbackTextInput?.focus()
  }

  const { Story } = defineMeta({
    title: 'Innhold/Tilbakemeldingsboks',
    args: {
      title: 'Regelveiledning samleside overskrift',
      intro: 'Regelveiledning samleside ingress',
      tableOfContents: 'Innhold på siden',
      text: `<h2 class='mt-h2'>Andre overskrift</h2>
      <p>Paragraf med tekst. Paragraf med tekst. <a class='mt-link' href=''>Paragraf med tekst.</a> Paragraf med tekst</p>
      <ul class='mt-ul'>
        <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
        <li>
          En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
          selvstendig ansvar for dyr.
        </li>
      </ul>`,
      disableCss: false,
      legalItems: [
        {
          title: 'Første regelveiledning',
          intro: 'Første regelveiledning intro tekst.',
          text: `<h2 class='mt-h2'>Andre overskrift</h2>
          <p>Paragraf med tekst. Paragraf med tekst. <a class='mt-link' href=''>Paragraf med tekst.</a> Paragraf med tekst</p>
          <ul >
            <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
            <li>
              En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
              selvstendig ansvar for dyr.
            </li>
          </ul>`,
          howToDoItTitle: 'Slik gjør du',
          howToDoIt: `<p>Slik gjør du beskrivelse</p>`
        },
        {
          title: 'Andre regelveiledning',
          intro: 'Andre regelveiledning intro tekst.',
          text: `<h2 class='mt-h2'>Andre overskrift</h2>
          <p>Paragraf med tekst. Paragraf med tekst. <a class='mt-link' href=''>Paragraf med tekst.</a> Paragraf med tekst</p>
          <ul >
            <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
            <li>
              En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
              selvstendig ansvar for dyr.
            </li>
          </ul>`,
          howToDoItTitle: 'Slik gjør du',
          howToDoIt: `<p>Slik gjør du beskrivelse</p>`
        }
      ]
    },
    argTypes: {
      title: { control: 'text' },
      intro: { control: 'text' },
      text: { control: 'text' },
      tableOfContents: { control: 'text' },
      label: { control: 'text' },
      helpText: { control: 'text' },
      errorMessage: { control: 'text' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ title, intro, legalItems, text, disableCss })}
    <div
      use:wrapInShadowDom={disableCss}
      class="container content layout-grid layout-grid--column-12">
      <article class="article-page col-1-span-12 legal-guidance">
        <h1 class="mt-h1">{title}</h1>
        <div class="intro">
          <p>{intro}</p>
        </div>

        {@html text}

        {#each legalItems as legal}
          <article
            id={toKebabCase(legal.title)}
            class="legal-collection legal-collection__border-top col-3-span-6"
            aria-labelledby="collection-title-1">
            <h2 id="collection-title-1" class="mt-h2">{legal.title}</h2>

            <div class="intro">
              {legal.intro}
            </div>

            {@html legal.text}
          </article>
        {/each}
      </article>
    </div>
    <div class="feedback-container">
      <div class="feedback-box">
        <DialogBox
          isOpen={dialogOpen}
          title={hideFeedbackText ? 'Takk for tilbakemeldingen.' : 'Fant du det du lette etter?'}
          ariaTitle="Fant du det du lette etter?">
          <div role="group" class="feedback-box--buttons {hideFeedbackText ? 'hide-feedback' : ''}">
            <button
              id="feedback_yes"
              type="button"
              class="mt-button mt-button--secondary"
              onclick={handleClick}
              >Ja
            </button>
            <button
              id="feedback_no"
              type="button"
              class="mt-button mt-button--secondary"
              onclick={handleClick}
              >Nei
            </button>
          </div>
          <form name="feedback_form" class="mt-form form-layout" onsubmit={e => e.preventDefault()}>
            <TextArea
              name="feedback_text"
              bind:textAreaRef={feedbackTextInput}
              label="Er det noe vi kan forbedre med nettsiden?"
              value=""
              showOptionalText={false}
              helpText={'Informasjon blir brukt til å forbedre nettstedet. Vi kan ikke svare. <a class="mt-link" ' +
                'href="" >Kontakt oss</a> hvis du luerer på noe'}
              helpTextPlacement="below"
              textAreaClass={hideFeedbackText ? '' : 'hide-feedback'}
              helpTextClass={hideFeedbackText ? '' : 'hide-feedback'}
              labelClass={hideFeedbackText ? '' : 'hide-feedback'} />
            <button
              type="submit"
              class="mt-button mt-button--primary {hideFeedbackText ? '' : 'hide-feedback'}">
              Send svar
            </button>
          </form>
        </DialogBox>
      </div>
    </div>
  {/snippet}
</Story>
