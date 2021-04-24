import React, { memo, useCallback } from 'react'
import { QuestionItem } from '../../../interfaces'
import { CategoryQuestionsListItemBox, CategoryQuestionsListItemTitle } from './styles'

interface CategoryQuestionsListItemProps {
  question: QuestionItem
  onQuestionPress: (question: QuestionItem) => void
}

const CategoryQuestionsListItem = ({
  question,
  onQuestionPress,
}: CategoryQuestionsListItemProps) => {
  const handleQuestionPress = useCallback(() => {
    onQuestionPress(question)
  }, [question, onQuestionPress])
  return (
    <CategoryQuestionsListItemBox onPress={handleQuestionPress}>
      <CategoryQuestionsListItemTitle>{` - ${question.title}`}</CategoryQuestionsListItemTitle>
    </CategoryQuestionsListItemBox>
  )
}

export default memo(CategoryQuestionsListItem)
