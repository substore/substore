import { Price } from "./price";

export type Product = {
    id: string;
    name: string;
    description: string;
    price: Price[];
};