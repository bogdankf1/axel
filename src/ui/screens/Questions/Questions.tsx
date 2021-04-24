import React, { useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { QuestionItem } from '../../../interfaces'
import ScreenWithScrollWrapper from '../../components/ScreenWithScrollWrapper/ScreenWithScrollWrapper'
import { questionsListSelector } from '../../../app/questions/selectors'
import { selectQuestion, getComments } from '../../../app/questions/actions'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import CategoryQuestionsList from './QuestionsList'
import { CategoryQuestionsScreenWrapper } from './styles'
import FloatButton from '../../components/FloatButton/FloatButton'

const Questions = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const questions = useSelector(questionsListSelector)

  const goToAddNewQuestionsScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.ADD_NEW_QUESTION)
  }, [])
  const goToQuestionScreen = useCallback((question: QuestionItem) => {
    dispatch(selectQuestion(question))
    dispatch(getComments(question._id))
    navigation.navigate(SCREEN_NAMES.QUESTION)
  }, [])
  return (
    <ScreenWithScrollWrapper>
      <CategoryQuestionsScreenWrapper>
        <CategoryQuestionsList questions={questions} onQuestionPress={goToQuestionScreen} />
      </CategoryQuestionsScreenWrapper>
      <FloatButton onPress={goToAddNewQuestionsScreen} />
    </ScreenWithScrollWrapper>
  )
}

export default memo(Questions)
