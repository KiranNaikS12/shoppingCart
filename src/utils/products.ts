
export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number
}

export const PRODUCTS: Product[ ] = [
    { id: 1, name: "Laptop", price: 500, quantity: 1 },
    { id: 2, name: "Smartphone", price: 300, quantity: 1  },
    { id: 3, name: "Headphones", price: 100, quantity: 1  },
    { id: 4, name: "Smartwatch", price: 150, quantity: 1  },
];
  