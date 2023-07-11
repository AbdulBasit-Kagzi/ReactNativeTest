import {Product} from '../../types/products.types';

export interface ProductSliceType {
  Products: Product[];
  isLoading: boolean;
  openSheet: boolean;
  filterProducts: Product[];
  category: string;
  price: number[];
  rating: number[];
}

export interface CartSliceType {
  cartProducts: Product[];
}
