<script lang="ts">
  import type { Snippet } from "svelte";
  import IndentSection from "./IndentSection.svelte";

  interface Props {
    children?: Snippet;
    key: string;
    align?: number;
  }

  let { children, key, align = 0 }: Props = $props();
</script>

<div class="wrapper">
  <span
    >{key} <span class="code-text">{"\xa0".repeat(align)}=&nbsp;"</span></span
  >
  {@render children?.()}
  <span class="code-text">";</span>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
  }

  .code-text {
    color: var(--text-code);
  }
</style>
