<script>
	let { data } = $props();

	$inspect(data);
</script>

<svelte:head>
	<title>Codex</title>
</svelte:head>

{#if data}
	<p>{data.data}</p>
{/if}

<main class="flex h-screen items-center justify-center">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Welcome to Codex</h1>
</main>
