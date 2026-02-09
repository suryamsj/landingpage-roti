<script lang="ts">
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

<div class="{alignClasses[align]} mb-10 md:mb-14 {className}">
	<h2
		class="relative mb-4 inline-block font-heading text-3xl font-bold text-neutral-800 md:text-4xl lg:text-5xl"
	>
		{title}
	</h2>
	{#if subtitle}
		<p class="max-w-2xl text-lg text-neutral-600 md:text-xl {align === 'center' ? 'mx-auto' : ''}">
			{subtitle}
		</p>
	{/if}
</div>
