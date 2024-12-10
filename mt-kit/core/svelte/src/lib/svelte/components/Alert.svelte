<script lang="ts">
  import InformationOutline from '../components/icons/InformationOutline.svelte'
  import WarningOutline from '../components/icons/WaningOutline.svelte'
  import SuccessOutline from '../components/icons/SuccessOutline.svelte'
  import DangerOutline from '../components/icons/DangerOutline.svelte'

  interface Props {
    class?: string
    severity?: 'info' | 'success' | 'warning' | 'danger'
    iconTitle?: string | undefined
    children?: import('svelte').Snippet
    right?: import('svelte').Snippet
    [key: string]: any
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

  const SvelteComponent = $derived(icons[severity])
</script>

<div class="mt-alert {className} {severity}" {...rest}>
  <SvelteComponent title={iconTitle} />
  <div class="mt-alert-wrapper">
    {@render children?.()}
  </div>
  {@render right?.()}
</div>
