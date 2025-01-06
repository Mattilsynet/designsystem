<script lang="ts">
  import type { Snippet } from 'svelte'
  import InformationOutline from '../components/icons/InformationOutline.svelte'
  import WarningOutline from './icons/WarningOutline.svelte'
  import SuccessOutline from '../components/icons/SuccessOutline.svelte'
  import DangerOutline from '../components/icons/DangerOutline.svelte'

  interface Props {
    class?: string
    severity?: 'info' | 'success' | 'warning' | 'danger'
    iconTitle?: string | undefined
    children?: Snippet
    right?: Snippet
    [key: string]: unknown
  }

  let {
    class: className = '',
    severity = 'info',
    iconTitle = undefined,
    children,
    right,
    ...rest
  }: Props = $props()

  const icons = {
    info: InformationOutline,
    success: SuccessOutline,
    warning: WarningOutline,
    danger: DangerOutline
  }

  const IconComponent = $derived(icons[severity])
</script>

<div class="mt-alert {className} {severity}" {...rest}>
  <IconComponent title={iconTitle} />
  <div class="mt-alert-wrapper">
    {@render children?.()}
  </div>
  {@render right?.()}
</div>
