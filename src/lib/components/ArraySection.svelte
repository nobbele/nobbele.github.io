<script lang="ts">
  import type { Snippet } from "svelte";
  import IndentSection from "./IndentSection.svelte";

  interface Props {
    children?: Snippet;
    key: string;
    align?: number;
    withVar?: string;
  }

  let { children, key, align = 0, withVar }: Props = $props();
</script>

<div class="wrapper">
  <span class="decl"
    >{key}
    <span class="code-text"
      >{"\xa0".repeat(align)}= {withVar ? `with ${withVar}; ` : ""}{"["}</span
    ></span
  >
  <IndentSection>
    {@render children?.()}
  </IndentSection>
  <span class="code-text">{"];"}</span>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    max-width: 100%;
  }

  .decl {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    max-width: 100%;
  }

  .wrapper * {
    white-space: pre;
  }

  .code-text {
    color: var(--text-code);
  }
</style>
