<script lang="ts">
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	interface Product {
		name: string;
		description: string;
		price: string;
		image: string;
	}

	interface Props {
		product: Product;
		index?: number;
	}

	let { product, index = 0 }: Props = $props();
</script>

<article class="group card-hover overflow-hidden rounded-xl bg-white shadow-[var(--shadow-soft)]">
	<div class="relative aspect-[4/3] overflow-hidden">
		<img
			src={product.image}
			alt={product.name}
			class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
			loading="lazy"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
		></div>

		<!-- Badge that appears on hover -->
		<div
			class="absolute top-4 right-4 translate-y-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
		>
			<span
				class="rounded-full bg-[var(--color-primary-600)] px-3 py-1.5 text-xs font-medium text-white shadow-lg"
			>
				Best Seller
			</span>
		</div>
	</div>

	<div class="p-5 md:p-6">
		<h3
			class="mb-2 font-heading text-xl font-semibold text-[var(--color-primary-800)] transition-colors duration-300 group-hover:text-[var(--color-primary-600)] md:text-2xl"
		>
			{product.name}
		</h3>
		<p class="mb-4 line-clamp-2 text-sm text-[var(--color-neutral-600)] md:text-base">
			{product.description}
		</p>
		<div class="flex items-center justify-between">
			<span
				class="text-lg font-semibold text-[var(--color-primary-700)] transition-transform duration-300 group-hover:scale-105 md:text-xl"
			>
				{product.price}
			</span>
			<span
				class="rounded-full bg-[var(--color-cream-100)] px-3 py-1 text-xs text-[var(--color-neutral-500)] transition-all duration-300 group-hover:bg-[var(--color-primary-100)] group-hover:text-[var(--color-primary-700)]"
			>
				Fresh Daily
			</span>
		</div>
	</div>
</article>

<style>
	.font-heading {
		font-family: var(--font-heading);
	}

	.line-clamp-2 {
		display: -webkit-box;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-hover {
		transition:
			transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
			box-shadow 0.4s ease;
	}

	.card-hover:hover {
		transform: translateY(-8px);
		box-shadow: 0 20px 40px oklch(0.25 0.02 45 / 0.15);
	}
</style>
