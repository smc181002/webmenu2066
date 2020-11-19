<script>
  export let url = "http://192.168.0.102/cgi-bin/jsoninput.py";
  export let cmdInfo = { cmd: "ls" };

  const dataFetcher = async () => {
    const apiCall = await fetch(url, {
      method: "POST",
      body: JSON.stringify(cmdInfo),
    });

    const data = await apiCall.text();
    return data;
  };

  const promise = dataFetcher();
</script>

<style>
  main {
    background-color: rgb(250, 250, 250);
    border: 1px solid rgb(224, 224, 224);
    box-sizing: content-box;
    position: absolute;
    width: 30%;
    padding: 20px;
    font-size: 14px;
    font-family: "Cascadia Code", monospace;
    display: flex;
    justify-content: center;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
</style>

<main>
  {#await promise}
    <p>running command</p>
  {:then data}
    <pre>
      <code>{data}</code>
    </pre>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</main>
