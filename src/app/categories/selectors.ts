import { RootState } from '../../interfaces'

export const categoriesListSelector = (state: RootState) => state.categories.list

export const categoriesTopListSelector = (state: RootState) => state.categories.topList

export const selectedCategorySelector = (state: RootState) => state.categories.selectedCategory
