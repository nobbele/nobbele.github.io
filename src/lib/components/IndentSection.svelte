<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="wrapper">
  {@render children?.()}
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;

    padding-left: var(--indent);
  }
</style>
