<script lang="ts">
	import { Menu, X, Croissant } from 'lucide-svelte';
	import { fade, fly, slide, scale } from 'svelte/transition';
	import { quintOut, backOut } from 'svelte/easing';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '#home', label: 'Beranda' },
		{ href: '#menu', label: 'Menu PO' },
		{ href: '#how-to-order', label: 'Cara Order' },
		{ href: '#reviews', label: 'Testimoni' },
		{ href: '#contact', label: 'Kontak' }
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav
	class="sticky top-0 z-40 bg-linear-to-br from-cream-100/95 to-cream-200/95 shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_-1px_0_rgba(255,255,255,0.5)] backdrop-blur-md"
>
	<div class="container-custom">
		<div class="flex h-16 items-center justify-between md:h-20">
			<!-- Logo -->
			<a href="/" class="group flex items-center gap-3">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary-400 to-primary-600 shadow-[−3px_-3px_6px_rgba(255,255,255,0.8),3px_3px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:scale-110 md:h-12 md:w-12"
				>
					<Croissant class="h-5 w-5 text-white md:h-6 md:w-6" />
				</div>
				<div class="flex flex-col">
					<span
						class="font-heading text-xl font-bold text-neutral-800 transition-colors group-hover:text-primary-600 md:text-2xl"
					>
						Roti Artisan
					</span>
					<span class="hidden text-xs text-neutral-500 md:block">Open Order</span>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-8 md:flex">
				{#each navLinks as link}
					<a
						href={link.href}
						class="relative font-medium text-neutral-600 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary-500 after:transition-all after:duration-300 hover:text-primary-600 hover:after:w-full"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				type="button"
				onclick={toggleMobileMenu}
				class="neu-flat flex cursor-pointer items-center justify-center rounded-lg p-2 text-neutral-700 transition-all duration-200 hover:bg-cream-200 active:shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.8),inset_2px_2px_4px_rgba(0,0,0,0.04)] lg:hidden"
				aria-label="Toggle mobile menu"
				aria-expanded={mobileMenuOpen}
			>
				{#if mobileMenuOpen}
					<div in:scale={{ start: 0.5, duration: 200 }} out:scale={{ start: 0.5, duration: 150 }}>
						<X class="h-6 w-6" />
					</div>
				{:else}
					<div in:scale={{ start: 0.5, duration: 200 }} out:scale={{ start: 0.5, duration: 150 }}>
						<Menu class="h-6 w-6" />
					</div>
				{/if}
			</button>
		</div>
	</div>
</nav>

<!-- Mobile Menu Drawer -->
{#if mobileMenuOpen}
	<button
		type="button"
		class="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm md:hidden"
		onclick={closeMobileMenu}
		aria-label="Tutup menu"
		transition:fade={{ duration: 250 }}
	></button>

	<div
		class="fixed top-0 right-0 z-60 h-full w-72 bg-linear-to-br from-[#faf5f0] to-[#f5eee6] shadow-[-8px_0_24px_rgba(0,0,0,0.1)] md:hidden"
		transition:fly={{ x: 288, duration: 350, easing: backOut }}
	>
		<div class="p-6">
			<button
				type="button"
				onclick={closeMobileMenu}
				class="neu-flat absolute top-4 right-4 flex cursor-pointer items-center justify-center rounded-full p-2.5 text-neutral-700 transition-all duration-200 hover:rotate-90 hover:bg-cream-200"
				aria-label="Tutup menu"
				in:fly={{ y: -20, delay: 200, duration: 300, easing: backOut }}
			>
				<X class="h-6 w-6" />
			</button>

			<div
				class="flex items-center gap-3 border-b border-cream-300 pb-4"
				in:fly={{ x: 20, delay: 100, duration: 300, easing: quintOut }}
			>
				<div
					class="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary-400 to-primary-600"
				>
					<Croissant class="h-5 w-5 text-white" />
				</div>
				<span class="font-heading text-lg font-bold text-neutral-800"> Roti Artisan </span>
			</div>

			<div class="mt-6 flex flex-col gap-1">
				{#each navLinks as link, i}
					<a
						href={link.href}
						onclick={closeMobileMenu}
						class="rounded-lg p-3 text-lg font-medium text-neutral-700 transition-all duration-200 hover:translate-x-2 hover:bg-cream-200 hover:text-primary-600"
						in:fly={{ x: 40, delay: 150 + i * 50, duration: 300, easing: quintOut }}
					>
						{link.label}
					</a>
				{/each}
			</div>

			<div
				class="absolute right-6 bottom-8 left-6"
				in:fly={{ y: 20, delay: 400, duration: 300, easing: quintOut }}
			>
				<p class="mb-3 text-center text-sm text-neutral-500">Pesan roti fresh sekarang!</p>
				<a
					href="#how-to-order"
					onclick={closeMobileMenu}
					class="block w-full rounded-xl bg-linear-to-br from-primary-400 to-primary-600 py-3.5 text-center font-semibold text-white shadow-[−4px_-4px_8px_rgba(255,255,255,0.6),4px_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
				>
					Cara Order
				</a>
			</div>
		</div>
	</div>
{/if}
