import {
  QuestionsActionTypes,
  GetQuestionsAction,
  GetQuestionsSuccessAction,
  GetQuestionsFailAction,
  AddQuestionAction,
  AddQuestionSuccessAction,
  AddQuestionFailAction,
  SelectQuestionAction,
  GetTopQuestionsAction,
  GetTopQuestionsSuccessAction,
  GetTopQuestionsFailAction,
  SetLikeAction,
  SetLikeSuccessAction,
  SetLikeFailAction,
  GetCommentsAction,
  GetCommentsSuccessAction,
  GetCommentsFailAction,
} from './actionTypes'
import { QuestionItem, QuestionComment } from '../../interfaces'

export interface RQuestions {
  loading: boolean
  error: string
  list: QuestionItem[]
  selectedQuestion: QuestionItem
  topList: QuestionItem[]
  currentQuestionComments: QuestionComment[]
}

type QuestionsActions =
  | GetQuestionsAction
  | GetQuestionsSuccessAction
  | GetQuestionsFailAction
  | AddQuestionAction
  | AddQuestionSuccessAction
  | AddQuestionFailAction
  | SelectQuestionAction
  | GetTopQuestionsAction
  | GetTopQuestionsSuccessAction
  | GetTopQuestionsFailAction
  | SetLikeAction
  | SetLikeSuccessAction
  | SetLikeFailAction
  | GetCommentsAction
  | GetCommentsSuccessAction
  | GetCommentsFailAction

export const initialQuestions = (): RQuestions => ({
  loading: false,
  error: '',
  list: [],
  selectedQuestion: {
    title: '',
    content: '',
    likes: 0,
    comments: [],
    _id: '',
  },
  topList: [],
  currentQuestionComments: [],
})

const questionsReducer = (state = initialQuestions(), action: QuestionsActions): RQuestions => {
  switch (action.type) {
    case QuestionsActionTypes.GET_QUESTIONS:
      return { ...state, loading: true }
    case QuestionsActionTypes.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.list.filter(item => item.title).reverse(),
      }
    case QuestionsActionTypes.GET_QUESTIONS_FAIL:
      return { ...state, loading: false, error: action.payload.message }
    case QuestionsActionTypes.ADD_QUESTION:
      return { ...state, loading: true }
    case QuestionsActionTypes.ADD_QUESTION_SUCCESS:
      return { ...state, loading: false }
    case QuestionsActionTypes.ADD_QUESTION_FAIL:
      return { ...state, loading: false, error: action.payload.message }
    case QuestionsActionTypes.SELECT_QUESTION:
      return { ...state, selectedQuestion: action.payload.question }
    case QuestionsActionTypes.GET_TOP_QUESTIONS:
      return { ...state, loading: true }
    case QuestionsActionTypes.GET_TOP_QUESTIONS_SUCCESS:
      return { ...state, loading: false, topList: action.payload.list.filter(item => item.title) }
    case QuestionsActionTypes.GET_TOP_QUESTIONS_FAIL:
      return { ...state, loading: false, error: action.payload.message }
    case QuestionsActionTypes.SET_LIKE:
      return { ...state, loading: true }
    case QuestionsActionTypes.SET_LIKE_SUCCESS:
      return { ...state, loading: false }
    case QuestionsActionTypes.SET_LIKE_FAIL:
      return { ...state, loading: false, error: action.payload.message }
    case QuestionsActionTypes.GET_COMMENTS:
      return { ...state, loading: true }
    case QuestionsActionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentQuestionComments: action.payload.comments.reverse(),
      }
    case QuestionsActionTypes.GET_COMMENTS_FAIL:
      return { ...state, loading: false, error: action.payload.message }
    default:
      return state
  }
}

export default questionsReducer
