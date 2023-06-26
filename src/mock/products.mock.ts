import { Product } from "../interfaces/product.interface";

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'iPhone 7',
        price: 900,
        stock: 5,
        img: [
            'https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_960_720.jpg',
            'https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_960_720.jpg',
            'https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_960_720.jpg'
        ]
    },
    {
        id: 2,
        name: 'Samsung Galaxy S7',
        price: 850,
        stock: 3,
        img: [
            'https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_960_720.jpg',
            'https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_960_720.jpg',
            'https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_960_720.jpg'
        ]
    }
];
