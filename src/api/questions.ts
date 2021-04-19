import client from './client'
import { QuestionItem, QuestionComment } from '../interfaces'

interface GetQuestionsByCategoryResponse {
  data: QuestionItem[]
}

interface AddQuestionResponse {
  message: string
}

interface AddCommentResponse {
  message: string
}

interface GetTopQuestionsResponse {
  data: QuestionItem[]
}

interface SetLikeToQuestionsResponse {}

interface GetCommentsResponse {
  data: QuestionComment[]
}

export const getQuestionsByCategory = (category_id: string) =>
  client.get<GetQuestionsByCategoryResponse>(`posts/${category_id}`)

export const addQuestion = (title: string, content: string, category_id: string) =>
  client.post<AddQuestionResponse>(`posts/${category_id}`, { title, content })

export const addComment = (text: string, accessToken: string, post_id: string) =>
  client.post<AddCommentResponse>(
    `comments/${post_id}`,
    { text },
    // {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // },
  )

export const getTopQuestions = () => client.get<GetTopQuestionsResponse>(`top10`)

export const setLikeToQuestions = (post_id: string, accessToken: string) =>
  client.post<SetLikeToQuestionsResponse>(
    `like/${post_id}`,
    {},
    {
      // headers: {
      //   Authorization: `Bearer ${accessToken}`,
      // },
    },
  )

export const getComments = (post_id: string) =>
  client.get<GetCommentsResponse>(`comments/${post_id}`)

export default {
  getQuestionsByCategory,
  addQuestion,
  addComment,
  getTopQuestions,
  setLikeToQuestions,
  getComments,
}
