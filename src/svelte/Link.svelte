<script lang="ts">
  import {getFileExtension} from '../ts/utils'

  export let linkText
  export let href
  let className = ''
  export {className as class}
  export let fileName = ''

  $: fileType = fileName !== '' ? `(${getFileExtension(fileName)})` : ''
</script>

<a class={className} {href}>{@html linkText} {fileType}</a>
