<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { HelpCircle, ChevronDown } from 'lucide-svelte';

	interface Props {
		question: string;
		answer: string;
		isOpen: boolean;
		onToggle: () => void;
	}

	let { question, answer, isOpen, onToggle }: Props = $props();
</script>

<div class="card-soft overflow-hidden">
	<button
		type="button"
		class="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left font-semibold text-neutral-800 transition-colors duration-300 hover:bg-cream-100"
		onclick={onToggle}
		aria-expanded={isOpen}
	>
		<span class="flex items-center gap-3">
			<HelpCircle class="h-5 w-5 shrink-0 text-primary-500" />
			{question}
		</span>
		<ChevronDown
			class="h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300 {isOpen
				? 'rotate-180'
				: ''}"
		/>
	</button>
	{#if isOpen}
		<div
			class="px-6 pb-5 leading-relaxed text-neutral-600"
			transition:slide={{ duration: 300, easing: quintOut }}
		>
			<p>{answer}</p>
		</div>
	{/if}
</div>
