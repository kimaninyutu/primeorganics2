import { CartItems } from "@/components/cart/cart-items"
import { CartSummary } from "@/components/cart/cart-summary"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Cart", href: "/cart" }
      ]} />
      <div className="mt-8">
        <CartItems />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 px-4 py-2 border rounded-sm"
              />
              <button className="px-6 py-2 bg-red-500 text-white rounded-sm">
                Apply Coupon
              </button>
            </div>
            <button className="px-6 py-2 border rounded-sm">
              Return To Shop
            </button>
          </div>
          <CartSummary />
        </div>
      </div>
    </div>
  )
}

