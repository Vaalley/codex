<script>
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Tabs from '$lib/components/ui/tabs';
</script>

<Dialog.Root>
	<Dialog.Trigger>SignIn / SignUp</Dialog.Trigger>
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
			<Tabs.Content value="signin">Sign in form here</Tabs.Content>
			<Tabs.Content value="signup">Sign up form here</Tabs.Content>
		</Tabs.Root>
	</Dialog.Content>
</Dialog.Root>
