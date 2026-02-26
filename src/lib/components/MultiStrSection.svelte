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

<span>{key} <span class="code-text">{"\xa0".repeat(align)}=&nbsp;''</span></span
>
<IndentSection>
  {@render children?.()}
</IndentSection>
<span class="code-text">'';</span>

<style>
  .code-text {
    color: var(--text-code);
  }
</style>
