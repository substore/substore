export type Price = {
    id: string;
    amount: number;
    interval: 'month' | 'year';
    currency: string;
}