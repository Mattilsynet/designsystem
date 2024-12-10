<script module lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  interface Props {
    title?: string
  }

  let { title = 'Success' }: Props = $props()
  const titleId = `success-outline-${instanceCounter++}`
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
    fill="#032C30"
    d="M8.451 10.235 7.2 11.689l4.15 3.19 5.45-5.668-1.318-1.158-4.124 4.549-2.906-2.367Z"
  />
  <circle cx="12" cy="12" r="11" stroke="#032C30" stroke-width="2" />
</svg>
