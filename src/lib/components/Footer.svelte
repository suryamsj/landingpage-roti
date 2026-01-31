<script lang="ts">
	import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Wheat, ArrowUp } from 'lucide-svelte';
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: Facebook, label: 'Facebook', href: '#' },
		{ icon: Instagram, label: 'Instagram', href: '#' },
		{ icon: Twitter, label: 'Twitter', href: '#' }
	];

	const quickLinks = [
		{ label: 'Beranda', href: '#home' },
		{ label: 'Menu', href: '#menu' },
		{ label: 'Tentang Kami', href: '#story' },
		{ label: 'Testimoni', href: '#reviews' },
		{ label: 'Lokasi', href: '#visit' }
	];
</script>

<footer class="relative overflow-hidden bg-[var(--color-primary-800)] text-white">
	<!-- Decorative element -->
	<div
		class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[var(--color-primary-400)] via-[var(--color-cream-300)] to-[var(--color-primary-400)]"
	></div>

	<div class="container-custom py-12 md:py-16">
		<div class="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
			<!-- Brand -->
			<div>
				<div class="group mb-4 flex items-center gap-3">
					<div
						class="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20"
					>
						<Wheat
							class="h-6 w-6 text-white transition-transform duration-500 group-hover:rotate-12"
						/>
					</div>
					<span class="font-heading text-2xl font-semibold">Roti Artisan</span>
				</div>
				<p class="mb-6 leading-relaxed text-[var(--color-primary-200)]">
					Bakery keluarga, dipanggang dengan cinta. Menghadirkan roti dan pastry artisan dengan
					resep turun-temurun sejak 1998.
				</p>
				<div class="flex gap-3">
					{#each socialLinks as link, i}
						<a
							href={link.href}
							class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-white/20"
							aria-label={link.label}
							style="transition-delay: {i * 50}ms"
						>
							<link.icon class="h-5 w-5" />
						</a>
					{/each}
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 font-heading text-lg font-semibold">Menu Cepat</h3>
				<ul class="space-y-2">
					{#each quickLinks as link, i}
						<li>
							<a
								href={link.href}
								class="inline-flex items-center gap-2 text-[var(--color-primary-200)] transition-all duration-300 hover:translate-x-2 hover:text-white"
							>
								<span class="text-xs transition-transform duration-300">→</span>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="mb-4 font-heading text-lg font-semibold">Kunjungi Kami</h3>
				<address class="space-y-3 text-[var(--color-primary-200)] not-italic">
					<p class="group flex items-start gap-3 transition-colors duration-300 hover:text-white">
						<MapPin
							class="mt-0.5 h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
						/>
						<span>Jl. Roti Hangat No. 123, Jakarta Selatan, 12345</span>
					</p>
					<p class="group flex items-center gap-3">
						<Phone
							class="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
						/>
						<a href="tel:+6221123456789" class="transition-colors hover:text-white"
							>(021) 1234-5678</a
						>
					</p>
					<p class="group flex items-center gap-3">
						<Mail
							class="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
						/>
						<a href="mailto:halo@rotiartisan.id" class="transition-colors hover:text-white"
							>halo@rotiartisan.id</a
						>
					</p>
				</address>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="border-t border-white/10">
		<div
			class="container-custom flex flex-col items-center justify-between gap-4 py-6 text-sm text-[var(--color-primary-300)] md:flex-row"
		>
			<p>© {currentYear} Roti Artisan. Hak cipta dilindungi.</p>
			<p class="flex items-center gap-1">
				Dibuat dengan <span class="animate-pulse text-red-400">♥</span> dan tepung berkualitas
			</p>
		</div>
	</div>

	<!-- Back to top button -->
	<a
		href="#home"
		class="absolute right-6 bottom-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-white/20 md:bottom-6"
		aria-label="Kembali ke atas"
	>
		<ArrowUp class="h-5 w-5" />
	</a>
</footer>

<style>
	.font-heading {
		font-family: var(--font-heading);
	}
</style>
