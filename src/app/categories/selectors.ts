import { RootState } from '../../interfaces'

export const categoriesListSelector = (state: RootState) => state.categories.list

export const selectedCategorySelector = (state: RootState) => state.categories.selectedCategory
