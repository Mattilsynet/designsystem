<script lang="ts">
  import {getFileExtension, mapRelExternal} from '../../ts/utils'

  export let linkText
  export let href
  let className = ''
  export {className as class}
  export let style = ''
  export let fileName = ''
  export let style = ''

  $: fileType = getFileExtension(fileName) ? `(${getFileExtension(fileName)})` : ''
</script>

<a class={className} rel={mapRelExternal(href)} {href} {style}>{@html linkText} {fileType}</a>
