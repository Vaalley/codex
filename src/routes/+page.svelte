<script>
	import Navbar from '$lib/components/Navbar.svelte';
	// let { data } = $props();

	// $inspect(data);
</script>

<svelte:head>
	<title>Codex</title>
</svelte:head>

<Navbar />
<main class="flex h-screen items-center justify-center">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Welcome to Codex</h1>
</main>
