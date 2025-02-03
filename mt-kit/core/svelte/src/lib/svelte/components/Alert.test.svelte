<script lang="ts">
  import Alert from '$lib/svelte/components/Alert.svelte'
  interface Props {
    severity?: 'info' | 'success' | 'warning' | 'danger'
    class?: string
    children?: string
  }
  let { severity = 'info', class: className = '', children }: Props = $props()
</script>

<Alert {severity} {className}>
  {@html children}
</Alert>
