<script lang="ts">
	interface Testimonial {
		quote: string;
		name: string;
		role?: string;
	}

	interface Props {
		testimonial: Testimonial;
		index?: number;
	}

	let { testimonial, index = 0 }: Props = $props();
</script>

<article
	class="card-soft group relative cursor-pointer overflow-hidden p-6 transition-all duration-400 hover:-translate-y-1 md:p-8"
>
	<!-- Quote Icon with animation -->
	<div
		class="absolute top-4 right-4 font-serif text-5xl leading-none text-primary-200 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-primary-300"
	>
		"
	</div>

	<div class="relative">
		<blockquote
			class="mb-6 text-base leading-relaxed text-neutral-700 italic transition-colors duration-300 group-hover:text-neutral-800 md:text-lg"
		>
			"{testimonial.quote}"
		</blockquote>

		<footer class="flex items-center gap-3">
			<div
				class="neu-inset flex h-10 w-10 items-center justify-center rounded-full transition-all duration-400 group-hover:bg-primary-100"
			>
				<span class="font-semibold text-primary-600">
					{testimonial.name.charAt(0)}
				</span>
			</div>
			<div>
				<cite class="block font-bold text-neutral-800 not-italic transition-colors duration-300">
					{testimonial.name}
				</cite>
				{#if testimonial.role}
					<p
						class="text-sm text-neutral-500 transition-colors duration-300 group-hover:text-primary-500"
					>
						{testimonial.role}
					</p>
				{/if}
			</div>
		</footer>
	</div>
</article>
