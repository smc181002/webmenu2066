<script>
  import CmdOut from "./CmdOut.svelte";

  export let user;
  export let formData;
  export let type;

  const cmdInfo = {
    tech: type.tech,
    opt: type.opt,
    value: $user,
  };

  const capitalize = (str1) => str1.charAt(0).toUpperCase() + str1.slice(1);

  const ipAddr = "192.168.226.129";
  const url = `http://${ipAddr}/cgi-bin/${type.tech}.py`;
</script>

<style>
  main {
    padding: 0 100px;
  }

  input {
    background-color: #00000022;
    border: none;
    color: #ffffffee;
    outline: none;
    padding: 14px 8px;
    width: 16em;
  }

  label {
    margin-bottom: 8px;
  }
</style>

<main>
  <h1>{capitalize(type.tech)}</h1>
  <form>
    {#each formData as { title, name }, i}
      <div>
        <label for={name}>{title}</label>
        <input type="text" id={name} bind:value={$user[name]} />
      </div>
    {/each}
  </form>
</main>

<CmdOut {url} {cmdInfo} />
