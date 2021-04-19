import { RootState } from '../../interfaces'

export const questionsListSelector = (state: RootState) => state.questions.list

export const selectedQuestionSelector = (state: RootState) => state.questions.selectedQuestion

export const topQuestionsListSelector = (state: RootState) => state.questions.topList

export const currentQuestionCommentsSelector = (state: RootState) => state.questions.currentQuestionComments
