<script lang="ts">
	import type { ComponentType } from 'svelte';

	interface Props {
		icon: ComponentType;
		step: string;
		title: string;
		description: string;
	}

	let { icon: Icon, step, title, description }: Props = $props();
</script>

<div
	class="card-soft group relative px-6 py-8 text-center transition-all duration-400 hover:-translate-y-1.5"
>
	<!-- Step number badge -->
	<div
		class="absolute -top-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-linear-to-br from-primary-400 to-primary-600 text-sm font-bold text-white shadow-md"
	>
		{step}
	</div>

	<!-- Icon container -->
	<div
		class="neu-inset mx-auto mt-2 mb-4 flex h-14 w-14 items-center justify-center rounded-lg text-primary-500"
	>
		<Icon class="h-6 w-6" />
	</div>

	<!-- Title -->
	<h3 class="mb-2 font-heading text-lg font-bold text-neutral-800">
		{title}
	</h3>

	<!-- Description -->
	<p class="text-sm leading-relaxed text-neutral-600">
		{description}
	</p>
</div>
