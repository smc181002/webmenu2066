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

<h1>{capitalize(type.tech)}</h1>
<form>
  {#each formData as { title, name }, i}
    <div>
      <label for={name}>{title}</label>
      <input type="text" id={name} bind:value={$user[name]} />
    </div>
  {/each}
</form>

<main>
  <CmdOut {url} {cmdInfo} />
</main>
<!-- <p>{JSON.stringify($user)}</p> -->
