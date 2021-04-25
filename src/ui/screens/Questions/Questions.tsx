import React, { useCallback, memo, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { QuestionItem } from '../../../interfaces'
import ScreenWithScrollWrapper from '../../components/ScreenWithScrollWrapper/ScreenWithScrollWrapper'
import { questionsListSelector } from '../../../app/questions/selectors'
import { selectQuestion, getComments } from '../../../app/questions/actions'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import QuestionsList from './QuestionsList'
import { CategoryQuestionsScreenWrapper } from './styles'
import FloatButton from '../../components/FloatButton/FloatButton'
import SearchInput from '../../components/SearchInput/SearchInput'
import EmptyListMessage from '../../components/EmptyListMessage/EmptyListMessage'

const Questions = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const questions = useSelector(questionsListSelector)

  const [searchValue, setSearchValue] = useState<string>('')

  const goToAddNewQuestionsScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.ADD_NEW_QUESTION)
  }, [])
  const goToQuestionScreen = useCallback((question: QuestionItem) => {
    dispatch(selectQuestion(question))
    dispatch(getComments(question._id))
    navigation.navigate(SCREEN_NAMES.QUESTION)
  }, [])

  const filteredQuestions = useMemo(() => {
    return searchValue
      ? questions.filter(question =>
          question.title.toLowerCase().includes(searchValue.toLowerCase()),
        )
      : questions
  }, [questions, searchValue])

  return (
    <ScreenWithScrollWrapper>
      <CategoryQuestionsScreenWrapper>
        <SearchInput
          value={searchValue}
          placeholder={'Search questions'}
          onChangeText={setSearchValue}
        />
        {filteredQuestions.length ? (
          <QuestionsList questions={filteredQuestions} onQuestionPress={goToQuestionScreen} />
        ) : (
          <EmptyListMessage message={'No questions were found'} />
        )}
      </CategoryQuestionsScreenWrapper>
      <FloatButton onPress={goToAddNewQuestionsScreen} />
    </ScreenWithScrollWrapper>
  )
}

export default memo(Questions)
