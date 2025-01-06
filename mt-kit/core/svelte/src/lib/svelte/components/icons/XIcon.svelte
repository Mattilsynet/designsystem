<script lang="ts">
  let instanceCounter = 0
  interface Props {
    color?: string
    title?: string
    [key: string]: unknown
  }

  let { color = '#032C30', title, ...rest }: Props = $props()
  const titleId = `x-icon-${instanceCounter++}`
</script>

<svg
  viewBox="0 0 22 22"
  width="22"
  height="22"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...rest}>
  {#if title}
    <title id={titleId}>{title}</title>
  {/if}
  <path stroke={color} stroke-width="2" d="M20.6.707.801 20.506M20.506 20.506.707.707" />
</svg>
