<script>import HeadingLevel from "./HeadingLevel.svelte";
import { mapRelExternal } from "../../ts/utils";
export let headingId;
export let title;
export let intro;
export let text;
export let linkUrl;
export let linkText;
export let type = "";
export let headerTag = "h3";
export let iconClass = type === "task" ? "task-icon" : "";
</script>

<article class={type} aria-labelledby={headingId}>
  <HeadingLevel
    id={headingId}
    class="title {iconClass} {headerTag === 'h2' ? 'mt-h3' : ''}"
    headingLevel={+headerTag.charAt(1)}>
    {@html title}
  </HeadingLevel>

  {#if intro}
    <div class="intro">
      {@html intro}
    </div>
  {/if}

  {#if text}
    <div class="text">
      {@html text}
    </div>
  {/if}

  {#if linkUrl && linkText}
    <p>
      <a href={linkUrl} rel={mapRelExternal(linkUrl)} class="mt-link link--transport">
        {@html linkText}
      </a>
    </p>
  {/if}
</article>
