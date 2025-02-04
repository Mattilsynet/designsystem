<script lang="ts">
  import Alert, { type AlertProps } from '$lib/svelte/components/Alert.svelte'

  let { class: className = '', children, ...rest }: Omit<AlertProps, 'children'> & { children: string } = $props()
</script>

<Alert {className} {...rest}>
  {@html children}
</Alert>
