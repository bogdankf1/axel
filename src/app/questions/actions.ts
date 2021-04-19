import {
  QuestionsActionTypes,
  GetQuestionsAction,
  GetQuestionsSuccessAction,
  GetQuestionsFailAction,
  GetTopQuestionsAction,
  GetTopQuestionsSuccessAction,
  GetTopQuestionsFailAction,
  AddQuestionAction,
  AddQuestionSuccessAction,
  AddQuestionFailAction,
  SelectQuestionAction,
  AddCommentAction,
  AddCommentSuccessAction,
  AddCommentFailAction,
  SetLikeAction,
  SetLikeSuccessAction,
  SetLikeFailAction,
  GetCommentsAction,
  GetCommentsSuccessAction,
  GetCommentsFailAction,
} from './actionTypes'
import { QuestionItem, QuestionComment } from '../../interfaces'

export const getQuestions = (
  category_id: string,
  updateSelectedQuestion?: boolean,
  post_id?: string,
): GetQuestionsAction => ({
  type: QuestionsActionTypes.GET_QUESTIONS,
  payload: {
    category_id,
    updateSelectedQuestion,
    post_id,
  },
})
export const getQuestionsSuccess = (
  list: QuestionItem[],
  updateSelectedQuestion?: boolean,
  post_id?: string,
): GetQuestionsSuccessAction => ({
  type: QuestionsActionTypes.GET_QUESTIONS_SUCCESS,
  payload: {
    list,
    updateSelectedQuestion,
    post_id,
  },
})
export const getQuestionsFail = (message: string): GetQuestionsFailAction => ({
  type: QuestionsActionTypes.GET_QUESTIONS_FAIL,
  payload: {
    message,
  },
})

export const addQuestion = (
  title: string,
  content: string,
  category_id: string,
): AddQuestionAction => ({
  type: QuestionsActionTypes.ADD_QUESTION,
  payload: {
    title,
    content,
    category_id,
  },
})
export const addQuestionSuccess = (
  message: string,
  category_id: string,
): AddQuestionSuccessAction => ({
  type: QuestionsActionTypes.ADD_QUESTION_SUCCESS,
  payload: {
    message,
    category_id,
  },
})
export const addQuestionFail = (message: string): AddQuestionFailAction => ({
  type: QuestionsActionTypes.ADD_QUESTION_FAIL,
  payload: {
    message,
  },
})

export const selectQuestion = (question: QuestionItem): SelectQuestionAction => ({
  type: QuestionsActionTypes.SELECT_QUESTION,
  payload: {
    question,
  },
})

export const addComment = (
  text: string,
  accessToken: string,
  post_id: string,
): AddCommentAction => ({
  type: QuestionsActionTypes.ADD_COMMENT,
  payload: {
    text,
    accessToken,
    post_id,
  },
})
export const addCommentSuccess = (
  message: string,
  category_id: string,
  post_id: string,
): AddCommentSuccessAction => ({
  type: QuestionsActionTypes.ADD_COMMENT_SUCCESS,
  payload: {
    message,
    category_id,
    post_id,
  },
})
export const addCommentFail = (message: string): AddCommentFailAction => ({
  type: QuestionsActionTypes.ADD_COMMENT_FAIL,
  payload: {
    message,
  },
})

export const getTopQuestions = (
  updateSelectedQuestion?: boolean,
  post_id?: string,
): GetTopQuestionsAction => ({
  type: QuestionsActionTypes.GET_TOP_QUESTIONS,
  payload: {
    updateSelectedQuestion,
    post_id,
  },
})
export const getTopQuestionsSuccess = (
  list: QuestionItem[],
  updateSelectedQuestion?: boolean,
  post_id?: string,
): GetTopQuestionsSuccessAction => ({
  type: QuestionsActionTypes.GET_TOP_QUESTIONS_SUCCESS,
  payload: {
    list,
    updateSelectedQuestion,
    post_id,
  },
})
export const getTopQuestionsFail = (message: string): GetTopQuestionsFailAction => ({
  type: QuestionsActionTypes.GET_TOP_QUESTIONS_FAIL,
  payload: {
    message,
  },
})

export const setLike = (
  category_id: string,
  post_id: string,
  accessToken: string,
): SetLikeAction => ({
  type: QuestionsActionTypes.SET_LIKE,
  payload: {
    category_id,
    post_id,
    accessToken,
  },
})
export const setLikeSuccess = (
  category_id: string,
  post_id: string,
  accessToken: string,
): SetLikeSuccessAction => ({
  type: QuestionsActionTypes.SET_LIKE_SUCCESS,
  payload: {
    category_id,
    post_id,
    accessToken,
  },
})
export const setLikeFail = (message: string): SetLikeFailAction => ({
  type: QuestionsActionTypes.SET_LIKE_FAIL,
  payload: {
    message,
  },
})

export const getComments = (post_id: string): GetCommentsAction => ({
  type: QuestionsActionTypes.GET_COMMENTS,
  payload: {
    post_id,
  },
})
export const getCommentsSuccess = (comments: QuestionComment[]): GetCommentsSuccessAction => ({
  type: QuestionsActionTypes.GET_COMMENTS_SUCCESS,
  payload: {
    comments,
  },
})
export const getCommentsFail = (message: string): GetCommentsFailAction => ({
  type: QuestionsActionTypes.GET_COMMENTS_FAIL,
  payload: {
    message,
  },
})
