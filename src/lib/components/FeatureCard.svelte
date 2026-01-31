<script lang="ts">
	import type { ComponentType } from 'svelte';

	interface Props {
		icon: ComponentType;
		title: string;
		description: string;
		index?: number;
	}

	let { icon: Icon, title, description, index = 0 }: Props = $props();
</script>

<article
	class="group flex items-start gap-4 rounded-xl bg-white p-5 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-medium)] md:p-6"
>
	<div
		class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-100)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[var(--color-primary-600)] md:h-14 md:w-14"
	>
		<Icon
			class="h-6 w-6 text-[var(--color-primary-600)] transition-colors duration-500 group-hover:text-white md:h-7 md:w-7"
		/>
	</div>

	<div>
		<h3
			class="mb-2 font-heading text-lg font-semibold text-[var(--color-primary-800)] transition-colors duration-300 group-hover:text-[var(--color-primary-600)] md:text-xl"
		>
			{title}
		</h3>
		<p class="text-sm leading-relaxed text-[var(--color-neutral-600)] md:text-base">
			{description}
		</p>
	</div>
</article>

<style>
	.font-heading {
		font-family: var(--font-heading);
	}
</style>
