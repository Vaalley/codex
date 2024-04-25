<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
</script>

<Toaster />
<Navbar />
<ModeWatcher />
<slot />
