<script lang="ts">
	import LightSwitch from '$lib/components/LightSwitch.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
</script>

<LightSwitch />
<ModeWatcher />
<slot />
