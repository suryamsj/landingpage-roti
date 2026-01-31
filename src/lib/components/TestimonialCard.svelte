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
	class="group relative overflow-hidden rounded-xl bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-medium)] md:p-8"
>
	<!-- Decorative gradient that appears on hover -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-50)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
	></div>

	<!-- Quote Icon with animation -->
	<div
		class="absolute top-4 right-4 font-serif text-5xl leading-none text-[var(--color-primary-200)] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-[var(--color-primary-300)]"
	>
		"
	</div>

	<div class="relative">
		<blockquote
			class="mb-6 text-base leading-relaxed text-[var(--color-neutral-700)] italic transition-colors duration-300 group-hover:text-[var(--color-neutral-800)] md:text-lg"
		>
			"{testimonial.quote}"
		</blockquote>

		<footer class="flex items-center gap-3">
			<div
				class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-100)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-primary-200)]"
			>
				<span class="font-medium text-[var(--color-primary-600)]">
					{testimonial.name.charAt(0)}
				</span>
			</div>
			<div>
				<cite
					class="block font-semibold text-[var(--color-primary-800)] not-italic transition-colors duration-300"
				>
					{testimonial.name}
				</cite>
				{#if testimonial.role}
					<p
						class="text-sm text-[var(--color-neutral-500)] transition-colors duration-300 group-hover:text-[var(--color-primary-500)]"
					>
						{testimonial.role}
					</p>
				{/if}
			</div>
		</footer>
	</div>

	<!-- Animated border accent -->
	<div
		class="absolute bottom-0 left-0 h-1 w-0 rounded-b-xl bg-gradient-to-r from-[var(--color-primary-400)] to-[var(--color-primary-600)] transition-all duration-500 group-hover:w-full"
	></div>
</article>
