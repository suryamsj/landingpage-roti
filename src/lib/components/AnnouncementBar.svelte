<script lang="ts">
	import { Croissant } from 'lucide-svelte';
</script>

<div
	class="relative overflow-hidden bg-linear-to-br from-primary-500 to-primary-600 px-4 py-2.5 text-center text-white"
>
	<div
		class="animate-shimmer absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
	></div>
	<p class="relative flex items-center justify-center gap-2 text-sm md:text-base">
		<Croissant class="h-4 w-4" />
		Open Order setiap hari! Pesan H-2/H-3 untuk roti fresh from oven
		<Croissant class="h-4 w-4" />
	</p>
</div>
