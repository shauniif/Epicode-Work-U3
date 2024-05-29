import { iDimensions } from "./i-dimensions"
import { iMeta } from "./i-meta"
import { iReview } from "./i-review"

export interface iProduct {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: iDimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: iReview[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: iMeta
  images: string[]
  thumbnail: string
}
