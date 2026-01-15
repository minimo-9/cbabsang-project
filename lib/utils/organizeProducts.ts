import { Product } from "@/lib/types/product";

export function organizeProducts(products: Product[]) {
  const sorted = [...products].sort((a, b) => a.index - b.index);

  const available = sorted.filter((product) => product.current < product.limit);

  const soldOut = sorted.filter((product) => product.current >= product.limit);

  return [...available, ...soldOut];
}
