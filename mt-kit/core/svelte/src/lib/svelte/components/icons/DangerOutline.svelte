<script module lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  interface Props {
    title?: string;
  }

  let { title = 'Danger' }: Props = $props();
  const titleId = `danger-outline-${instanceCounter++}`
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="none"
  aria-labelledby={titleId}>
  <title id={titleId}>{title}</title>
  <circle cx="12" cy="12" r="11" stroke="#032C30" stroke-width="2" />
  <g clip-path="url(#a)">
    <path
      fill="#032C30"
      d="M16.8 8.4 13.2 12l3.6 3.6-1.2 1.2-3.6-3.6-3.6 3.6-1.2-1.2 3.6-3.6-3.6-3.6 1.2-1.2 3.6 3.6 3.6-3.6 1.2 1.2Z" />
  </g>
  <defs><clipPath id="a"><path fill="#fff" d="M7.2 7.2h9.6v9.6H7.2z" /> </clipPath> </defs>
</svg>
