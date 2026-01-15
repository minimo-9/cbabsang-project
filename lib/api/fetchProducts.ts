import { Product } from "../types/product";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://api.zeri.pics", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("상품 데이터 요청 실패");
  }

  const data = await res.json();
  return data.content;
}
