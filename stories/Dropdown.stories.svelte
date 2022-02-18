<script lang="ts">
  import {Meta, Template, Story} from '@storybook/addon-svelte-csf'
  import Dropdown from '../src/svelte/Dropdown.svelte'
  import CardArticle from '../src/svelte/CardArticle.svelte'

  const configs = [
    {
      buttonLabel: 'Språk/language',
      disableJs: false,
      cardArticle: {
        headingId: 'testarticle',
        title: 'Det er mulig å klikke utenfor',
        intro: 'Du kan klikke utenfor den blå rammen når dropdown er åpen for å lukke den.',
        text: '<p>Du kan teste det. En liten tekst med en lenke til <a href="https://mattilsynet.no">Mattilsynet</a>.</p>'
      },
      items: [
        {
          title: 'Vis siden på nynorsk',
          url: '#'
        },
        {
          title: 'Show page in English',
          url: '#"'
        }
      ]
    },
    {
      buttonLabel: 'En annen tekst',
      disableJs: false,
      items: [
        {
          title: 'En kort lenke',
          url: '#'
        },
        {
          title: 'En lengere lenke, med komma',
          url: '#"'
        }
      ]
    }
  ]
</script>

<Meta
  parameters={{xstate: true, inspectUrl: 'https://stately.ai/viz?inspect'}}
  title="Components/Dropdown"
  argTypes={{
    buttonLabel: {control: 'text'},
    disableJs: {control: 'boolean'}
  }} />

<Template let:args>
  <section class="preview-wrapper">
    <Dropdown title={args.buttonLabel} loadJs={!args.disableJs} let:titleId>
      <ol class="alt-language" aria-labelledby={titleId}>
        {#each args.items as item}
          <li>
            <a href={item.url} class="forward-arrow-small">{item.title}</a>
          </li>
        {/each}
      </ol>
    </Dropdown>
  </section>
  <section class="layout-flex-col layout-flex-col--x-small" aria-labelledby="how-to-heading">
    <CardArticle
      headingId={args.cardArticle.headingId}
      title={args.cardArticle.title}
      intro={args.cardArticle.intro}
      text={args.cardArticle.text} />
  </section>
</Template>

<Story name="Normal" args={configs[0]} />

<Story name="Multiple" args={configs} let:args>
  {#each configs as args, i}
    <section class={`preview-wrapper`}>
      <Dropdown title={args.buttonLabel} loadJs={!args.disableJs} let:titleId>
        <ol class="alt-language" aria-labelledby={titleId}>
          {#each args.items as item}
            <li>
              <a href={item.url} class="forward-arrow-small">{item.title}</a>
            </li>
          {/each}
        </ol>
      </Dropdown>
    </section>
  {/each}
</Story>

<style>
  .preview-wrapper {
    text-align: right;
    margin: var(--spacer-small) 0;
  }
  .alt-language {
    text-align: left;
    list-style: none;
    padding: 0;
    color: white;
  }
</style>
