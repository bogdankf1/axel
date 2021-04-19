import React, { memo, useCallback } from 'react'
import { QuestionItem } from '../../../interfaces'
import {
  TopQuestionItem,
  TopQuestionNumber,
  TopQuestionInner,
  TopQuestionText,
  TopQuestionLikes,
  TopQuestionLikesIcon,
  TopQuestionLikesText,
} from './styles'
import images from '../../theme/images'

interface TopQuestionsListItemProps {
  question: QuestionItem
  index: number
  goToQuestion: (question: QuestionItem) => void
}

const TopQuestionsListItem = ({ question, index, goToQuestion }: TopQuestionsListItemProps) => {
  const handleQuestionPress = useCallback(() => {
    goToQuestion(question)
  }, [goToQuestion, question])
  return (
    <TopQuestionItem onPress={handleQuestionPress}>
      <TopQuestionNumber>{`${index})`}</TopQuestionNumber>
      <TopQuestionInner>
        <TopQuestionText>{question.title}</TopQuestionText>
        <TopQuestionLikes>
          <TopQuestionLikesIcon source={images.likeIcon} />
          <TopQuestionLikesText>{question.likes}</TopQuestionLikesText>
        </TopQuestionLikes>
      </TopQuestionInner>
    </TopQuestionItem>
  )
}

export default memo(TopQuestionsListItem)
