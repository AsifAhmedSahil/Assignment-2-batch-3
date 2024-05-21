
export type TVarient  = {
    type: string;
    value: string;
}

export type TProducts = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: [TVarient];
    inventory: {
        quantity: number;
        inStock: boolean;
    },
    isDeleted:boolean

}

export type TOrders = {
    email: string,
    productId: string,
    price: number,
    quantity: number
}
