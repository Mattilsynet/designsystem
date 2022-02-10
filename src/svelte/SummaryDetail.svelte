<script lang="ts">
  export let title: string;
</script>


<div class="wrapper">
  <details>
    <summary>{title}</summary>
    <div class="summary-wrapper">
      <slot />
    </div>
  </details>
</div>