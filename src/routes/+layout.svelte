<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
	import posthog from 'posthog-js';
	import { browser } from '$app/environment';

	export const load = async () => {
		if (browser) {
			posthog.init('phc_SO0k3eeW6LT7SDkFYEUCz7E90Qo7N82JIEyDe2SEWpx', {
				api_host: 'https://eu.i.posthog.com'
			});
		}
		return;
	};
</script>

<Navbar />
<ModeWatcher />
<slot />
