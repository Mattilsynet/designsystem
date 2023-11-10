<script context="module" lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  export let title = 'Information'
  const titleId = `information-outline-${instanceCounter++}`
</script>

<!--<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><circle cx="12" cy="12" r="11" stroke="#054449" stroke-width="2"/><path fill="#054449" d="M13.2 9.18V18h-2.4V9.18h2.4Zm0-3.18v2.128h-2.4V6h2.4Z"/></svg>-->
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="none"
  aria-labelledby={titleId}>
  <title id={titleId}>{title}</title>
  <circle cx="12" cy="12" r="11" stroke="#054449" stroke-width="2" />
  <path fill="#054449" d="M13.2 9.18V18h-2.4V9.18h2.4Zm0-3.18v2.128h-2.4V6h2.4Z" />
</svg>
