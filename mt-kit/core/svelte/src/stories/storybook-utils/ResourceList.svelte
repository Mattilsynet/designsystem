<script lang="ts">
  interface Props {
    figmaUrl?: string | undefined;
    githubUrl?: string | undefined;
  }

  let { figmaUrl = undefined, githubUrl = undefined }: Props = $props();
</script>

<ul class="mt-ul m-t-xxs list-unstyled layout-flex">
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
