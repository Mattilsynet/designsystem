<script lang="ts">
  export let title: string;
  export let detailsClass: string = '';
</script>

<details>
  <summary>{title}</summary>
  <div class="summary-wrapper {detailsClass}">
    <slot />
  </div>
</details>

