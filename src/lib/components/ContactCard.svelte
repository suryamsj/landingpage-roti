<script lang="ts">
	import type { ComponentType, Snippet } from 'svelte';

	interface Props {
		title: string;
		icon: ComponentType;
		iconColor?: string;
		children: Snippet;
	}

	let { title, icon: Icon, iconColor = 'text-primary-500', children }: Props = $props();
</script>

<div class="card-soft p-8 transition-all duration-400 hover:-translate-y-1">
	<h3 class="mb-3 flex items-center gap-2 font-heading text-xl font-bold text-neutral-800">
		<Icon class="h-5 w-5 {iconColor}" />
		{title}
	</h3>
	{@render children()}
</div>
