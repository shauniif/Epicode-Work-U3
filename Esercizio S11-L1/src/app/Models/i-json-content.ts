import { iPost } from "./i-post"

export interface iJsonContent {
  posts: iPost[]
  total: number
  skip: number
  limit: number
}
