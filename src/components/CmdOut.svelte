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
  main div {
    overflow: auto;
    background-color: #00000033;
    box-sizing: content-box;
    font-size: 14px;
    font-family: "Cascadia Code", monospace;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    margin: 40px;
  }
  button {
    margin: 25px 0;
    margin-left: 100px;
    background-color: #73a0ff;
    color: #111a2e;
    outline: none;
    border: 0;
    padding: 14px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-family: "DM Sans", sans-serif;
    transition: 0.25s ease-in-out;
  }

  button:hover {
    background-color: #5580db;
  }
</style>

<main>
  <button on:click={handleClick}> run command </button>
  <div>
    {#await promise}
      <p>running command</p>
    {:then data}
      {#if data !== undefined}
        <pre>
          {data}
        </pre>
      {/if}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</main>
