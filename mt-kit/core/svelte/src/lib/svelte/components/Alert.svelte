<script lang="ts">
  import InformationOutline from '../components/icons/InformationOutline.svelte'
  import WarningOutline from '../components/icons/WaningOutline.svelte'
  import SuccessOutline from '../components/icons/SuccessOutline.svelte'
  import DangerOutline from '../components/icons/DangerOutline.svelte'

  let className = ''
  export { className as class }
  export let severity: 'info' | 'success' | 'warning' | 'danger' = 'info'
  export let iconTitle: string | undefined = undefined

  const icons = {
    info: InformationOutline,
    success: SuccessOutline,
    warning: WarningOutline,
    danger: DangerOutline
  }
</script>

<div class="mt-alert {className} {severity}" {...$$restProps}>
  <svelte:component this={icons[severity]} title={iconTitle} />
  <div class="mt-alert-wrapper">
    <slot />
  </div>
  <slot name="right" />
</div>
