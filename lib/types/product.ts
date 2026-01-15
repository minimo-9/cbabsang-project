export interface Product {
  index: number;
  name: string;
  price: string;
  current: number;
  limit: number;
  image: null;
}

export interface ProductCardProps {
  product: Product;
}

export interface ProductListProps {
  products: Product[];
}
