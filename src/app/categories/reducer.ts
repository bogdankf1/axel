import {
  CategoriesActionTypes,
  GetCategoriesAction,
  GetCategoriesSuccessAction,
  GetCategoriesFailAction,
  AddCategoryAction,
  AddCategorySuccessAction,
  AddCategoryFailAction,
  SelectCategoryAction,
  GetTopCategoriesAction,
  GetTopCategoriesSuccessAction,
  GetTopCategoriesFailAction,
} from './actionTypes'
import { CategoryItem } from '../../interfaces'

export interface RCategories {
  loading: boolean
  error: string
  list: CategoryItem[]
  topList: CategoryItem[]
  selectedCategory: CategoryItem
}

type CategoriesActions =
  | GetCategoriesAction
  | GetCategoriesSuccessAction
  | GetCategoriesFailAction
  | GetTopCategoriesAction
  | GetTopCategoriesSuccessAction
  | GetTopCategoriesFailAction
  | AddCategoryAction
  | AddCategorySuccessAction
  | AddCategoryFailAction
  | SelectCategoryAction

export const initialCategories = (): RCategories => ({
  loading: false,
  error: '',
  list: [],
  topList: [],
  selectedCategory: {
    title: '',
    _id: '',
  },
})

const categoriesReducer = (state = initialCategories(), action: CategoriesActions): RCategories => {
  switch (action.type) {
    case CategoriesActionTypes.GET_CATEGORIES:
      return { ...state, loading: true }
    case CategoriesActionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.list.filter(item => item.title).reverse(),
      }
    case CategoriesActionTypes.GET_CATEGORIES_FAIL:
      return { ...state, loading: false, error: action.payload.message }
    case CategoriesActionTypes.GET_TOP_CATEGORIES:
      return { ...state, loading: true }
    case CategoriesActionTypes.GET_TOP_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        topList: action.payload.list,
      }
    case CategoriesActionTypes.GET_TOP_CATEGORIES_FAIL:
      return { ...state, loading: false, error: action.payload.message }
    case CategoriesActionTypes.ADD_CATEGORY:
      return { ...state, loading: true }
    case CategoriesActionTypes.ADD_CATEGORY_SUCCESS:
      return { ...state, loading: false }
    case CategoriesActionTypes.ADD_CATEGORY_FAIL:
      return { ...state, loading: false, error: action.payload.message }
    case CategoriesActionTypes.SELECT_CATEGORY:
      return { ...state, selectedCategory: action.payload.category }
    default:
      return state
  }
}

export default categoriesReducer
