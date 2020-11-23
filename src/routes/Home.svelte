<script>
  // import MainCard from "../components/MainCard.svelte";
  import Menu from "../components/Menu.svelte";

  import cards from "../json/maincards.js";
  let pageOut = {
    isMainPage: true,
    head: "Welcome to Web Menu",
    subHead: "Create and control applications fron a single web portal",
  };

  console.log(pageOut);
</script>

<Menu {pageOut} {cards} />
