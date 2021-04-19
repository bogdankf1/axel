import React, { memo } from 'react'
import { QuestionComment } from '../../../interfaces'
import {
  QuestionCommentsItem,
  QuestionCommentsItemTopLine,
  QuestionCommentsItemAuthorText,
  QuestionCommentsItemDateText,
  QuestionCommentsItemBottomLine,
  QuestionCommentsItemText,
} from './styles'

interface QuestionCommentsListItemProps {
  comment: QuestionComment
}

const QuestionCommentsListItem = ({ comment }: QuestionCommentsListItemProps) => {
  return (
    <QuestionCommentsItem>
      <QuestionCommentsItemTopLine>
        <QuestionCommentsItemAuthorText>{comment.username}</QuestionCommentsItemAuthorText>
        <QuestionCommentsItemDateText>{comment.date}</QuestionCommentsItemDateText>
      </QuestionCommentsItemTopLine>
      <QuestionCommentsItemBottomLine>
        <QuestionCommentsItemText>{comment.text}</QuestionCommentsItemText>
      </QuestionCommentsItemBottomLine>
    </QuestionCommentsItem>
  )
}

export default memo(QuestionCommentsListItem)
