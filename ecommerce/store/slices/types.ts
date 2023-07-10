import {Product} from '../../types/products.types';

export interface ProductSliceType {
  Products: Product[];
  isLoading: boolean;
}

export interface CartSliceType {
  cartProducts: Product[];
}
