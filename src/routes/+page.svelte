<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade, scale } from 'svelte/transition';
	import { quintOut, backOut } from 'svelte/easing';
	import {
		Navbar,
		Button,
		SectionTitle,
		ProductCard,
		TestimonialCard,
		FeatureCard,
		Footer,
		AnnouncementBar,
		OrderStepCard,
		FaqItem,
		ContactCard,
		products,
		testimonials
	} from '$lib';

	import {
		Clock,
		MessageCircle,
		Package,
		CalendarCheck,
		Sparkles,
		ShieldCheck,
		Timer,
		ChefHat,
		ArrowDown,
		Croissant
	} from 'lucide-svelte';

	// Track visibility of sections for scroll animations
	let heroVisible = $state(false);
	let trustVisible = $state(false);
	let productsVisible = $state(false);
	let howToOrderVisible = $state(false);
	let whyUsVisible = $state(false);
	let testimonialsVisible = $state(false);
	let faqVisible = $state(false);
	let ctaVisible = $state(false);
	let contactVisible = $state(false);

	// FAQ accordion state
	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	onMount(() => {
		heroVisible = true;

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
		const howToOrderObserver = createObserver(() => (howToOrderVisible = true));
		const whyUsObserver = createObserver(() => (whyUsVisible = true));
		const testimonialsObserver = createObserver(() => (testimonialsVisible = true));
		const faqObserver = createObserver(() => (faqVisible = true));
		const ctaObserver = createObserver(() => (ctaVisible = true));
		const contactObserver = createObserver(() => (contactVisible = true));

		const trustEl = document.getElementById('trust-section');
		const productsEl = document.getElementById('menu');
		const howToOrderEl = document.getElementById('how-to-order');
		const whyUsEl = document.getElementById('why-us-section');
		const testimonialsEl = document.getElementById('reviews');
		const faqEl = document.getElementById('faq');
		const ctaEl = document.getElementById('cta-section');
		const contactEl = document.getElementById('contact');

		if (trustEl) trustObserver.observe(trustEl);
		if (productsEl) productsObserver.observe(productsEl);
		if (howToOrderEl) howToOrderObserver.observe(howToOrderEl);
		if (whyUsEl) whyUsObserver.observe(whyUsEl);
		if (testimonialsEl) testimonialsObserver.observe(testimonialsEl);
		if (faqEl) faqObserver.observe(faqEl);
		if (ctaEl) ctaObserver.observe(ctaEl);
		if (contactEl) contactObserver.observe(contactEl);

		return () => {
			trustObserver.disconnect();
			productsObserver.disconnect();
			howToOrderObserver.disconnect();
			whyUsObserver.disconnect();
			testimonialsObserver.disconnect();
			faqObserver.disconnect();
			ctaObserver.disconnect();
			contactObserver.disconnect();
		};
	});

	const trustHighlights = [
		{ icon: Sparkles, text: '100% Made to Order' },
		{ icon: Clock, text: 'Fresh Setiap Batch' },
		{ icon: ShieldCheck, text: 'Tanpa Pengawet' },
		{ icon: Package, text: 'Dikemas Rapi' }
	];

	const orderSteps = [
		{
			icon: MessageCircle,
			step: '1',
			title: 'Hubungi Kami',
			description: 'Chat via WhatsApp atau DM Instagram untuk memilih produk dan kuantitas.'
		},
		{
			icon: CalendarCheck,
			step: '2',
			title: 'Pilih Tanggal',
			description:
				'Tentukan tanggal pickup/kirim. Perhatikan lead time masing-masing produk (H-2 atau H-3).'
		},
		{
			icon: Package,
			step: '3',
			title: 'Konfirmasi & Bayar',
			description: 'Transfer DP 50% untuk mengunci pesanan. Lunasi saat pickup atau sebelum kirim.'
		},
		{
			icon: Croissant,
			step: '4',
			title: 'Pickup/Delivery',
			description: 'Ambil roti fresh di lokasi kami atau pilih delivery (ongkir menyesuaikan).'
		}
	];

	const whyChooseUs = [
		{
			icon: Sparkles,
			title: 'Fresh to Order',
			description:
				'Setiap order dipanggang khusus untuk Anda. Tidak ada roti yang menginap di rak — semua fresh from oven!'
		},
		{
			icon: ShieldCheck,
			title: 'Tanpa Pengawet',
			description:
				'Bahan-bahan murni dan berkualitas tanpa pengawet buatan. Aman untuk keluarga Anda.'
		},
		{
			icon: Timer,
			title: 'Fermentasi Alami',
			description:
				'Proses fermentasi 24 jam untuk rasa superior dan tekstur yang lebih mudah dicerna.'
		},
		{
			icon: ChefHat,
			title: 'Jadwal Teratur',
			description:
				'Batch pengiriman setiap Rabu & Sabtu. Pesan sebelum deadline untuk slot yang diinginkan.'
		}
	];

	const faqs = [
		{
			question: 'Bagaimana sistem pre-order (PO) bekerja?',
			answer:
				'Anda cukup menghubungi kami via WhatsApp, pilih produk dan tanggal pickup/delivery. Bayar DP 50% untuk mengunci pesanan, dan lunasi sisanya saat pickup atau sebelum delivery.'
		},
		{
			question: 'Berapa lama lead time untuk masing-masing produk?',
			answer:
				'Berbeda-beda tergantung produk. Croissant dan Danish memerlukan H-2 (pesan 2 hari sebelum), sedangkan Sourdough dan Multigrain perlu H-3. Lihat detail di masing-masing produk.'
		},
		{
			question: 'Apakah ada minimum order?',
			answer:
				'Ya, setiap produk memiliki minimum order yang berbeda. Contoh: Croissant min. 3 pcs, Sourdough min. 1 loaf. Ini untuk menjaga kualitas dan efisiensi produksi.'
		},
		{
			question: 'Bagaimana dengan pengiriman/delivery?',
			answer:
				'Kami menyediakan opsi self-pickup di Jakarta Selatan atau delivery via kurir instant (Gojek/Grab). Ongkir ditanggung pembeli dan dihitung saat order.'
		},
		{
			question: 'Kapan jadwal batch pengiriman?',
			answer:
				'Kami memanggang dalam batch setiap Rabu dan Sabtu. Pastikan order Anda masuk sebelum deadline batch yang diinginkan.'
		}
	];
</script>

<svelte:head>
	<title>Roti Artisan | Open Order - Roti Fresh Dibuat Khusus untuk Anda</title>
	<meta
		name="description"
		content="Roti dan pastry artisan dibuat fresh to order. Pesan H-2/H-3 sebelumnya, kami panggang khusus untuk Anda. Tanpa pengawet, resep turun-temurun."
	/>

	<meta
		name="keywords"
		content="roti artisan, bakery jakarta, roti pre-order, pastry PO, roti homemade, sourdough jakarta, croissant premium"
	/>
	<meta name="author" content="Roti Artisan" />
	<link rel="canonical" href="https://rotiartisan.com/" />

	<meta property="og:title" content="Roti Artisan | Open Order - Roti Fresh Dibuat Khusus" />
	<meta
		property="og:description"
		content="Roti dan pastry artisan dibuat fresh to order. Pesan sekarang, nikmati kesegaran maksimal!"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rotiartisan.com/" />
	<meta property="og:site_name" content="Roti Artisan" />
	<meta
		property="og:image"
		content="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80"
	/>
	<meta property="og:locale" content="id_ID" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Roti Artisan | Open Order" />
	<meta
		name="twitter:description"
		content="Roti dan pastry artisan fresh to order. Pesan sekarang!"
	/>

	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Bakery",
		"name": "Roti Artisan",
		"description": "Roti dan pastry artisan dibuat fresh to order dengan resep turun-temurun. Sistem pre-order untuk kesegaran maksimal.",
		"url": "https://rotiartisan.com",
		"telephone": "+62812-3456-7890",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Jakarta Selatan",
			"addressCountry": "ID"
		},
		"priceRange": "$$",
		"servesCuisine": "Bakery",
		"image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80"
	}
	</script>`}
</svelte:head>

<!-- Announcement Bar -->
<AnnouncementBar />

<!-- Navbar -->
<Navbar />

<main id="home">
	<!-- Hero Section -->
	<section class="hero-gradient relative flex min-h-[85vh] items-center overflow-hidden">
		<!-- Decorative elements -->
		<div class="animate-float absolute top-20 left-10 opacity-10">
			<Croissant class="h-16 w-16 rotate-12 text-primary-400" />
		</div>
		<div class="animate-float-delayed absolute right-10 bottom-20 opacity-10">
			<ChefHat class="h-20 w-20 -rotate-12 text-primary-400" />
		</div>

		<div class="container-custom py-16 md:py-24">
			{#if heroVisible}
				<div class="mx-auto max-w-3xl text-center">
					<div
						class="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700"
						in:fly={{ y: 20, duration: 600, easing: quintOut }}
					>
						<Sparkles class="h-4 w-4" />
						Fresh to Order — Dipanggang Khusus untuk Anda
					</div>
					<h1
						class="mb-6 text-4xl leading-tight font-bold text-neutral-800 md:text-5xl lg:text-6xl xl:text-7xl"
						in:fly={{ y: 40, duration: 800, easing: quintOut }}
					>
						Pesan Hari Ini, Nikmati Roti Segar Besok
					</h1>
					<p
						class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl lg:text-2xl"
						in:fly={{ y: 30, duration: 800, delay: 200, easing: quintOut }}
					>
						Roti dan pastry artisan dibuat fresh to order. Pesan sebelum deadline, kami panggang
						khusus untuk Anda dengan resep turun-temurun.
					</p>
					<div
						class="flex flex-col justify-center gap-4 sm:flex-row"
						in:fly={{ y: 20, duration: 800, delay: 400, easing: quintOut }}
					>
						<Button
							variant="primary"
							size="lg"
							href="https://wa.me/6281234567890?text=Halo, saya ingin order roti"
						>
							<MessageCircle class="mr-2 h-5 w-5" />
							Order via WhatsApp
						</Button>
						<Button variant="outline" size="lg" href="#menu">Lihat Menu PO</Button>
					</div>
				</div>
			{/if}
		</div>

		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
			<a
				href="#trust-section"
				class="text-primary-500 opacity-60 transition-opacity hover:opacity-100"
			>
				<ArrowDown class="h-6 w-6" />
			</a>
		</div>
	</section>

	<!-- Trust Highlights -->
	<section id="trust-section" class="bg-cream-100 py-8 md:py-12">
		<div class="container-custom">
			<div class="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
				{#each trustHighlights as item, i}
					{#if trustVisible}
						<div
							class="group flex flex-col items-center text-center"
							in:fly={{ y: 30, duration: 600, delay: i * 100, easing: quintOut }}
						>
							<div
								class="neu-flat mb-3 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-400 group-hover:bg-primary-100 md:h-14 md:w-14"
							>
								<item.icon
									class="h-6 w-6 text-primary-500 transition-all duration-500 group-hover:scale-110 group-hover:text-primary-600 md:h-7 md:w-7"
								/>
							</div>
							<span class="text-sm font-semibold text-neutral-700 md:text-base">{item.text}</span>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</section>

	<!-- Featured Products / Menu PO -->
	<section id="menu" class="section-padding bg-cream-100">
		<div class="container-custom">
			{#if productsVisible}
				<div in:fly={{ y: 30, duration: 600, easing: quintOut }}>
					<SectionTitle
						title="Menu Pre-Order"
						subtitle="Pilih produk favorit Anda. Perhatikan lead time dan minimum order untuk setiap item."
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

	<!-- How to Order -->
	<section id="how-to-order" class="section-padding bg-cream-100">
		<div class="container-custom">
			{#if howToOrderVisible}
				<div in:fly={{ y: 30, duration: 600, easing: quintOut }}>
					<SectionTitle
						title="Cara Order"
						subtitle="Proses pemesanan mudah dan cepat. Ikuti 4 langkah berikut untuk menikmati roti fresh kami."
					/>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{#each orderSteps as step, i}
						<div in:fly={{ y: 40, duration: 600, delay: 150 + i * 100, easing: quintOut }}>
							<OrderStepCard
								icon={step.icon}
								step={step.step}
								title={step.title}
								description={step.description}
							/>
						</div>
					{/each}
				</div>

				<div
					class="mt-10 text-center"
					in:fly={{ y: 20, duration: 600, delay: 600, easing: quintOut }}
				>
					<Button
						variant="primary"
						size="lg"
						href="https://wa.me/6281234567890?text=Halo, saya ingin order roti"
					>
						<MessageCircle class="mr-2 h-5 w-5" />
						Mulai Order Sekarang
					</Button>
				</div>
			{/if}
		</div>
	</section>

	<!-- Why Choose Us -->
	<section id="why-us-section" class="section-padding bg-cream-100">
		<div class="container-custom">
			{#if whyUsVisible}
				<div in:fly={{ y: 30, duration: 600, easing: quintOut }}>
					<SectionTitle
						title="Mengapa Sistem Pre-Order?"
						subtitle="Ada alasan mengapa kami menerapkan sistem PO — semua demi kualitas terbaik untuk Anda."
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

	<!-- Customer Testimonials -->
	<section id="reviews" class="section-padding bg-cream-100">
		<div class="container-custom">
			{#if testimonialsVisible}
				<div in:fly={{ y: 30, duration: 600, easing: quintOut }}>
					<SectionTitle
						title="Apa Kata Pelanggan"
						subtitle="Pengalaman nyata dari pelanggan yang sudah mencoba sistem pre-order kami."
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

	<!-- FAQ Section -->
	<section id="faq" class="section-padding bg-cream-100">
		<div class="container-custom">
			{#if faqVisible}
				<div in:fly={{ y: 30, duration: 600, easing: quintOut }}>
					<SectionTitle
						title="Pertanyaan Umum"
						subtitle="Jawaban untuk pertanyaan yang sering diajukan tentang sistem pre-order kami."
					/>
				</div>

				<div class="mx-auto max-w-3xl space-y-4">
					{#each faqs as faq, i}
						<div in:fly={{ y: 20, duration: 600, delay: 150 + i * 80, easing: quintOut }}>
							<FaqItem
								question={faq.question}
								answer={faq.answer}
								isOpen={openFaq === i}
								onToggle={() => toggleFaq(i)}
							/>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>

	<!-- CTA Section -->
	<section
		id="cta-section"
		class="relative overflow-hidden bg-linear-to-br from-primary-500 to-primary-700 py-16 md:py-24"
	>
		<!-- Decorative elements -->
		<div class="absolute inset-0 opacity-10">
			<div class="animate-float absolute top-10 left-20">
				<Croissant class="h-20 w-20 text-white" />
			</div>
			<div class="animate-float-delayed absolute right-20 bottom-10">
				<ChefHat class="h-20 w-20 text-white" />
			</div>
		</div>

		<div class="container-custom relative z-10">
			{#if ctaVisible}
				<div class="mx-auto max-w-2xl text-center">
					<h2
						class="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
						in:fly={{ y: 30, duration: 600, easing: quintOut }}
					>
						Siap Menikmati Roti Fresh?
					</h2>
					<p
						class="mb-8 text-lg text-white/80 md:text-xl"
						in:fly={{ y: 20, duration: 600, delay: 150, easing: quintOut }}
					>
						Pesan sekarang dan rasakan perbedaan roti yang dipanggang khusus untuk Anda. Tanpa
						menunggu, tanpa stok kemarin!
					</p>
					<div in:scale={{ start: 0.8, duration: 600, delay: 300, easing: backOut }}>
						<a
							href="https://wa.me/6281234567890?text=Halo, saya ingin order roti"
							class="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-primary-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MessageCircle class="mr-2 h-5 w-5" />
							Order via WhatsApp
						</a>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="section-padding bg-cream-100">
		<div class="container-custom">
			<div class="mx-auto max-w-4xl">
				{#if contactVisible}
					<div in:fly={{ y: 30, duration: 600, easing: quintOut }}>
						<SectionTitle
							title="Hubungi Kami"
							subtitle="Ada pertanyaan atau ingin langsung order? Hubungi kami melalui channel berikut."
						/>
					</div>

					<div class="grid gap-8 md:grid-cols-2 md:gap-12">
						<div in:fly={{ x: -30, duration: 600, delay: 150, easing: quintOut }}>
							<ContactCard
								title="WhatsApp (Recommended)"
								icon={MessageCircle}
								iconColor="text-[#25D366]"
							>
								<p class="mb-4 text-neutral-600">
									Chat langsung untuk order atau tanya-tanya seputar produk.
								</p>
								<a
									href="https://wa.me/6281234567890"
									class="inline-flex items-center gap-2 rounded-lg bg-[#25d366] px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
									target="_blank"
									rel="noopener noreferrer"
								>
									0812-3456-7890
								</a>
							</ContactCard>
						</div>

						<div in:fly={{ x: 30, duration: 600, delay: 250, easing: quintOut }}>
							<ContactCard title="Jam Operasional" icon={Clock}>
								<div class="space-y-2 text-neutral-600">
									<div class="flex justify-between">
										<span>Chat Order</span>
										<span class="font-medium">08.00 – 20.00 WIB</span>
									</div>
									<div class="flex justify-between">
										<span>Pickup (Rabu & Sabtu)</span>
										<span class="font-medium">10.00 – 17.00 WIB</span>
									</div>
								</div>
							</ContactCard>
						</div>
					</div>

					<p
						class="mt-8 text-center text-lg text-neutral-500 italic"
						in:fade={{ duration: 600, delay: 400 }}
					>
						"Roti fresh tidak menunggu — pesan sebelum deadline untuk slot batch berikutnya!"
					</p>
				{/if}
			</div>
		</div>
	</section>
</main>

<!-- Footer -->
<Footer />
