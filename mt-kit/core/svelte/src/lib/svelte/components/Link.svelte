<script lang="ts">
  import { getFileExtension, mapRelExternal } from '$lib/ts'

  interface Props {
    'data-variant'?: 'pdf' | 'document' | ''
    linkText: any
    href: any
    class?: string
    style?: string
    linkStyle?: '' | 'mt-button'
    fileName?: string
  }

  let {
    "data-variant": variant,
    linkText,
    href,
    class: className = '',
    style = '',
    linkStyle = '',
    fileName = ''
  }: Props = $props()

  let fileType = $derived(getFileExtension(fileName) ? `(${getFileExtension(fileName)})` : '')
</script>

<a class={`${linkStyle} ${className}`.trim()} data-variant={variant} rel={mapRelExternal(href)} {href} {style}>
  {@html linkText}
  {fileType}
</a>
