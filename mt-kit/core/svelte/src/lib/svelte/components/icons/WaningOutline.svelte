<script module lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  interface Props {
    color?: string
    title?: string
  }

  let { color = '#032C30', title = 'Warning' }: Props = $props()
  const titleId = `warning-outline-${instanceCounter++}`
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="none"
  aria-labelledby={titleId}
>
  <title id={titleId}>{title}</title>
  <path
    fill={color}
    d="M10.8 15.6h2.4V18h-2.4v-2.4Zm0-9.6h2.4v7.2h-2.4V6Zm1.188-6C5.364 0 0 5.376 0 12s5.364 12 11.988 12C18.624 24 24 18.624 24 12S18.624 0 11.988 0ZM12 21.6A9.597 9.597 0 0 1 2.4 12c0-5.304 4.296-9.6 9.6-9.6 5.304 0 9.6 4.296 9.6 9.6 0 5.304-4.296 9.6-9.6 9.6Z"
  />
</svg>
