<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import ExpandableBox from '../src/svelte/ExpandableBox.svelte';

  const config = {
    ariaLabel: 'Språk/language',
    disableJs: false,
    items: [
      {
        title: 'Vis denne siden på nynorsk og samisk',
        url: '#',
        homeLabel: 'hjem',
        ariaLabel: 'Les innhaldet på nynorsk'
      },
      {
        title: 'Show this page in English',
        url: '#"',
        homeLabel: 'home',
        ariaLabel: 'Read this content in english'
      }
    ]
  }

</script>

<Meta
  title="Components/Expandable box"
  argTypes={{
    title: {control: 'text'},
    disableJs: {control: 'boolean'}
  }}
/>

<Story name="Normal" args={config} let:args>
  <div class="preview-wrapper">
    <ExpandableBox title="Språk/language" loadJs={!args.disableJs}>
      <ol class="alt-language" >
        {#each args.items as item}
          <li>
            <a href={item.url} class="forward-arrow-small" aria-label={item.ariaLabel}>
              {item.title}
            </a>
          </li>
        {/each}
      </ol>
    </ExpandableBox>
  </div>
</Story>

<style>
  .preview-wrapper {
    text-align: right;
  }
</style>
