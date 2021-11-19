<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import Dropdown from '../src/svelte/Dropdown.svelte';

  const config = {
    ariaLabel: 'Språk/language',
    disableJs: false,
    bodyId: 'language-links',
    items: [
      {
        title: 'Vis denne siden på nynorsk og samisk',
        url: '#',
      },
      {
        title: 'Show this page in English',
        url: '#"',
      }
    ]
  }
</script>

<Meta
  parameters={{xstate: true, inspectUrl: 'https://stately.ai/viz?inspect'}}
  title="Components/Dropdown"
  argTypes={{
    title: {control: 'text'},
    disableJs: {control: 'boolean'}
  }}
/>

<Story name="Normal" args={config} let:args>
  <div class="preview-wrapper">
    <Dropdown title="Språk/language" bodyId={args.bodyId} loadJs={!args.disableJs}>
      <ol class="alt-language" aria-labelledby={args.bodyId} >
        {#each args.items as item}
          <li>
            <a href={item.url} class="forward-arrow-small">{item.title}</a>
          </li>
        {/each}
      </ol>
    </Dropdown>
  </div>
</Story>

<style>
  .preview-wrapper {
    text-align: right;
  }
  .alt-language {
    text-align: left;
    list-style: none;
    padding: 0;
    color: white;
  }
</style>
