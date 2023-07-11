import {Product} from '../../types/products.types';

export interface ProductSliceType {
  Products: Product[];
  isLoading: boolean;
  openSheet: boolean;
}

export interface CartSliceType {
  cartProducts: Product[];
}
