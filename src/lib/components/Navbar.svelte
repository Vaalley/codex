<script>
	import LightSwitch from '$lib/components/LightSwitch.svelte';
	import SignInUp from './SignInUp.svelte';
</script>

<nav class="flex h-16 items-center gap-5 border-b px-4">
	<a href="/" class="text-muted-foreground transition-colors hover:text-foreground"> Homepage </a>
	<a href="/" class="text-muted-foreground transition-colors hover:text-foreground"> Game list </a>
	<a href="/" class="text-muted-foreground transition-colors hover:text-foreground"> Settings </a>
	<div class="ml-auto space-x-5">
		<SignInUp />
		<LightSwitch />
	</div>
</nav>
