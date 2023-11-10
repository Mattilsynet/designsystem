<script lang="ts">
  import InformationOutline from '../components/icons/InformationOutline.svelte'
  import WarningOutline from '../components/icons/WaningOutline.svelte'
  import SuccessOutline from '../components/icons/SuccessOutline.svelte'
  import DangerOutline from '../components/icons/DangerOutline.svelte'

  export let severity: 'info' | 'success' | 'warning' | 'danger' = 'info'
  export let iconTitle
  const icons = {
    info: InformationOutline,
    success: SuccessOutline,
    warning: WarningOutline,
    danger: DangerOutline
  }
</script>

<div class="mt-alert {severity}">
  <svelte:component this={icons[severity]} title={iconTitle} />
  <div>
    <slot />
  </div>
</div>
