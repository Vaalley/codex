<script>
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
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
			<Tabs.Content value="signin">
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<Button>Sign in</Button>
			</Tabs.Content>
			<Tabs.Content value="signup">
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<Button>Sign up</Button>
			</Tabs.Content>
		</Tabs.Root>
	</Dialog.Content>
</Dialog.Root>
