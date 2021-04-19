import React, { memo, useCallback, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { QuestionItem } from '../../../interfaces'
import { translateFunctionSelector } from '../../../app/language/selectors'
import fields from '../../../app/language/translations/translationKeys'
import ScreenWithScrollWrapper from '../../components/ScreenWithScrollWrapper/ScreenWithScrollWrapper'
import TopQuestionsList from './TopQuestionsList'
import images from '../../theme/images'
import { questionsListSelector } from '../../../app/questions/selectors'
import { getTopQuestions, selectQuestion, getComments } from '../../../app/questions/actions'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import {
  SelectCategoryScreenTitleBox,
  SelectCategoryScreenTitle,
  BackIconBox,
  BackIcon,
} from '../SelectCategory/styles'
import { TopQuestionsScreenWrapper } from './styles'

const TopQuestionsScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const t = useSelector(translateFunctionSelector)
  const questions = useSelector(questionsListSelector)

  useEffect(() => {
    dispatch(getTopQuestions())
  }, [])

  const goToQuestion = useCallback((question: QuestionItem) => {
    dispatch(selectQuestion(question))
    dispatch(getComments(question._id))
    navigation.navigate(SCREEN_NAMES.QUESTION, { goBackRoute: SCREEN_NAMES.TOP_QUESTIONS })
  }, [])
  const goToHomeScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.HOME)
  }, [])
  return (
    <ScreenWithScrollWrapper>
      <TopQuestionsScreenWrapper>
        <SelectCategoryScreenTitleBox>
          <BackIconBox onPress={goToHomeScreen}>
            <BackIcon source={images.expandArrow} />
          </BackIconBox>
          <SelectCategoryScreenTitle>{t(fields.TOP_QUESTIONS)}</SelectCategoryScreenTitle>
        </SelectCategoryScreenTitleBox>
        <TopQuestionsList questions={questions} goToQuestion={goToQuestion} />
      </TopQuestionsScreenWrapper>
    </ScreenWithScrollWrapper>
  )
}

export default memo(TopQuestionsScreen)
