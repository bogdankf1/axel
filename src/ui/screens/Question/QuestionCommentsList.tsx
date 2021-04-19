import React, { memo } from 'react'
import { QuestionComment } from '../../../interfaces'
import { QuestionCommentsListWrapper } from './styles'
import QuestionCommentsListItem from './QuestionCommentsListItem'

interface QuestionCommentsListProps {
  comments: QuestionComment[]
}

const QuestionCommentsList = ({ comments }: QuestionCommentsListProps) => {
  return (
    <QuestionCommentsListWrapper>
      {comments.map((comment, idx) => (
        <QuestionCommentsListItem key={idx} comment={comment} />
      ))}
    </QuestionCommentsListWrapper>
  )
}

export default memo(QuestionCommentsList)
