<script>
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { signup, signin } from '$lib/databaseOperations';

	let username = $state('');
	let email = $state('');
	let password = $state('');

	const resetForm = () => {
		username = '';
		email = '';
		password = '';
	};

	const handleSignup = async () => {
		await signup(username, email, password);
		resetForm();
	};

	const handleSignin = async () => {
		await signin(email, password);
		resetForm();
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
				<Button on:click={handleSignin}>Sign in</Button>
			</Tabs.Content>
			<Tabs.Content value="signup" class="mt-5 space-y-5">
				<Input bind:value={username} type="text" placeholder="Username" />
				<Input bind:value={email} type="email" placeholder="Email" />
				<Input bind:value={password} type="password" placeholder="Password" />
				<Button on:click={handleSignup}>Sign up</Button>
			</Tabs.Content>
		</Tabs.Root>
	</Dialog.Content>
</Dialog.Root>
