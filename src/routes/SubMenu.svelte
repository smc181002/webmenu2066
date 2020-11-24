<script>
  import Menu from "../components/Menu.svelte";
  import subopts from "../json/subopts.js";

  export let params;
  console.log(subopts[params.tech]);
  let cards = subopts[params.tech].cards;
  let pageOut = subopts[params.tech].pageOut;
  console.log(cards, pageOut);
</script>

<main>
  <Menu {pageOut} {cards} />
</main>
