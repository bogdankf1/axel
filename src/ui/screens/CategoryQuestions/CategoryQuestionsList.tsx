import React, { memo } from 'react'
import { QuestionItem } from '../../../interfaces'
import { CategoryQuestionsListWrapper } from './styles'
import CategoryQuestionsListItem from './CategoryQuestionsListItem'

interface CategoryQuestionsListProps {
  questions: QuestionItem[]
  onQuestionPress: (question: QuestionItem) => void
}

const CategoryQuestionsList = ({ questions, onQuestionPress }: CategoryQuestionsListProps) => {
  return (
    <CategoryQuestionsListWrapper>
      {questions.map(question => (
        <CategoryQuestionsListItem
          key={question._id}
          question={question}
          onQuestionPress={onQuestionPress}
        />
      ))}
    </CategoryQuestionsListWrapper>
  )
}

export default memo(CategoryQuestionsList)
