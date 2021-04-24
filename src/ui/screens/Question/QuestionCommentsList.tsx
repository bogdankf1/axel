import React, { memo } from 'react'
import { QuestionComment } from '../../../interfaces'
import { QuestionCommentsListWrapper } from './styles'
import QuestionCommentsListItem from './QuestionCommentsListItem'
import { FlatList } from 'react-native'

interface QuestionCommentsListProps {
  comments: QuestionComment[]
}

const QuestionCommentsList = ({ comments }: QuestionCommentsListProps) => {
  return (
    <QuestionCommentsListWrapper>
      <FlatList
        style={{ width: '100%' }}
        data={comments}
        renderItem={({ item }) => <QuestionCommentsListItem comment={item} />}
        keyExtractor={item => item._id}
      />
    </QuestionCommentsListWrapper>
  )
}

export default memo(QuestionCommentsList)
