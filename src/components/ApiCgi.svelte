<script>
  async function codeOutput() {
    const res = await fetch(`tutorial/random-number`);
    const text = await res.text();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }

  let promise = codeOutput();

  function handleClick() {
    promise = codeOutput();
  }
</script>

<button on:click={handleClick} />

{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
