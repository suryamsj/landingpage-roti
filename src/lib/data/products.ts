export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
}

export const products: Product[] = [
    {
        id: 'sourdough',
        name: 'Roti Sourdough Artisan',
        description: 'Roti sourdough signature kami dengan kulit renyah sempurna dan tekstur lembut yang gurih. Difermentasi alami selama 24 jam.',
        price: 'Rp 85.000',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80'
    },
    {
        id: 'croissant',
        name: 'Croissant Butter Premium',
        description: 'Lapisan-lapisan flaky dan golden dari pastry ala Prancis, dibuat dengan mentega murni pilihan.',
        price: 'Rp 35.000',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80'
    },
    {
        id: 'cinnamon-roll',
        name: 'Cinnamon Roll Homemade',
        description: 'Roti gulung lembut dengan swirl kayu manis dan gula, dihiasi cream cheese frosting yang creamy.',
        price: 'Rp 42.000',
        image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80'
    },
    {
        id: 'baguette',
        name: 'French Baguette',
        description: 'Kulit keemasan yang renyah dengan bagian dalam yang ringan dan airy. Pendamping sempurna untuk setiap hidangan.',
        price: 'Rp 38.000',
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80'
    },
    {
        id: 'chocolate-danish',
        name: 'Danish Cokelat Belgia',
        description: 'Pastry berlapis mentega dengan isian cokelat Belgia premium dan topping glaze manis.',
        price: 'Rp 45.000',
        image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80'
    },
    {
        id: 'multigrain',
        name: 'Roti Multigrain Sehat',
        description: 'Roti sehat dan bergizi dengan campuran 7 jenis biji-bijian untuk kesehatan optimal keluarga Anda.',
        price: 'Rp 72.000',
        image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=600&q=80'
    }
];
