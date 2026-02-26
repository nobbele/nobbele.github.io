<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="wrapper">
  {@render children()}
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    justify-content: center;
    background-color: black;
    color: white;

    font-family: "Source Code Pro", Consolas, Monaco, monospace;
    text-underline-offset: 0.1em;
    line-height: 1.25;
  }

  :global(:root) {
    --links: #ff7db0;
    --links-hover: #ff0087;
    --text-code: #d3d3d3d3;
    --text-comment: rgb(24, 138, 24);

    --indent: 2em;
  }

  :global(a) {
    color: var(--links);
  }

  :global(a:hover) {
    color: var(--links-hover);
  }
</style>
