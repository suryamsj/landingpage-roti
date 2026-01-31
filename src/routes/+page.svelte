<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade, scale, blur } from 'svelte/transition';
	import { quintOut, backOut, elasticOut } from 'svelte/easing';
	import {
		Navbar,
		Button,
		SectionTitle,
		ProductCard,
		TestimonialCard,
		FeatureCard,
		Footer,
		products,
		testimonials
	} from '$lib';

	import {
		Users,
		Sunrise,
		Wheat,
		Heart,
		ScrollText,
		ShieldX,
		Timer,
		ChefHat,
		MapPin,
		Clock,
		ArrowDown
	} from 'lucide-svelte';

	// Track visibility of sections for scroll animations
	let heroVisible = $state(false);
	let trustVisible = $state(false);
	let productsVisible = $state(false);
	let whyUsVisible = $state(false);
	let testimonialsVisible = $state(false);
	let storyVisible = $state(false);
	let ctaVisible = $state(false);
	let visitVisible = $state(false);

	onMount(() => {
		heroVisible = true;

		// Create intersection observers for scroll animations
		const observerOptions = {
			threshold: 0.15,
			rootMargin: '0px 0px -50px 0px'
		};

		const createObserver = (callback: () => void) => {
			return new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						callback();
					}
				});
			}, observerOptions);
		};

		const trustObserver = createObserver(() => (trustVisible = true));
		const productsObserver = createObserver(() => (productsVisible = true));
		const whyUsObserver = createObserver(() => (whyUsVisible = true));
		const testimonialsObserver = createObserver(() => (testimonialsVisible = true));
		const storyObserver = createObserver(() => (storyVisible = true));
		const ctaObserver = createObserver(() => (ctaVisible = true));
		const visitObserver = createObserver(() => (visitVisible = true));

		// Observe elements
		const trustEl = document.getElementById('trust-section');
		const productsEl = document.getElementById('menu');
		const whyUsEl = document.getElementById('why-us-section');
		const testimonialsEl = document.getElementById('reviews');
		const storyEl = document.getElementById('story');
		const ctaEl = document.getElementById('cta-section');
		const visitEl = document.getElementById('visit');

		if (trustEl) trustObserver.observe(trustEl);
		if (productsEl) productsObserver.observe(productsEl);
		if (whyUsEl) whyUsObserver.observe(whyUsEl);
		if (testimonialsEl) testimonialsObserver.observe(testimonialsEl);
		if (storyEl) storyObserver.observe(storyEl);
		if (ctaEl) ctaObserver.observe(ctaEl);
		if (visitEl) visitObserver.observe(visitEl);

		return () => {
			trustObserver.disconnect();
			productsObserver.disconnect();
			whyUsObserver.disconnect();
			testimonialsObserver.disconnect();
			storyObserver.disconnect();
			ctaObserver.disconnect();
			visitObserver.disconnect();
		};
	});

	const trustHighlights = [
		{ icon: Users, text: 'Bisnis Keluarga Sejak 1998' },
		{ icon: Sunrise, text: 'Dipanggang Hangat Setiap Hari' },
		{ icon: Wheat, text: 'Bahan Premium Alami' },
		{ icon: Heart, text: 'Dicintai Komunitas Kami' }
	];

	const whyChooseUs = [
		{
			icon: ScrollText,
			title: 'Resep Turun-Temurun',
			description:
				'Resep warisan 3 generasi yang menjaga cita rasa otentik dan kualitas yang tak tertandingi.'
		},
		{
			icon: ShieldX,
			title: 'Tanpa Pengawet',
			description:
				'Bahan-bahan murni dan berkualitas tanpa pengawet buatan atau bahan tambahan berbahaya.'
		},
		{
			icon: Timer,
			title: 'Fermentasi Alami',
			description:
				'Proses fermentasi 24 jam untuk rasa superior dan tekstur yang lebih mudah dicerna.'
		},
		{
			icon: ChefHat,
			title: 'Small Batch Baking',
			description:
				'Setiap produk dibuat dalam batch kecil untuk menjamin kualitas dan kehangatan optimal.'
		}
	];
</script>

<svelte:head>
	<title>Roti Artisan | Roti & Pastry Hangat Setiap Hari</title>
	<meta
		name="description"
		content="Bakery keluarga yang menghadirkan roti dan pastry artisan dengan resep turun-temurun dan bahan-bahan pilihan terbaik sejak 1998. Kunjungi kami untuk roti hangat yang dibuat dengan cinta."
	/>

	<!-- SEO Meta Tags -->
	<meta
		name="keywords"
		content="roti artisan, bakery jakarta, roti hangat, pastry, bakery keluarga, roti premium, croissant, cinnamon roll"
	/>
	<meta name="author" content="Roti Artisan" />
	<link rel="canonical" href="https://rotiartisan.com/" />

	<!-- Open Graph -->
	<meta property="og:title" content="Roti Artisan | Roti & Pastry Hangat Setiap Hari" />
	<meta
		property="og:description"
		content="Bakery keluarga yang menghadirkan roti dan pastry artisan dengan resep turun-temurun dan bahan pilihan terbaik sejak 1998."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rotiartisan.com/" />
	<meta property="og:site_name" content="Roti Artisan" />
	<meta
		property="og:image"
		content="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80"
	/>
	<meta property="og:image:alt" content="Roti artisan hangat dari Roti Artisan bakery" />
	<meta property="og:locale" content="id_ID" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Roti Artisan | Roti & Pastry Hangat Setiap Hari" />
	<meta
		name="twitter:description"
		content="Bakery keluarga dengan resep turun-temurun sejak 1998 di Jakarta."
	/>
	<meta
		name="twitter:image"
		content="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80"
	/>

	<!-- JSON-LD Structured Data for LocalBusiness -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Bakery",
		"name": "Roti Artisan",
		"description": "Bakery keluarga yang menghadirkan roti dan pastry artisan dengan resep turun-temurun dan bahan-bahan pilihan terbaik sejak 1998.",
		"url": "https://rotiartisan.com",
		"telephone": "+6221-1234-5678",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Jl. Roti Hangat No. 123",
			"addressLocality": "Jakarta Selatan",
			"postalCode": "12345",
			"addressCountry": "ID"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": -6.2607,
			"longitude": 106.7816
		},
		"openingHoursSpecification": [
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				"opens": "06:00",
				"closes": "21:00"
			},
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": "Saturday",
				"opens": "07:00",
				"closes": "22:00"
			},
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": "Sunday",
				"opens": "08:00",
				"closes": "20:00"
			}
		],
		"priceRange": "$$",
		"servesCuisine": "Bakery",
		"image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80",
		"foundingDate": "1998",
		"sameAs": []
	}
	</script>`}
</svelte:head>

<!-- 1. Announcement Bar -->
<div
	class="relative overflow-hidden bg-[var(--color-primary-700)] px-4 py-2.5 text-center text-white"
>
	<div
		class="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
	></div>
	<p class="relative flex items-center justify-center gap-2 text-sm md:text-base">
		<Wheat class="h-4 w-4" />
		Dipanggang hangat setiap pagi dengan resep keluarga sejak 1998
		<Wheat class="h-4 w-4" />
	</p>
</div>

<!-- 2. Navbar -->
<Navbar />

<main id="home">
	<!-- 3. Hero Section -->
	<section class="hero-gradient relative flex min-h-[85vh] items-center overflow-hidden">
		<!-- Animated decorative elements -->
		<div class="animate-float absolute top-20 left-10 opacity-10">
			<Wheat class="h-16 w-16 rotate-12 text-[var(--color-primary-600)]" />
		</div>
		<div class="animate-float-delayed absolute right-10 bottom-20 opacity-10">
			<ChefHat class="h-20 w-20 -rotate-12 text-[var(--color-primary-600)]" />
		</div>
		<div class="animate-pulse-slow absolute top-1/3 right-1/4 opacity-5">
			<Wheat class="h-32 w-32 text-[var(--color-primary-600)]" />
		</div>

		<div class="container-custom py-16 md:py-24">
			{#if heroVisible}
				<div class="mx-auto max-w-3xl text-center">
					<h1
						class="mb-6 text-4xl leading-tight font-bold text-[var(--color-primary-800)] md:text-5xl lg:text-6xl xl:text-7xl"
						in:fly={{ y: 40, duration: 800, easing: quintOut }}
					>
						Roti Hangat, Dibuat dengan Cinta Setiap Pagi
					</h1>
					<p
						class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[var(--color-neutral-700)] md:text-xl lg:text-2xl"
						in:fly={{ y: 30, duration: 800, delay: 200, easing: quintOut }}
					>
						Bakery keluarga yang menghadirkan roti dan pastry artisan dengan resep turun-temurun dan
						bahan-bahan pilihan terbaik.
					</p>
					<div
						class="flex flex-col justify-center gap-4 sm:flex-row"
						in:fly={{ y: 20, duration: 800, delay: 400, easing: quintOut }}
					>
						<Button variant="primary" size="lg" href="#visit">Kunjungi Bakery Kami</Button>
						<Button variant="outline" size="lg" href="#menu">Lihat Menu</Button>
					</div>
				</div>
			{/if}
		</div>

		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
			<a
				href="#trust-section"
				class="text-[var(--color-primary-600)] opacity-60 transition-opacity hover:opacity-100"
			>
				<ArrowDown class="h-6 w-6" />
			</a>
		</div>
	</section>

	<!-- 4. Trust Highlights -->
	<section
		id="trust-section"
		class="border-b border-[var(--color-cream-200)] bg-white py-8 md:py-12"
	>
		<div class="container-custom">
			<div class="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
				{#each trustHighlights as item, i}
					{#if trustVisible}
						<div
							class="group flex flex-col items-center text-center"
							in:fly={{ y: 30, duration: 600, delay: i * 100, easing: quintOut }}
						>
							<div
								class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-100)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-primary-600)] md:h-14 md:w-14"
							>
								<item.icon
									class="h-6 w-6 text-[var(--color-primary-600)] transition-colors duration-500 group-hover:text-white md:h-7 md:w-7"
								/>
							</div>
							<span class="text-sm font-medium text-[var(--color-primary-800)] md:text-base"
								>{item.text}</span
							>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</section>

	<!-- 5. Featured Products (Best Sellers) -->
	<section id="menu" class="section-padding bg-[var(--color-cream-50)]">
		<div class="container-custom">
			{#if productsVisible}
				<div in:fly={{ y: 30, duration: 600, easing: quintOut }}>
					<SectionTitle
						title="Menu Favorit Pelanggan"
						subtitle="Dibuat dengan tangan setiap pagi dalam batch kecil untuk cita rasa dan kehangatan terbaik."
					/>
				</div>

				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
					{#each products as product, i}
						<div in:fly={{ y: 40, duration: 600, delay: 150 + i * 100, easing: quintOut }}>
							<ProductCard {product} index={i} />
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>

	<!-- 6. Why Families Choose Our Bakery -->
	<section id="why-us-section" class="section-padding bg-white">
		<div class="container-custom">
			{#if whyUsVisible}
				<div in:fly={{ y: 30, duration: 600, easing: quintOut }}>
					<SectionTitle
						title="Mengapa Keluarga Memilih Kami"
						subtitle="Ada alasan mengapa pelanggan setia kami terus kembali dari generasi ke generasi."
					/>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each whyChooseUs as feature, i}
						<div
							in:fly={{
								x: i % 2 === 0 ? -30 : 30,
								duration: 600,
								delay: 150 + i * 100,
								easing: quintOut
							}}
						>
							<FeatureCard
								icon={feature.icon}
								title={feature.title}
								description={feature.description}
								index={i}
							/>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>

	<!-- 7. Customer Testimonials -->
	<section id="reviews" class="section-padding bg-[var(--color-cream-100)]">
		<div class="container-custom">
			{#if testimonialsVisible}
				<div in:fly={{ y: 30, duration: 600, easing: quintOut }}>
					<SectionTitle
						title="Kata Pelanggan Kami"
						subtitle="Jangan hanya percaya kata kami — dengarkan langsung dari keluarga besar bakery kami."
					/>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
					{#each testimonials as testimonial, i}
						<div in:scale={{ start: 0.9, duration: 600, delay: 150 + i * 100, easing: backOut }}>
							<TestimonialCard {testimonial} index={i} />
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>

	<!-- 8. Our Story -->
	<section id="story" class="section-padding bg-white">
		<div class="container-custom">
			<div class="mx-auto max-w-4xl">
				{#if storyVisible}
					<div class="grid items-center gap-10 md:grid-cols-2 md:gap-16">
						<div class="relative" in:fly={{ x: -50, duration: 800, easing: quintOut }}>
							<img
								src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&q=80"
								alt="Pembuat roti keluarga kami bekerja bersama di bakery"
								class="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-large)]"
								loading="lazy"
							/>
							<div
								class="absolute -right-4 -bottom-4 rounded-xl bg-[var(--color-primary-600)] px-6 py-3 text-white shadow-lg"
								in:scale={{ start: 0.5, duration: 600, delay: 400, easing: elasticOut }}
							>
								<span class="font-heading text-2xl font-bold">25+</span>
								<span class="ml-1 text-sm">Tahun</span>
							</div>
						</div>

						<div in:fly={{ x: 50, duration: 800, delay: 200, easing: quintOut }}>
							<h2
								class="mb-6 font-heading text-3xl font-semibold text-[var(--color-primary-800)] md:text-4xl"
							>
								Cerita Kami
							</h2>
							<div class="space-y-4 leading-relaxed text-[var(--color-neutral-700)]">
								<p>
									Berawal dari dapur keluarga pada tahun 1998, kini telah berkembang menjadi bakery
									yang dicintai lintas generasi. Resep nenek, kecintaannya pada membuat roti, dan
									keyakinannya bahwa makanan yang dibuat dengan cinta akan terasa lebih enak —
									inilah fondasi dari semua yang kami kerjakan.
								</p>
								<p>
									Setiap pagi, para pembuat roti kami datang sebelum fajar untuk menciptakan roti,
									pastry, dan hidangan lezat menggunakan teknik yang sama seperti dulu. Kami tidak
									pernah mengambil jalan pintas karena kami percaya Anda layak mendapat yang
									terbaik.
								</p>
								<p class="font-medium text-[var(--color-primary-700)]">
									Terima kasih telah menjadi bagian dari cerita kami. Kami tidak sabar untuk
									menyambut Anda.
								</p>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- 9. Call-To-Action Section -->
	<section
		id="cta-section"
		class="relative overflow-hidden bg-[var(--color-primary-700)] py-16 md:py-24"
	>
		<!-- Animated decorative pattern -->
		<div class="absolute inset-0 opacity-10">
			<div class="animate-float absolute top-10 left-20">
				<Wheat class="h-20 w-20 text-white" />
			</div>
			<div class="animate-float-delayed absolute right-20 bottom-10">
				<ChefHat class="h-20 w-20 text-white" />
			</div>
		</div>

		<div class="container-custom relative z-10">
			{#if ctaVisible}
				<div class="mx-auto max-w-2xl text-center">
					<h2
						class="mb-6 font-heading text-3xl font-bold md:text-4xl lg:text-5xl"
						style="color: white;"
						in:fly={{ y: 30, duration: 600, easing: quintOut }}
					>
						Rasakan Kehangatan Rumah dalam Setiap Gigitan
					</h2>
					<p
						class="mb-8 text-lg text-[var(--color-cream-200)] md:text-xl"
						in:fly={{ y: 20, duration: 600, delay: 150, easing: quintOut }}
					>
						Kunjungi kami dan temukan mengapa keluarga Indonesia telah mempercayakan meja makan
						mereka kepada kami selama lebih dari 25 tahun.
					</p>
					<div in:scale={{ start: 0.8, duration: 600, delay: 300, easing: backOut }}>
						<Button variant="secondary" size="lg" href="#visit">Kunjungi Kami Hari Ini</Button>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<!-- 10. Visit Us -->
	<section id="visit" class="section-padding bg-[var(--color-cream-50)]">
		<div class="container-custom">
			<div class="mx-auto max-w-4xl">
				{#if visitVisible}
					<div in:fly={{ y: 30, duration: 600, easing: quintOut }}>
						<SectionTitle
							title="Kunjungi Bakery Kami"
							subtitle="Kami siap menyambut Anda setiap pagi dengan senyuman dan roti hangat."
						/>
					</div>

					<div class="grid gap-8 md:grid-cols-2 md:gap-12">
						<div
							class="rounded-2xl bg-white p-8 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
							in:fly={{ x: -30, duration: 600, delay: 150, easing: quintOut }}
						>
							<h3
								class="mb-4 flex items-center gap-2 font-heading text-xl font-semibold text-[var(--color-primary-800)]"
							>
								<span
									class="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-100)]"
								>
									<MapPin class="h-4 w-4 text-[var(--color-primary-600)]" />
								</span>
								Lokasi
							</h3>
							<address class="space-y-2 text-[var(--color-neutral-700)] not-italic">
								<p>Jl. Roti Hangat No. 123</p>
								<p>Jakarta Selatan, 12345</p>
								<p class="pt-2">
									<a
										href="tel:+6221123456789"
										class="text-[var(--color-primary-600)] transition-all duration-300 hover:text-[var(--color-primary-700)] hover:underline"
										>(021) 1234-5678</a
									>
								</p>
							</address>
						</div>

						<div
							class="rounded-2xl bg-white p-8 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
							in:fly={{ x: 30, duration: 600, delay: 250, easing: quintOut }}
						>
							<h3
								class="mb-4 flex items-center gap-2 font-heading text-xl font-semibold text-[var(--color-primary-800)]"
							>
								<span
									class="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-100)]"
								>
									<Clock class="h-4 w-4 text-[var(--color-primary-600)]" />
								</span>
								Jam Buka
							</h3>
							<div class="space-y-2 text-[var(--color-neutral-700)]">
								<div class="flex justify-between">
									<span>Senin – Jumat</span>
									<span class="font-medium">06.00 – 21.00</span>
								</div>
								<div class="flex justify-between">
									<span>Sabtu</span>
									<span class="font-medium">07.00 – 22.00</span>
								</div>
								<div class="flex justify-between">
									<span>Minggu</span>
									<span class="font-medium">08.00 – 20.00</span>
								</div>
							</div>
						</div>
					</div>

					<p
						class="mt-8 text-center text-lg text-[var(--color-neutral-600)] italic"
						in:fade={{ duration: 600, delay: 400 }}
					>
						"Roti hangat tidak menunggu siapa pun — datang lebih awal untuk pilihan terbaik!"
					</p>
				{/if}
			</div>
		</div>
	</section>
</main>

<!-- 11. Footer -->
<Footer />

<style>
	.font-heading {
		font-family: var(--font-heading);
	}

	/* Custom animations */
	@keyframes float {
		0%,
		100% {
			transform: translateY(0) rotate(12deg);
		}
		50% {
			transform: translateY(-20px) rotate(12deg);
		}
	}

	@keyframes float-delayed {
		0%,
		100% {
			transform: translateY(0) rotate(-12deg);
		}
		50% {
			transform: translateY(-15px) rotate(-12deg);
		}
	}

	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	@keyframes pulse-slow {
		0%,
		100% {
			opacity: 0.05;
			transform: scale(1);
		}
		50% {
			opacity: 0.1;
			transform: scale(1.05);
		}
	}

	.animate-float {
		animation: float 6s ease-in-out infinite;
	}

	.animate-float-delayed {
		animation: float-delayed 7s ease-in-out infinite;
		animation-delay: 1s;
	}

	.animate-shimmer {
		animation: shimmer 3s linear infinite;
	}

	.animate-pulse-slow {
		animation: pulse-slow 4s ease-in-out infinite;
	}
</style>
