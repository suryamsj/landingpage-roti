<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	interface Props {
		title: string;
		subtitle?: string;
		align?: 'left' | 'center' | 'right';
		class?: string;
	}

	let { title, subtitle, align = 'center', class: className = '' }: Props = $props();

	const alignClasses = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right'
	};
</script>

<div class="{alignClasses[align]} mb-8 md:mb-12 {className}">
	<h2 class="mb-4 text-3xl font-semibold text-[var(--color-primary-800)] md:text-4xl lg:text-5xl">
		{title}
	</h2>
	{#if subtitle}
		<p
			class="max-w-2xl text-lg text-[var(--color-neutral-600)] md:text-xl {align === 'center'
				? 'mx-auto'
				: ''}"
		>
			{subtitle}
		</p>
	{/if}
</div>
