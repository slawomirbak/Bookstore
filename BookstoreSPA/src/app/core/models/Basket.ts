import { BasketItem } from './BasketItem';

export class Basket {
  basketItems: BasketItem[] = [];
  totalPrice: number;
  delivery: string;
}
