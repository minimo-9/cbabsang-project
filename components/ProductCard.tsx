// components/ProductCard.tsx
import { ProductCardProps } from "@/lib/types/product";

export default function ProductCard({ product }: ProductCardProps) {
  const sold = product.current;
  const limit = product.limit;
  const remain = limit - sold;
  const isSoldOut = remain <= 0;
  const isAlmostSoldOut = remain > 0 && remain <= 5;
  const soldRate = Math.min((sold / limit) * 100, 100);

  return (
    <div
      className={`
        relative rounded-xl overflow-hidden bg-white shadow-sm
        border border-transparent
        transition-all duration-200
        ${
          isSoldOut
            ? "opacity-60 cursor-not-allowed"
            : "cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:border-gray-200"
        }
      `}
    >
      {isSoldOut && (
        <div
          className="
      absolute inset-0
      z-10
      flex items-center justify-center
      bg-black/65
      text-white
      text-2xl
      font-semibold
    "
        >
          품절
        </div>
      )}
      <div className="flex flex-col rounded-lg p-3">
        {/* 이미지 */}
        <div className="mb-3 lg:h-45 md:h-64 h-40 w-full rounded-md bg-gray-100 flex items-center justify-center text-sm text-gray-400">
          Image
        </div>

        {/* 상품명 */}
        <div className="md:text-base text-sm font-medium text-gray-800">
          {product.index + 1}. {product.name}
        </div>

        <div className="mb-0.5 flex items-center justify-between">
          {/* 가격 */}
          <div className="text-lg font-black text-gray-900">
            {product.price}
          </div>

          {isAlmostSoldOut && !isSoldOut && (
            <div className="text-xs font-bold text-red-600 whitespace-nowrap">
              🔥 품절 임박
            </div>
          )}
        </div>

        {/* 판매 / 남은 수량 */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">{sold}개 판매</span>
            <span
              className={`font-semibold ${
                isAlmostSoldOut ? "text-red-600" : "text-gray-700"
              }`}
            >
              {remain}개 남음
            </span>
          </div>

          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${
                isSoldOut
                  ? "bg-gray-400"
                  : isAlmostSoldOut
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
              style={{ width: `${soldRate}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
