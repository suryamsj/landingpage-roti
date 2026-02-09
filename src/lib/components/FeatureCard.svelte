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
	class="group card-soft flex cursor-pointer items-start gap-4 bg-cream-50 p-5 transition-all duration-400 hover:-translate-y-1 md:p-6"
>
	<div
		class="icon-neu flex h-12 w-12 shrink-0 items-center justify-center transition-all duration-400 group-hover:bg-primary-100 md:h-14 md:w-14"
	>
		<Icon
			class="h-6 w-6 text-primary-500 transition-all duration-500 group-hover:scale-110 group-hover:text-primary-600 md:h-7 md:w-7"
		/>
	</div>

	<div>
		<h3
			class="mb-2 font-heading text-lg font-bold text-neutral-800 transition-colors duration-300 group-hover:text-primary-600 md:text-xl"
		>
			{title}
		</h3>
		<p class="text-sm leading-relaxed text-neutral-600 md:text-base">
			{description}
		</p>
	</div>
</article>
