<script>
  import HomePageContents from "$lib/HomePageContents.svelte";
  import BadgesList from "$lib/BadgesList.svelte";
</script>

<div class="window">
  <HomePageContents />
</div>
<BadgesList />

<style>
  .window {
    margin: 1rem;
    padding: 1rem 2rem;

    background-color: #1f1f1f;
    border: 1px solid white;
    box-shadow: 0 0 8px gray;
  }
</style>
