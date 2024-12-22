import { CheckoutForm } from "@/components/checkout/checkout-form"
import { OrderSummary } from "@/components/checkout/order-summary"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: "Account", href: "/account" },
        { label: "My Account", href: "/account" },
        { label: "Product", href: "#" },
        { label: "View Cart", href: "/cart" },
        { label: "Checkout", href: "/checkout" }
      ]} />
      <div className="mt-8">
        <h1 className="text-2xl font-medium mb-8">Billing Details</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

