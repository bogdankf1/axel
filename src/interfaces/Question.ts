export interface Question {
  title: string
  likes: number
  comments: QuestionComment[]
}
export interface QuestionComment {
  username: string
  text: string
  date: string
}

export interface QuestionItem {
  title: string
  content: string
  likes: number
  comments: QuestionComment[]
  _id: string
}
