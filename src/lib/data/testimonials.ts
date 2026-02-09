export interface Testimonial {
    id: string;
    quote: string;
    name: string;
    role?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: 'Sistem PO-nya sangat memudahkan! Pesan H-3, rotinya sampai fresh dan hangat. Sourdough-nya terbaik yang pernah saya coba!',
        name: 'Ibu Sarah M.',
        role: 'Pelanggan Premium'
    },
    {
        id: '2',
        quote: 'Kami sudah langganan setiap minggu. Tinggal order via WA, pilih tanggal pickup, dan rotinya selalu fresh. Praktis banget!',
        name: 'Keluarga Wijaya',
        role: 'Member Sejak 2019'
    },
    {
        id: '3',
        quote: 'Croissant-nya flaky sempurna karena dibuat fresh setiap batch. Worth the wait! Rela indent H-2 demi rasa yang luar biasa.',
        name: 'Pak Michael R.',
        role: 'Food Enthusiast'
    }
];
