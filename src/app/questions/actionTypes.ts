import { QuestionItem, QuestionComment } from '../../interfaces'

export enum QuestionsActionTypes {
  GET_QUESTIONS = 'GET_QUESTIONS',
  GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS',
  GET_QUESTIONS_FAIL = 'GET_QUESTIONS_FAIL',
  ADD_QUESTION = 'ADD_QUESTION',
  ADD_QUESTION_SUCCESS = 'ADD_QUESTION_SUCCESS',
  ADD_QUESTION_FAIL = 'ADD_QUESTION_FAIL',
  SELECT_QUESTION = 'SELECT_QUESTION',
  ADD_COMMENT = 'ADD_COMMENT',
  ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS',
  ADD_COMMENT_FAIL = 'ADD_COMMENT_FAIL',
  GET_TOP_QUESTIONS = 'GET_TOP_QUESTIONS',
  GET_TOP_QUESTIONS_SUCCESS = 'GET_TOP_QUESTIONS_SUCCESS',
  GET_TOP_QUESTIONS_FAIL = 'GET_TOP_QUESTIONS_FAIL',
  SET_LIKE = 'SET_LIKE',
  SET_LIKE_SUCCESS = 'SET_LIKE_SUCCESS',
  SET_LIKE_FAIL = 'SET_LIKE_FAIL',
  GET_COMMENTS = 'GET_COMMENTS',
  GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS',
  GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL',
}

export interface GetQuestionsAction {
  type: QuestionsActionTypes.GET_QUESTIONS
  payload: {
    category_id: string
    updateSelectedQuestion?: boolean
    post_id?: string
  }
}
export interface GetQuestionsSuccessAction {
  type: QuestionsActionTypes.GET_QUESTIONS_SUCCESS
  payload: {
    list: QuestionItem[]
    updateSelectedQuestion?: boolean
    post_id?: string
  }
}
export interface GetQuestionsFailAction {
  type: QuestionsActionTypes.GET_QUESTIONS_FAIL
  payload: {
    message: string
  }
}

export interface AddQuestionAction {
  type: QuestionsActionTypes.ADD_QUESTION
  payload: {
    title: string
    content: string
    category_id: string
  }
}
export interface AddQuestionSuccessAction {
  type: QuestionsActionTypes.ADD_QUESTION_SUCCESS
  payload: {
    message: string
    category_id: string
  }
}
export interface AddQuestionFailAction {
  type: QuestionsActionTypes.ADD_QUESTION_FAIL
  payload: {
    message: string
  }
}

export interface SelectQuestionAction {
  type: QuestionsActionTypes.SELECT_QUESTION
  payload: {
    question: QuestionItem
  }
}

export interface AddCommentAction {
  type: QuestionsActionTypes.ADD_COMMENT
  payload: {
    text: string
    category_id: string
    post_id: string
  }
}
export interface AddCommentSuccessAction {
  type: QuestionsActionTypes.ADD_COMMENT_SUCCESS
  payload: {
    message: string
    category_id: string
    post_id: string
  }
}
export interface AddCommentFailAction {
  type: QuestionsActionTypes.ADD_COMMENT_FAIL
  payload: {
    message: string
  }
}

export interface GetTopQuestionsAction {
  type: QuestionsActionTypes.GET_TOP_QUESTIONS
  payload: {
    updateSelectedQuestion?: boolean
    post_id?: string
  }
}
export interface GetTopQuestionsSuccessAction {
  type: QuestionsActionTypes.GET_TOP_QUESTIONS_SUCCESS
  payload: {
    list: QuestionItem[]
    updateSelectedQuestion?: boolean
    post_id?: string
  }
}
export interface GetTopQuestionsFailAction {
  type: QuestionsActionTypes.GET_TOP_QUESTIONS_FAIL
  payload: {
    message: string
  }
}

export interface SetLikeAction {
  type: QuestionsActionTypes.SET_LIKE
  payload: {
    category_id: string
    post_id: string
    accessToken: string
  }
}
export interface SetLikeSuccessAction {
  type: QuestionsActionTypes.SET_LIKE_SUCCESS
  payload: {
    category_id: string
    post_id: string
    accessToken: string
  }
}
export interface SetLikeFailAction {
  type: QuestionsActionTypes.SET_LIKE_FAIL
  payload: {
    message: string
  }
}

export interface GetCommentsAction {
  type: QuestionsActionTypes.GET_COMMENTS
  payload: {
    post_id: string
  }
}
export interface GetCommentsSuccessAction {
  type: QuestionsActionTypes.GET_COMMENTS_SUCCESS
  payload: {
    comments: QuestionComment[]
  }
}
export interface GetCommentsFailAction {
  type: QuestionsActionTypes.GET_COMMENTS_FAIL
  payload: {
    message: string
  }
}
