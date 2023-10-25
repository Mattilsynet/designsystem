<script lang="ts">
  export let figmaUrl: string | undefined = undefined
  export let githubUrl: string | undefined = undefined
</script>

<ul class="mt-ul list-unstyled layout-flex">
  {#if figmaUrl}
    <li>
      <a href={figmaUrl} class="mt-link icon--figma"> Figma </a>
    </li>
  {/if}
  {#if githubUrl}
    <li>
      <a href={githubUrl} class="mt-link icon--github"> GitHub </a>
    </li>
  {/if}
</ul>

<style>
  .list-unstyled {
    margin-top: var(--spacer-xxx-small);
  }
  .mt-ul > li {
    margin-top: 0;
  }
</style>
