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
		inline-flex items-center justify-center font-semibold
		transition-all duration-300 ease-out cursor-pointer
		focus:outline-none focus:ring-2 focus:ring-offset-2
		disabled:opacity-50 disabled:cursor-not-allowed
		transform active:scale-[0.97]
	`;

	const variants = {
		primary: `
			bg-[var(--color-primary-500)] text-white
			hover:bg-[var(--color-primary-600)]
			focus:ring-[var(--color-primary-400)]
			rounded-[var(--radius-xl)]
			shadow-[var(--shadow-neumorphic-light),var(--shadow-neumorphic-dark)]
			hover:shadow-[-8px_-8px_16px_rgba(255,255,255,0.9),8px_8px_16px_rgba(0,0,0,0.12)]
		`,
		secondary: `
			bg-[var(--color-cream-100)] text-[var(--color-neutral-700)]
			hover:bg-[var(--color-cream-200)]
			focus:ring-[var(--color-cream-400)]
			rounded-[var(--radius-xl)]
			shadow-[var(--shadow-neumorphic-light),var(--shadow-neumorphic-dark)]
			hover:shadow-[-8px_-8px_16px_rgba(255,255,255,0.9),8px_8px_16px_rgba(0,0,0,0.12)]
		`,
		outline: `
			border-2 border-[var(--color-primary-400)] text-[var(--color-primary-600)]
			bg-transparent
			hover:bg-[var(--color-primary-100)] hover:border-[var(--color-primary-500)]
			focus:ring-[var(--color-primary-400)]
			rounded-[var(--radius-xl)]
		`
	};

	const sizes = {
		sm: 'px-5 py-2.5 text-sm',
		md: 'px-7 py-3.5 text-base',
		lg: 'px-9 py-4.5 text-lg'
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
