import client from './client'
import { CategoryItem } from '../interfaces'
interface GetGategoriesResponse {
  data: CategoryItem[]
}
interface AddCategoryResponse {
  message: string
}

export const getCategories = () => client.get<GetGategoriesResponse>('categories')

export const addCategory = (title: string) =>
  client.post<AddCategoryResponse>('categories', { title })

export default {
  getCategories,
  addCategory,
}
