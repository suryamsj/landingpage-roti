<script lang="ts">
	import { Menu, X, Wheat } from 'lucide-svelte';
	import { fade, fly, slide, scale } from 'svelte/transition';
	import { quintOut, backOut } from 'svelte/easing';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '#home', label: 'Beranda' },
		{ href: '#menu', label: 'Menu' },
		{ href: '#story', label: 'Tentang Kami' },
		{ href: '#reviews', label: 'Testimoni' },
		{ href: '#visit', label: 'Lokasi' }
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav
	class="sticky top-0 z-40 border-b border-[var(--color-cream-200)] bg-white/95 shadow-[var(--shadow-soft)] backdrop-blur-md"
>
	<div class="container-custom">
		<div class="flex h-16 items-center justify-between md:h-20">
			<!-- Logo -->
			<a href="/" class="group flex items-center gap-3">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-600)] transition-transform duration-300 group-hover:scale-110 md:h-12 md:w-12"
				>
					<Wheat class="h-5 w-5 text-white md:h-6 md:w-6" />
				</div>
				<div class="flex flex-col">
					<span
						class="font-heading text-xl font-semibold text-[var(--color-primary-800)] transition-colors group-hover:text-[var(--color-primary-600)] md:text-2xl"
					>
						Roti Artisan
					</span>
					<span class="hidden text-xs text-[var(--color-neutral-500)] md:block"> Sejak 1998 </span>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-8 md:flex">
				{#each navLinks as link}
					<a
						href={link.href}
						class="relative font-medium text-[var(--color-neutral-700)] transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[var(--color-primary-600)] after:transition-all after:duration-300 hover:text-[var(--color-primary-600)] hover:after:w-full"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				type="button"
				onclick={toggleMobileMenu}
				class="relative rounded-lg p-2 text-[var(--color-neutral-700)] transition-all duration-200 hover:scale-105 hover:bg-[var(--color-cream-100)] active:scale-95 md:hidden"
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

<!-- Mobile Menu Drawer - Outside nav to avoid stacking context issues -->
{#if mobileMenuOpen}
	<!-- Backdrop with fade transition -->
	<button
		type="button"
		class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
		onclick={closeMobileMenu}
		aria-label="Tutup menu"
		transition:fade={{ duration: 250 }}
	></button>

	<!-- Drawer with fly transition -->
	<div
		class="fixed top-0 right-0 z-[60] h-full w-72 bg-white shadow-2xl md:hidden"
		transition:fly={{ x: 288, duration: 350, easing: backOut }}
	>
		<div class="p-6">
			<!-- Close button with scale animation -->
			<button
				type="button"
				onclick={closeMobileMenu}
				class="absolute top-4 right-4 rounded-full p-2.5 text-[var(--color-neutral-700)] transition-all duration-200 hover:scale-110 hover:rotate-90 hover:bg-[var(--color-cream-100)]"
				aria-label="Tutup menu"
				in:fly={{ y: -20, delay: 200, duration: 300, easing: backOut }}
			>
				<X class="h-6 w-6" />
			</button>

			<!-- Logo in drawer -->
			<div
				class="flex items-center gap-3 border-b border-[var(--color-cream-200)] pb-4"
				in:fly={{ x: 20, delay: 100, duration: 300, easing: quintOut }}
			>
				<div
					class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-600)]"
				>
					<Wheat class="h-5 w-5 text-white" />
				</div>
				<span class="font-heading text-lg font-semibold text-[var(--color-primary-800)]">
					Roti Artisan
				</span>
			</div>

			<!-- Nav links with staggered animation -->
			<div class="mt-6 flex flex-col gap-1">
				{#each navLinks as link, i}
					<a
						href={link.href}
						onclick={closeMobileMenu}
						class="nav-link rounded-lg px-3 py-3 text-lg font-medium text-[var(--color-neutral-700)] transition-all duration-200 hover:translate-x-2 hover:bg-[var(--color-cream-100)] hover:text-[var(--color-primary-600)]"
						in:fly={{ x: 40, delay: 150 + i * 50, duration: 300, easing: quintOut }}
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- CTA at bottom -->
			<div
				class="absolute right-6 bottom-8 left-6"
				in:fly={{ y: 20, delay: 400, duration: 300, easing: quintOut }}
			>
				<p class="mb-3 text-center text-sm text-[var(--color-neutral-500)]">
					Kunjungi kami hari ini!
				</p>
				<a
					href="#visit"
					onclick={closeMobileMenu}
					class="block w-full rounded-full bg-[var(--color-primary-600)] py-3 text-center font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[var(--color-primary-700)] active:scale-[0.98]"
				>
					Lihat Lokasi
				</a>
			</div>
		</div>
	</div>
{/if}

<style>
	.font-heading {
		font-family: var(--font-heading);
	}

	.nav-link {
		position: relative;
	}

	.nav-link::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%) scaleX(0);
		width: 3px;
		height: 60%;
		background: var(--color-primary-600);
		border-radius: 9999px;
		transition: transform 0.2s ease;
	}

	.nav-link:hover::before {
		transform: translateY(-50%) scaleX(1);
	}
</style>
