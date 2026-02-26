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
  <span class="decl"
    >{key} <span class="code-text">{" ".repeat(align)}= "</span></span
  >
  {@render children?.()}
  <span class="code-text">";</span>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    max-width: 100%;
  }

  .wrapper * {
    white-space: pre;
  }

  .decl {
    display: contents;
  }

  .code-text {
    color: var(--text-code);
    text-wrap-mode: nowrap;
  }
</style>
