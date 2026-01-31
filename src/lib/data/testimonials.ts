export interface Testimonial {
    id: string;
    quote: string;
    name: string;
    role?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: 'Bakery ini sudah seperti rumah kedua. Setiap gigitan terasa penuh kehangatan dan cita rasa yang tak terlupakan. Sourdough-nya terbaik!',
        name: 'Ibu Sarah M.',
        role: 'Pelanggan Setia'
    },
    {
        id: '2',
        quote: 'Kami sudah berlangganan setiap minggu selama 5 tahun. Sudah menjadi tradisi keluarga yang sangat kami jaga.',
        name: 'Keluarga Wijaya',
        role: 'Pelanggan Sejak 2019'
    },
    {
        id: '3',
        quote: 'Croissant-nya benar-benar luar biasa — flaky sempurna dan butternya berasa banget. Saya rela datang dari Bekasi hanya untuk ini!',
        name: 'Pak Michael R.',
        role: 'Food Enthusiast'
    }
];
