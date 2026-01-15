import { ProductListProps } from "@/lib/types/product";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: ProductListProps) {
  return (
    <section className="mx-auto max-w-[1280px] lg:px-6 lg:py-10 md:px-6 md:py-8 px-4 py-6">
      <div
        className="
            grid
            grid-cols-2
            gap-7
            lg:grid-cols-5
          "
      >
        {products.map((product) => (
          <ProductCard key={product.index} product={product} />
        ))}
      </div>
    </section>
  );
}
