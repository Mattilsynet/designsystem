<script lang="ts">
  import { getFileExtension, mapRelExternal } from '../../ts/utils'

  export let linkText
  export let href
  let className = ''
  export { className as class }
  export let style = ''
  export let linkStyle: 'mt-link' | 'mt-button' = 'mt-link'
  export let fileName = ''

  $: fileType = getFileExtension(fileName) ? `(${getFileExtension(fileName)})` : ''
</script>

<a class="{linkStyle} {className}" rel={mapRelExternal(href)} {href} {style}>
  {@html linkText}
  {fileType}
</a>
