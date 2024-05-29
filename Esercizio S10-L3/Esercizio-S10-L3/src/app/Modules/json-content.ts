import { iProduct } from "./i-product"

export interface iJsonContent {
    products: iProduct[]
    total: number
    skip: number
    limit: number
  }
