<script>
	import { toast } from 'svelte-sonner';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import LogIn from 'lucide-svelte/icons/log-in';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Input } from '$lib/components/ui/input';
	import { buttonVariants, Button } from '$lib/components/ui/button/index';
	// import { signup, signin } from '$lib/databaseOperations';
	import axios from 'axios';

	let username = $state('');
	let email = $state('');
	let password = $state('');
	let isLoading = $state(false);
	// let user = $state(null);

	// $inspect(user);

	const resetForm = () => {
		username = '';
		email = '';
		password = '';
	};

	// const handleSignin = async () => {
	// 	isLoading = true;
	// 	try {
	// 		const { user, token } = await signin(email, password);
	// 		console.log(user, token);
	// 		toast.success('Sign in successful!');
	// 	} catch (error) {
	// 		console.error('Signin failed:', error);
	// 		toast.error(`Sign in failed: ${error.message}`);
	// 	} finally {
	// 		isLoading = false;
	// 		resetForm();
	// 	}
	// };

	const handleSignin = async () => {
		isLoading = true;
		try {
			const response = await axios.post(
				'http://localhost:3000/signin',
				{ email, password },
				{
					params: {
						email,
						password
					}
				}
			);
			const { token } = response.data;
			console.log(user, token);
			toast.success('Sign in successful!');
		} catch (error) {
			console.error('Signin failed:', error);
			toast.error(`Sign in failed: ${error.message}`);
		} finally {
			isLoading = false;
			resetForm();
		}
	};

	const handleSignup = async () => {
		// 	isLoading = true;
		// 	try {
		// 		await signup(username, email, password);
		// 		toast.success('Signup successful!');
		// 	} catch (error) {
		// 		console.error('Signup failed:', error);
		// 		toast.error(`Signup failed: ${error.message}`);
		// 	} finally {
		// 		isLoading = false;
		// 		resetForm();
		// 	}
	};
</script>

<Dialog.Root>
	<Dialog.Trigger class={[buttonVariants({ variant: 'secondary' }), 'flex items-center gap-2']}
		><LogIn class="h-4 w-4" /> Sign In / Sign Up</Dialog.Trigger
	>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Welcome {Tabs.Root.value === 'signin' ? 'back' : ''} to Codex!</Dialog.Title>
			<Dialog.Description>Sign in or sign up to continue.</Dialog.Description>
		</Dialog.Header>
		<Tabs.Root value="signin">
			<Tabs.List class="text-center">
				<Tabs.Trigger value="signin">Sign In</Tabs.Trigger>
				<Tabs.Trigger value="signup">Sign Up</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="signin" class="mt-5 space-y-5">
				<Input bind:value={email} type="email" placeholder="Email" />
				<Input bind:value={password} type="password" placeholder="Password" />
				<Button class="w-full" on:click={handleSignin} disabled={isLoading}>
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
				<Button class="w-full" on:click={handleSignup} disabled={isLoading}>
					{#if isLoading}
						<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					{/if}
					Sign up
				</Button>
			</Tabs.Content>
		</Tabs.Root>
	</Dialog.Content>
</Dialog.Root>
