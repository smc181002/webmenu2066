<script>
  const callFunc = async () => {
    let res = await fetch("http://192.168.0.102/cgi-bin/cmd.py?q=hellothere");
    return res.text();
  };

  let res = callFunc();
</script>

{#await res}
  <p>...waiting</p>
{:then value}
  <p>The number is {value}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
