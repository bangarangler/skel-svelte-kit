<script>
	import Header from '$lib/Header.svelte';
	/* import '../tailwind.css'; */
</script>

<Header />

<!--<main class="bg-blue-400">-->
<main>
	<slot />
</main>

<footer>Copywrite 2021</footer>

<style>
	/* :global(header) { */
	/* 	background: red; */
	/* } */
</style>
