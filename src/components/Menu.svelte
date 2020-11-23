<script>
  import MainCard from "./MainCard.svelte";
  export let cards;
  export let pageOut;
</script>

<style>
  :global(body) {
    padding: 0;
    background: #111a2e;
    color: #ffffff;
  }
  main {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  h1 {
    margin: 0 !important;
    font-size: 40px;
  }

  .heading-part {
    text-align: center;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  .side-title {
    top: 10%;
    left: 30%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  .percent-85 {
    color: #dbdde0;
  }

  .main-grid {
    display: grid;
    grid-template-columns: auto auto auto;
    position: absolute;
    width: 70%;
    top: 55%;
    grid-gap: 30px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<main>
  {#if pageOut.isMainPage}
    <div class="heading-part">
      <h1>{pageOut.head}</h1>
      <p class="percent-85">{pageOut.subHead}</p>
    </div>
  {:else}
    <div class="side-title">
      <h1>{pageOut.head}</h1>
    </div>
  {/if}
  <div class="main-grid">
    {#each cards as card (card.title)}
      <MainCard {...card} />
    {/each}
  </div>
</main>
