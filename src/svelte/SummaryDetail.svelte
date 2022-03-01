<script lang="ts">
  export let title: string;
  export let detailsClass: string = '';
</script>

<details class="{detailsClass}">
  <summary>{title}</summary>
  <div class="summary-wrapper">
    <slot />
  </div>
</details>

