import React, { memo } from 'react'
import { QuestionItem } from '../../../interfaces'
import { TopQuestionsListBox } from './styles'
import TopQuestionsListItem from './TopQuestionsListItem'

interface TopQuestionsListProps {
  questions: QuestionItem[]
  goToQuestion: (question: QuestionItem) => void
}

const TopQuestionsList = ({ questions, goToQuestion }: TopQuestionsListProps) => {
  return (
    <TopQuestionsListBox>
      {questions.map((question, idx) => (
        <TopQuestionsListItem
          key={question._id}
          index={idx + 1}
          question={question}
          goToQuestion={goToQuestion}
        />
      ))}
    </TopQuestionsListBox>
  )
}

export default memo(TopQuestionsList)
