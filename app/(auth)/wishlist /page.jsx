import { WishlistProducts } from "@/components/wishlist-products"
import { RecommendedProducts } from "@/components/recommended-products"

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <WishlistProducts />
      <RecommendedProducts />
    </div>
  )
}

