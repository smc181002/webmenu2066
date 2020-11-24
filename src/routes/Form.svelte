<script>
  import { formvals } from "../json/formdata.js";
  import FormGrid from "../components/FormGrid.svelte";
  import { writable } from "svelte/store";

  export let params;

  const formData = formvals[params.tech][params.opt].formData;

  const user = writable(formvals[params.tech][params.opt].store);
  // console.log(formvals["docker"]["container"].store, formData);
</script>

<style>
  main {
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
  }
</style>

<main>
  <FormGrid {user} {formData} type={{ tech: params.tech, opt: params.opt }} />
</main>
