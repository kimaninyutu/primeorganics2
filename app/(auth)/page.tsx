import { Hero } from "../..//components/hero"
import { FlashSales } from "../../components/flash-sales"
import { BrowseCategories } from "../../components/browse-categories"
import { BestSelling } from "../../components/best-selling"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FlashSales />
      <BrowseCategories />
      <BestSelling />
    </div>
  )
}

