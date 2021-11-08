import React, { useCallback, memo, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { QuestionItem } from '../../../interfaces'
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper'
import { questionsListSelector } from '../../../app/questions/selectors'
import { selectQuestion, getComments } from '../../../app/questions/actions'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import QuestionsList from './QuestionsList'
import { CategoryQuestionsScreenWrapper } from './styles'
import FloatButton from '../../components/FloatButton/FloatButton'
import SearchInput from '../../components/SearchInput/SearchInput'
import EmptyListMessage from '../../components/EmptyListMessage/EmptyListMessage'
import { selectedCategorySelector } from '../../../app/categories/selectors'
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle'
import fields from '../../../app/language/translations/translationKeys'
import { translateFunctionSelector } from '../../../app/language/selectors'

const Questions = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const questions = useSelector(questionsListSelector)
  const t = useSelector(translateFunctionSelector)
  const selectedCategory = useSelector(selectedCategorySelector)

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
    <ScreenWrapper>
      <CategoryQuestionsScreenWrapper>
        <ScreenTitle title={selectedCategory.title} />
        <SearchInput
          value={searchValue}
          placeholder={t(fields.SEARCH_QUESTIONS)}
          onChangeText={setSearchValue}
        />
        {filteredQuestions.length ? (
          <QuestionsList questions={filteredQuestions} onQuestionPress={goToQuestionScreen} />
        ) : (
          <EmptyListMessage message={t(fields.NO_QUESTIONS_WERE_FOUND)} />
        )}
      </CategoryQuestionsScreenWrapper>
      <FloatButton onPress={goToAddNewQuestionsScreen} />
    </ScreenWrapper>
  )
}

export default memo(Questions)
