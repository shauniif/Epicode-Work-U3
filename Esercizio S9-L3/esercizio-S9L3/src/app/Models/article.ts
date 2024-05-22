export interface iPost {
  posts: iArticle[]
  total: number
  skip: number
  limit: number
}

export interface iArticle {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  active: boolean
}
