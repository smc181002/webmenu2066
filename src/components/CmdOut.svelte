<script>
  export let url = "http://192.168.0.102/cgi-bin/jsoninput.py";
  export let cmdInfo = { cmd: "ls" };

  let promise;
  const handleClick = () => {
    promise = (async function name() {
      const apiCall = await fetch(url, {
        method: "POST",
        body: JSON.stringify(cmdInfo),
      });

      const data = await apiCall.text();
      return data;
    })();
  };
</script>

<style>
  main {
    position: absolute;
    padding: 20px;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
  }
  main div {
    background-color: rgb(250, 250, 250);
    border: 1px solid rgb(224, 224, 224);
    box-sizing: content-box;
    font-size: 14px;
    font-family: "Cascadia Code", monospace;
    display: flex;
    justify-content: center;
    border-radius: 10px;
  }
</style>

<main>
  <button on:click={handleClick}> run command </button>
  <div>
    {#await promise}
      <p>running command</p>
    {:then data}
      {#if data === undefined}
        <pre>
          <code>run the command</code>
        </pre>
      {:else}
        <pre>
          <code>{data}</code>
        </pre>
      {/if}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</main>
