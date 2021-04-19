
import { PolyglotOptions } from 'node-polyglot'
import { RApp } from '../app/app/reducer'
import { RAuth } from '../app/auth/reducer'
import { RCategories } from '../app/categories/reducer'
import { RQuestions } from '../app/questions/reducer'
import { RUser } from '../app/user/reducer'

export interface RootState {
  app: RApp
  polyglot: PolyglotOptions
  auth: RAuth
  categories: RCategories
  questions: RQuestions
  user: RUser
}
