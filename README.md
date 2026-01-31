# Roti Artisan Landing Page

A modern, responsive landing page for Roti Artisan bakery built with SvelteKit and Tailwind CSS v4.

## Tech Stack

- **Framework**: SvelteKit 2 with Svelte 5
- **Styling**: Tailwind CSS v4 with Typography and Forms plugins
- **Icons**: Lucide Svelte
- **Build**: Static site generation with precompression (Brotli/Gzip)

## Features

- Fully responsive design optimized for mobile and desktop
- Smooth scroll animations with Intersection Observer
- SEO optimized with JSON-LD structured data (LocalBusiness schema)
- Static site generation for optimal Core Web Vitals
- Precompressed assets for faster delivery

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building

Create a production build:

```sh
npm run build
```

The static site is generated in the `build` folder with precompressed `.br` and `.gz` files.

### Preview

Preview the production build locally:

```sh
npm run preview
```

## Project Structure

```
src/
  routes/
    +layout.svelte    # Root layout with favicon
    +layout.ts        # Prerender configuration
    +page.svelte      # Main landing page
    layout.css        # Global styles and design tokens
  lib/
    components/       # Reusable UI components
    data/             # Product and testimonial data
    assets/           # Static assets (favicon)
static/
  robots.txt          # Search engine crawl rules
  sitemap.xml         # Sitemap for SEO
```

## SEO Configuration

Before deployment, update the placeholder domain in:

- `src/routes/+page.svelte` - canonical URL, og:url, JSON-LD data
- `static/robots.txt` - sitemap location
- `static/sitemap.xml` - page URLs

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
