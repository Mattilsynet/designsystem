<script lang="ts">
  import { getFileExtension, mapRelExternal } from '../../ts/utils'

  interface Props {
    linkText: any
    href: any
    class?: string
    style?: string
    linkStyle?: 'mt-link' | 'mt-button'
    fileName?: string
  }

  let {
    linkText,
    href,
    class: className = '',
    style = '',
    linkStyle = 'mt-link',
    fileName = ''
  }: Props = $props()

  let fileType = $derived(getFileExtension(fileName) ? `(${getFileExtension(fileName)})` : '')
</script>

<a class="{linkStyle} {className}" rel={mapRelExternal(href)} {href} {style}>
  {@html linkText}
  {fileType}
</a>
