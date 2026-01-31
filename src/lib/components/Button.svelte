<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';

	interface Props {
		variant?: 'primary' | 'secondary' | 'outline';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		type?: 'button' | 'submit';
		class?: string;
		children: import('svelte').Snippet;
	}

	let {
		variant = 'primary',
		size = 'md',
		href,
		type = 'button',
		class: className = '',
		children
	}: Props = $props();

	const baseStyles = `
		inline-flex items-center justify-center font-medium rounded-lg
		transition-all duration-300 ease-out
		focus:outline-none focus:ring-2 focus:ring-offset-2
		disabled:opacity-50 disabled:cursor-not-allowed
		transform hover:scale-[1.02] active:scale-[0.98]
	`;

	const variants = {
		primary: `
			bg-[var(--color-primary-600)] text-white
			hover:bg-[var(--color-primary-700)]
			focus:ring-[var(--color-primary-500)]
			shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)]
		`,
		secondary: `
			bg-[var(--color-cream-200)] text-[var(--color-primary-800)]
			hover:bg-[var(--color-cream-300)]
			focus:ring-[var(--color-cream-400)]
		`,
		outline: `
			border-2 border-[var(--color-primary-600)] text-[var(--color-primary-600)]
			hover:bg-[var(--color-primary-600)] hover:text-white
			focus:ring-[var(--color-primary-500)]
		`
	};

	const sizes = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg'
	};

	const classes = $derived(`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`);
</script>

{#if href}
	<a {href} class={classes}>
		{@render children()}
	</a>
{:else}
	<button {type} class={classes}>
		{@render children()}
	</button>
{/if}
