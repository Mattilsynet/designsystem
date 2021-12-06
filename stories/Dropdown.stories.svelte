<script lang="ts">
  import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
  import Dropdown from '../src/svelte/Dropdown.svelte';

  const configs = [
    {
      buttonLabel: 'Språk/language',
      disableJs: false,
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
  ];
</script>

<Meta
  parameters={{xstate: true, inspectUrl: 'https://stately.ai/viz?inspect'}}
  title="Components/Dropdown"
  argTypes={{
    buttonLabel: {control: 'text'},
    disableJs: {control: 'boolean'}
  }}
/>

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
