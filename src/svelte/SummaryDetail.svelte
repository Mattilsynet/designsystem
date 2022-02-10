<script lang="ts">
  export let title: string;
</script>

<details>
  <summary>{title}</summary>
  <div class="summary-wrapper">
    <slot />
  </div>
</details>
