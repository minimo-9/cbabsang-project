// app/loading.tsx
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function Loading() {
  return (
    <section className="mx-auto max-w-[1280px] lg:px-6 lg:py-10 md:px-6 md:py-8 px-4 py-6">
      <div className="grid grid-cols-2 gap-7 lg:grid-cols-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
