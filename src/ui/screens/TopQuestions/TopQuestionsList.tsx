import React, { memo } from 'react'
import { FlatList } from 'react-native'
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
      <FlatList
        style={{ width: '100%' }}
        data={questions}
        renderItem={({ item, index }) => (
          <TopQuestionsListItem index={index + 1} question={item} goToQuestion={goToQuestion} />
        )}
        keyExtractor={item => item._id}
      />
    </TopQuestionsListBox>
  )
}

export default memo(TopQuestionsList)
