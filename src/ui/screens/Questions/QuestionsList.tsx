import React, { memo } from 'react'
import { FlatList } from 'react-native'
import { QuestionItem } from '../../../interfaces'
import { CategoryQuestionsListWrapper } from './styles'
import QuestionsListItem from './QuestionsListItem'

interface CategoryQuestionsListProps {
  questions: QuestionItem[]
  onQuestionPress: (question: QuestionItem) => void
}

const QuestionsList = ({ questions, onQuestionPress }: CategoryQuestionsListProps) => {
  return (
    <CategoryQuestionsListWrapper>
      <FlatList
        style={{ width: '100%' }}
        data={questions}
        renderItem={({ item }) => (
          <QuestionsListItem question={item} onQuestionPress={onQuestionPress} />
        )}
        keyExtractor={item => item._id}
      />
    </CategoryQuestionsListWrapper>
  )
}

export default memo(QuestionsList)
