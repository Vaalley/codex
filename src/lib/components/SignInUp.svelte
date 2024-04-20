<script>
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { signup, signin } from '$lib/databaseOperations';

	let username = $state('');
	let email = $state('');
	let password = $state('');
	let isLoading = $state(false);

	const resetForm = () => {
		username = '';
		email = '';
		password = '';
	};

	const handleSignup = async () => {
		isLoading = true;
		try {
			await signup(username, email, password);
		} catch (error) {
			console.error('Signup failed:', error);
		} finally {
			isLoading = false;
			resetForm();
		}
	};

	const handleSignin = async () => {
		isLoading = true;
		try {
			await signin(email, password);
		} catch (error) {
			console.error('Signin failed:', error);
		} finally {
			isLoading = false;
			resetForm();
		}
	};
</script>

<Dialog.Root>
	<Dialog.Trigger>Sign In / Sign Up</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
			<Dialog.Description></Dialog.Description>
		</Dialog.Header>
		<Tabs.Root value="signin">
			<Tabs.List class="text-center">
				<Tabs.Trigger value="signin">Sign In</Tabs.Trigger>
				<Tabs.Trigger value="signup">Sign Up</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="signin" class="mt-5 space-y-5">
				<Input bind:value={email} type="email" placeholder="Email" />
				<Input bind:value={password} type="password" placeholder="Password" />
				<Button on:click={handleSignin} disabled={isLoading}>
					{#if isLoading}
						<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					{/if}
					Sign in
				</Button>
			</Tabs.Content>
			<Tabs.Content value="signup" class="mt-5 space-y-5">
				<Input bind:value={username} type="text" placeholder="Username" />
				<Input bind:value={email} type="email" placeholder="Email" />
				<Input bind:value={password} type="password" placeholder="Password" />
				<Button on:click={handleSignup} disabled={isLoading}>
					{#if isLoading}
						<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					{/if}
					Sign up
				</Button>
			</Tabs.Content>
		</Tabs.Root>
	</Dialog.Content>
</Dialog.Root>
