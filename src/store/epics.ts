import { combineEpics, Epic } from 'redux-observable'
import appEpics from '../app/app/epics'
import languageEpics from '../app/language/epics'
import authEpics from '../app/auth/epics'
import categoriesEpics from '../app/categories/epics'
import questionsEpics from '../app/questions/epics'
import userEpics from '../app/user/epics'

const epics: Epic[] = []

export default combineEpics(
  ...epics.concat(appEpics, languageEpics, authEpics, categoriesEpics, questionsEpics, userEpics),
)
