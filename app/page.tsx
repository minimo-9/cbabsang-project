import ProductList from "@/components/ProductList";
import { fetchProducts } from "@/lib/api/fetchProducts";
import { organizeProducts } from "@/lib/utils/organizeProducts";

export default async function Page() {
  const products = await fetchProducts();
  const organized = organizeProducts(products);

  return (
    <main>
      <ProductList products={organized} />
    </main>
  );
}
