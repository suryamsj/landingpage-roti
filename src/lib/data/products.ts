export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    leadTime?: string;
    minOrder?: string;
}

export const products: Product[] = [
    {
        id: 'sourdough',
        name: 'Roti Sourdough Artisan',
        description: 'Roti sourdough signature dengan kulit renyah dan tekstur lembut. Difermentasi alami 24 jam untuk cita rasa superior.',
        price: 'Rp 85.000',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
        leadTime: 'H-3',
        minOrder: '1 loaf'
    },
    {
        id: 'croissant',
        name: 'Croissant Butter Premium',
        description: 'Lapisan flaky dan golden dari pastry ala Prancis, dibuat dengan mentega murni pilihan. Kriuk di luar, lembut di dalam.',
        price: 'Rp 35.000',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
        leadTime: 'H-2',
        minOrder: '3 pcs'
    },
    {
        id: 'cinnamon-roll',
        name: 'Cinnamon Roll Homemade',
        description: 'Roti gulung lembut dengan swirl kayu manis dan gula, dihiasi cream cheese frosting creamy. Favorit keluarga!',
        price: 'Rp 42.000',
        image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80',
        leadTime: 'H-2',
        minOrder: '4 pcs'
    },
    {
        id: 'baguette',
        name: 'French Baguette',
        description: 'Kulit keemasan yang renyah dengan bagian dalam ringan dan airy. Pendamping sempurna untuk setiap hidangan.',
        price: 'Rp 38.000',
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80',
        leadTime: 'H-2',
        minOrder: '2 pcs'
    },
    {
        id: 'chocolate-danish',
        name: 'Danish Cokelat Belgia',
        description: 'Pastry berlapis mentega dengan isian cokelat Belgia premium. Manis pas, tidak bikin enek.',
        price: 'Rp 45.000',
        image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80',
        leadTime: 'H-3',
        minOrder: '3 pcs'
    },
    {
        id: 'multigrain',
        name: 'Roti Multigrain Sehat',
        description: 'Roti sehat dan bergizi dengan campuran 7 jenis biji-bijian. Cocok untuk diet dan sarapan keluarga.',
        price: 'Rp 72.000',
        image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=600&q=80',
        leadTime: 'H-3',
        minOrder: '1 loaf'
    }
];
