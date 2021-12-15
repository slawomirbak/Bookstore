import { BasketItem } from './BasketItem';

export class Basket {
  basketItems: BasketItem[] = [];
  totalPrice = 0;
  delivery: string;
  address: string;
  payment: string;
}
