import React, { memo, useCallback, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { QuestionItem } from '../../../interfaces'
import { translateFunctionSelector } from '../../../app/language/selectors'
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper'
import TopQuestionsList from './TopQuestionsList'
import { topQuestionsListSelector } from '../../../app/questions/selectors'
import { getTopQuestions, selectQuestion, getComments } from '../../../app/questions/actions'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import { TopQuestionsScreenWrapper } from './styles'
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle'

const TopQuestionsScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const t = useSelector(translateFunctionSelector)
  const questions = useSelector(topQuestionsListSelector)

  useEffect(() => {
    dispatch(getTopQuestions())
  }, [])

  const goToQuestion = useCallback((question: QuestionItem) => {
    dispatch(selectQuestion(question))
    dispatch(getComments(question._id))
    navigation.navigate(SCREEN_NAMES.QUESTION, { goBackRoute: SCREEN_NAMES.TOP_QUESTIONS })
  }, [])
  return (
    <ScreenWrapper>
      <TopQuestionsScreenWrapper>
        <ScreenTitle title="Top 10" />
        <TopQuestionsList questions={questions} goToQuestion={goToQuestion} />
      </TopQuestionsScreenWrapper>
    </ScreenWrapper>
  )
}

export default memo(TopQuestionsScreen)
