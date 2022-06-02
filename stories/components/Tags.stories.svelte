<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Tags from '../../src/svelte/Tags.svelte'
  import {action} from '@storybook/addon-actions'

  const tagClickedAction = action('tagClicked')

  let tags = [{text: 'Sverige'}, {text: 'Norge'}, {text: 'Finland'}]
  function handleTagClicked(e) {
    tagClickedAction(e)
    tags = tags.filter(t => {
      return t.text !== e.detail.tag
    })
  }
  function reset() {
    tags = [{text: 'Sverige'}, {text: 'Norge'}, {text: 'Finland'}]
  }
</script>

<Meta
  title="Components/Tags"
  args={{
    disabled: false,
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:disableCss>
  <h1>Tags</h1>
  <div class="tags">
    <Tags bind:tags on:tagClicked={handleTagClicked} />
    <hr />
    <button class="button button--link" on:click={reset}>Gjenopprett tags</button>
  </div>
</Story>

<style lang="scss">
  .tags {
    margin-top: 2rem;
  }
</style>
