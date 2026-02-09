<script lang="ts">
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	interface Product {
		name: string;
		description: string;
		price: string;
		image: string;
		leadTime?: string;
		minOrder?: string;
	}

	interface Props {
		product: Product;
		index?: number;
	}

	let { product, index = 0 }: Props = $props();
</script>

<article class="card-soft group cursor-pointer overflow-hidden">
	<div class="relative aspect-4/3 overflow-hidden rounded-t-2xl">
		<img
			src={product.image}
			alt={product.name}
			class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
			loading="lazy"
		/>
		<div
			class="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
		></div>

		<!-- Pre-Order Badge -->
		<div class="absolute top-4 left-4">
			<span class="badge-soft">Pre-Order</span>
		</div>

		<!-- Lead Time Badge -->
		{#if product.leadTime}
			<div class="absolute top-4 right-4">
				<span
					class="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur-sm"
				>
					{product.leadTime}
				</span>
			</div>
		{/if}
	</div>

	<div class="bg-cream-50 p-5 md:p-6">
		<h3
			class="mb-2 font-heading text-xl font-bold text-neutral-800 transition-colors duration-300 group-hover:text-primary-600 md:text-2xl"
		>
			{product.name}
		</h3>
		<p class="mb-4 line-clamp-2 text-sm text-neutral-600 md:text-base">
			{product.description}
		</p>
		<div class="flex items-center justify-between">
			<span class="text-lg font-bold text-primary-600 md:text-xl">
				{product.price}
			</span>
			{#if product.minOrder}
				<span class="text-xs text-neutral-500">
					Min. {product.minOrder}
				</span>
			{:else}
				<span class="rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-500">
					Fresh to Order
				</span>
			{/if}
		</div>
	</div>
</article>
