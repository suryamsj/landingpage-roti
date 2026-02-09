<script lang="ts">
	import { Instagram, MapPin, Phone, Mail, Croissant, ArrowUp, MessageCircle } from 'lucide-svelte';

	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: Instagram, label: 'Instagram', href: 'https://instagram.com/rotiartisan' },
		{ icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/123456' }
	];

	const quickLinks = [
		{ label: 'Beranda', href: '#home' },
		{ label: 'Menu PO', href: '#menu' },
		{ label: 'Cara Order', href: '#how-to-order' },
		{ label: 'Testimoni', href: '#reviews' },
		{ label: 'FAQ', href: '#faq' }
	];
</script>

<footer class="relative overflow-hidden bg-linear-to-b from-cream-100 to-cream-200">
	<!-- Decorative top border -->
	<div
		class="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-primary-300 via-accent-300 to-primary-300"
	></div>

	<div class="container-custom py-12 md:py-16">
		<div class="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
			<!-- Brand -->
			<div>
				<div class="group mb-4 flex items-center gap-3">
					<div
						class="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-primary-400 to-primary-600 shadow-[−4px_-4px_8px_rgba(255,255,255,0.8),4px_4px_8px_rgba(0,0,0,0.1)]"
					>
						<Croissant class="h-6 w-6 text-white" />
					</div>
					<div>
						<span class="font-heading text-2xl font-bold text-neutral-800">Roti Artisan</span>
						<span class="block text-xs text-neutral-500">Open Order</span>
					</div>
				</div>
				<p class="mb-6 leading-relaxed text-neutral-600">
					Roti dan pastry artisan dibuat fresh to order dengan resep turun-temurun. Pesan sekarang,
					nikmati kesegaran maksimal!
				</p>
				<div class="flex gap-3">
					{#each socialLinks as link, i}
						<a
							href={link.href}
							class="neu-flat flex h-10 w-10 items-center justify-center rounded-full text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary-600"
							aria-label={link.label}
							target="_blank"
							rel="noopener noreferrer"
						>
							<link.icon class="h-5 w-5" />
						</a>
					{/each}
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 font-heading text-lg font-bold text-neutral-800">Menu Cepat</h3>
				<ul class="space-y-2">
					{#each quickLinks as link}
						<li>
							<a
								href={link.href}
								class="group/link inline-flex items-center gap-2 text-neutral-600 transition-all duration-300 hover:translate-x-2 hover:text-primary-600"
							>
								<span
									class="text-xs transition-transform duration-300 group-hover/link:translate-x-1"
									>→</span
								>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact & Order -->
			<div>
				<h3 class="mb-4 font-heading text-lg font-bold text-neutral-800">Hubungi Kami</h3>
				<address class="space-y-3 text-neutral-600 not-italic">
					<p class="flex items-center gap-3">
						<MessageCircle class="h-4 w-4 shrink-0" />
						<a
							href="https://wa.me/123456"
							class="transition-colors hover:text-primary-600"
							target="_blank"
							rel="noopener noreferrer"
						>
							0812-3456-7890 (WhatsApp)
						</a>
					</p>
					<p class="flex items-center gap-3">
						<Instagram class="h-4 w-4 shrink-0" />
						<a
							href="https://instagram.com/rotiartisan"
							class="transition-colors hover:text-primary-600"
							target="_blank"
							rel="noopener noreferrer"
						>
							@rotiartisan
						</a>
					</p>
					<p class="flex items-center gap-3">
						<Mail class="h-4 w-4 shrink-0" />
						<a href="mailto:order@rotiartisan.id" class="transition-colors hover:text-primary-600">
							order@rotiartisan.id
						</a>
					</p>
					<p class="flex items-center gap-3">
						<MapPin class="h-4 w-4 shrink-0" />
						<span>Jakarta Selatan (Self Pickup)</span>
					</p>
				</address>

				<!-- Order CTA -->
				<a
					href="https://wa.me/123456?text=Halo, saya ingin order roti"
					class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-br from-[#25d366] to-[#128c7e] px-6 py-3.5 font-semibold text-white shadow-[−4px_-4px_8px_rgba(255,255,255,0.6),4px_4px_8px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5"
					target="_blank"
					rel="noopener noreferrer"
				>
					<MessageCircle class="h-5 w-5" />
					Pesan via WhatsApp
				</a>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="border-t border-cream-300">
		<div
			class="container-custom flex flex-col items-center justify-between gap-4 py-6 text-sm text-neutral-500 md:flex-row"
		>
			<p>© {currentYear} Roti Artisan. Hak cipta dilindungi.</p>
			<p class="flex items-center gap-1">
				Dibuat dengan <span class="text-primary-500">♥</span> dan tepung berkualitas
			</p>
		</div>
	</div>

	<!-- Back to top button -->
	<a
		href="#home"
		class="neu-flat absolute right-6 bottom-20 flex h-10 w-10 items-center justify-center rounded-full text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary-600 md:bottom-6"
		aria-label="Kembali ke atas"
	>
		<ArrowUp class="h-5 w-5" />
	</a>
</footer>
