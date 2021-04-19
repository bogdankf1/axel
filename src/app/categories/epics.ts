import {Epic} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import {
  CategoriesActionTypes,
  GetCategoriesAction,
  AddCategoryAction,
  AddCategorySuccessAction,
} from './actionTypes';
import {
  getCategoriesSuccess,
  getCategoriesFail,
  addCategorySuccess,
  addCategoryFail,
  getCategories,
} from './actions';
import categoriesApi from '../../api/categories';
// import NavigationService from '../../navigation/NavigationService'
// import { AppScreens } from '../../navigation/routes'

export const getCategoriesEpic: Epic = action$ => {
  return action$.ofType(CategoriesActionTypes.GET_CATEGORIES).pipe(
    mergeMap(async (action: GetCategoriesAction) => {
      try {
        const response = await categoriesApi.getCategories();
        return getCategoriesSuccess(response.data.data);
      } catch (e) {
        return getCategoriesFail(e.response.data.message);
      }
    }),
  );
};

export const addCategoryEpic: Epic = action$ => {
  return action$.ofType(CategoriesActionTypes.ADD_CATEGORY).pipe(
    mergeMap(async (action: AddCategoryAction) => {
      try {
        const response = await categoriesApi.addCategory(action.payload.title);
        return addCategorySuccess(response.data.message);
      } catch (e) {
        return addCategoryFail(e.response.data.message);
      }
    }),
  );
};

export const addCategorySuccessEpic: Epic = action$ => {
  return action$.ofType(CategoriesActionTypes.ADD_CATEGORY_SUCCESS).pipe(
    mergeMap(async (action: AddCategorySuccessAction) => {
      // NavigationService.navigate(AppScreens.SELECT_CATEGORY)
      return getCategories();
    }),
  );
};

export default [getCategoriesEpic, addCategoryEpic, addCategorySuccessEpic];
