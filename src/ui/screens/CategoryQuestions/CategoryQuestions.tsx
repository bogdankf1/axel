import React, { useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { QuestionItem } from '../../../interfaces'
import { translateFunctionSelector } from '../../../app/language/selectors'
import fields from '../../../app/language/translations/translationKeys'
import ScreenWithScrollWrapper from '../../components/ScreenWithScrollWrapper/ScreenWithScrollWrapper'
// import { selectedCategorySelector } from '../../../app/categories/selectors'
import { questionsListSelector } from '../../../app/questions/selectors'
import { selectQuestion, getComments } from '../../../app/questions/actions'
// import images from '../../theme/images'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
// import { BackIconBox, BackIcon } from '../SelectCategory/styles'
import CategoryQuestionsList from './CategoryQuestionsList'
import {
  CategoryQuestionsScreenWrapper,
  // CategoryQuestionsScreenTitleBox,
  // CategoryQuestionsScreenTitle,
  AddNewQuestionBox,
  AddNewQuestionBoxIcon,
  AddNewQuestionBoxIconText,
  AddNewQuestionBoxText,
} from './styles'

const CategoryQuestions = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const t = useSelector(translateFunctionSelector)
  // const selectedCategory = useSelector(selectedCategorySelector)
  const questions = useSelector(questionsListSelector)

  const goToAddNewQuestionsScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.ADD_NEW_QUESTION)
  }, [])
  const goToQuestionScreen = useCallback((question: QuestionItem) => {
    dispatch(selectQuestion(question))
    dispatch(getComments(question._id))
    navigation.navigate(SCREEN_NAMES.QUESTION)
  }, [])
  // const goToSelectCategoryScreen = useCallback(() => {
  //   navigation.navigate(SCREEN_NAMES.SELECT_CATEGORY)
  // }, [])
  return (
    <ScreenWithScrollWrapper>
      <CategoryQuestionsScreenWrapper>
        {/* <CategoryQuestionsScreenTitleBox>
          <BackIconBox onPress={goToSelectCategoryScreen}>
            <BackIcon source={images.expandArrow} />
          </BackIconBox>
          <CategoryQuestionsScreenTitle>{selectedCategory.title}</CategoryQuestionsScreenTitle>
        </CategoryQuestionsScreenTitleBox> */}
        <AddNewQuestionBox onPress={goToAddNewQuestionsScreen}>
          <AddNewQuestionBoxIcon>
            <AddNewQuestionBoxIconText>{'+'}</AddNewQuestionBoxIconText>
          </AddNewQuestionBoxIcon>
          <AddNewQuestionBoxText>{t(fields.ADD_NEW_QUESTION)}</AddNewQuestionBoxText>
        </AddNewQuestionBox>
        <CategoryQuestionsList questions={questions} onQuestionPress={goToQuestionScreen} />
      </CategoryQuestionsScreenWrapper>
    </ScreenWithScrollWrapper>
  )
}

export default memo(CategoryQuestions)
