<script lang="ts">
  import {getFileExtension, mapRelExternal} from '../../ts/utils'

  export let linkText
  export let href
  let className = ''
  export {className as class}
  export let fileName = ''

  $: fileType = getFileExtension(fileName) ? `(${getFileExtension(fileName)})` : ''
</script>

<a class={className} rel={mapRelExternal(href)} {href}>{@html linkText} {fileType}</a>
