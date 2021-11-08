import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epics'
import rootReducer from './reducers'
import logger from 'redux-logger'
import storeAuthEnhancer from '../app/auth/storeAuthEnhancer'
import { setLanguage } from 'redux-polyglot'
import translations from '../app/language/translations/languages'

export const configureStore = (initialState = {}) => {
  const epicMiddleware = createEpicMiddleware()
  // @ts-ignore
  const composeEnhancers =
    (__DEV__ && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

  const middlewares = [storeAuthEnhancer, applyMiddleware(epicMiddleware)]

  // if (__DEV__) {
  middlewares.push(applyMiddleware(logger))
  // }

  const enhancer = composeEnhancers(...middlewares)

  const store = createStore(rootReducer, initialState, enhancer)
  const locale = 'ua'

  const lang = translations[locale] ? locale : 'en'

  store.dispatch(setLanguage(lang, translations[lang]))
  epicMiddleware.run(rootEpic)
  return store
}
