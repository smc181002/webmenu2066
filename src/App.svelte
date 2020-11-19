<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";
</script>

<Router {routes} />

<style>
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Work+Sans:wght@400;600;700&display=swap');

	:global(div, p) {
		font-family: 'DM Sans', sans-serif;
		margin: 8px 0;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Work Sans', sans-serif;
	}
</style>