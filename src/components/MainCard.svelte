<script>
  import { link } from "svelte-spa-router";

  export let backText;
  export let title;
  export let image;
  export let altImg;
</script>

<style>
  .main-card {
    background-color: #141e33;
    max-width: 330px;
    height: 230px;
    overflow: hidden;
    margin: 0;
    position: relative;
    color: #fff;
    box-shadow: 0 25px 30px -14px rgb(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: 0.3s ease-in-out;
  }

  .main-card:hover {
    background-color: #73a0ff;
    box-shadow: 0 25px 30px -8px rgb(0, 0, 0, 0.3);
  }

  a {
    text-decoration: none;
  }

  .back-text {
    font-size: 60px;
    position: absolute;
    font-weight: 900;
    top: 20px;
    right: -9rem;
    color: rgb(0, 0, 0, 0.15);
  }

  .content {
    position: absolute;
    bottom: 0;
    margin: 24px;
  }

  .title {
    font-size: 20px;
    margin: 8px 0;
  }
</style>

<a href="/ping" use:link>
  <div class="main-card">
    <div class="back-text">{backText}</div>
    <div class="content">
      <img src={image} alt={altImg} />
      <div class="title">{title}</div>
    </div>
  </div>
</a>
