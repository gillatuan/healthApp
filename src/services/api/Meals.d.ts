
export type TMeal = {
  image?: string
  name: string
  slug: string
  datetime: string
}
export interface IMealResponse {
  data: TMeal[]
}