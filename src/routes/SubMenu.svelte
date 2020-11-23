<script>
  import Menu from "../components/Menu.svelte";
  import subopts from "../json/subopts.js";
  export let params = {};
</script>

<main>
  <Menu {...subopts[params.tech]} />
</main>
