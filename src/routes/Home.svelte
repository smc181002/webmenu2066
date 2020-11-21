<script>
  import MainCard from "../components/MainCard.svelte";
  import cards from "../json/maincards.js";
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
  <div class="heading-part">
    <h1>Welcome to Web Menu</h1>
    <p class="percent-85">
      Create and control applications fron a single web portal
    </p>
  </div>
  <!-- <div class="main-grid">
    <MainCard {...card[0]} />
    <MainCard {...card[0]} />
    <MainCard {...card[0]} />
    <MainCard {...card[0]} />
  </div> -->
  <div class="main-grid">
    {#each cards as card (card.title)}
      <MainCard {...card} />
    {/each}
  </div>
  <!-- <CmdOut cmdInfo={{ cmd: 'ls' }} /> -->
</main>
