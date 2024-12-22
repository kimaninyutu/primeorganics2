import { Hero } from "../components/hero"
import { FlashSales } from "../components/flash-sales"
import { BrowseCategories } from "../components/browse-categories"
import { BestSelling } from "../components/best-selling"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />
      {/* Content Section */}
      <div className="flex flex-col flex-1 space-y-6">
        <FlashSales />
        <BrowseCategories />
        <BestSelling />
      </div>
    </div>
  )
}
