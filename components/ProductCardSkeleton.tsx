// components/ProductCardSkeleton.tsx
export default function ProductCardSkeleton() {
  return (
    <div className="relative rounded-xl overflow-hidden bg-white shadow-sm">
      <div className="flex flex-col rounded-lg p-3">
        <div className="mb-3 lg:h-45 md:h-64 h-40 w-full rounded-md bg-gray-100 animate-pulse" />

        {/* 상품명 */}
        <div className="h-5 w-3/4 rounded bg-gray-100 animate-pulse" />

        {/* 가격 */}
        <div className="mb-0.5 mt-2 flex items-center justify-between">
          <div className="h-6 w-24 rounded bg-gray-100 animate-pulse" />
          <div className="h-4 w-16 rounded bg-gray-100 animate-pulse" />
        </div>

        {/* 판매 / 남은 수량 */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <div className="h-4 w-16 rounded bg-gray-100 animate-pulse" />
            <div className="h-4 w-16 rounded bg-gray-100 animate-pulse" />
          </div>

          <div className="h-2 w-full rounded-full bg-gray-100 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
