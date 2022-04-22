<script lang="ts">
  export let title: string
  export let detailsClass = ''
</script>

<details class={detailsClass}>
  <summary>{@html title}</summary>
  <div class="summary-wrapper">
    <slot />
  </div>
</details>
