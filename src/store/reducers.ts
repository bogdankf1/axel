import { combineReducers } from 'redux'
import { polyglotReducer } from 'redux-polyglot'
import appReducer from '../app/app/reducer'
import authReducer from '../app/auth/reducer'
import categoriesReducer from '../app/categories/reducer'
import questionsReducer from '../app/questions/reducer'
import userReducer from '../app/user/reducer'

export default combineReducers({
  app: appReducer,
  polyglot: polyglotReducer,
  auth: authReducer,
  categories: categoriesReducer,
  questions: questionsReducer,
  user: userReducer,
})
