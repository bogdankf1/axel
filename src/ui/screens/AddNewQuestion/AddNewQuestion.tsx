import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigation } from '@react-navigation/core'
import { translateFunctionSelector } from '../../../app/language/selectors'
import fields from '../../../app/language/translations/translationKeys'
import AppButton from '../../components/AppButton/AppButton'
import ScreenWithScrollWrapper from '../../components/ScreenWithScrollWrapper/ScreenWithScrollWrapper'
import { addQuestion } from '../../../app/questions/actions'
import { selectedCategorySelector } from '../../../app/categories/selectors'
// import images from '../../theme/images'
// import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
// import {
//   SelectCategoryScreenTitleBox,
//   SelectCategoryScreenTitle,
//   BackIconBox,
//   BackIcon,
// } from '../SelectCategory/styles'
import {
  AddNewQuestionScreenWrapper,
  AddNewQuestionInputFieldBox,
  AddNewQuestionInputField,
  AddNewQuestionButtonBox,
} from './styles'

const AddNewQuestion = () => {
  // const navigation = useNavigation()
  const dispatch = useDispatch()
  const t = useSelector(translateFunctionSelector)
  const selectedCategory = useSelector(selectedCategorySelector)
  const [questionTitle, setQuestionTitle] = useState<string>('')

  const onNewQuestionTitleChange = useCallback((newQuestionTitle: string) => {
    setQuestionTitle(newQuestionTitle)
  }, [])
  const handleSubmitButtonPress = useCallback(() => {
    dispatch(addQuestion(questionTitle, '', selectedCategory._id))
  }, [selectedCategory, questionTitle])
  // const goToQuestionsScreen = useCallback(() => {
  //   navigation.navigate(SCREEN_NAMES.CATEGORY_QUESTIONS)
  // }, [])

  return (
    <ScreenWithScrollWrapper>
      <AddNewQuestionScreenWrapper>
        {/* <SelectCategoryScreenTitleBox>
          <BackIconBox onPress={goToQuestionsScreen}>
            <BackIcon source={images.expandArrow} />
          </BackIconBox>
          <SelectCategoryScreenTitle>{t(fields.ADD_NEW_QUESTION)}</SelectCategoryScreenTitle>
        </SelectCategoryScreenTitleBox> */}
        <AddNewQuestionInputFieldBox>
          <AddNewQuestionInputField
            value={questionTitle}
            onChangeText={onNewQuestionTitleChange}
            placeholder={t(fields.QUESTION_TITLE)}
          />
        </AddNewQuestionInputFieldBox>
        <AddNewQuestionButtonBox>
          <AppButton title={t(fields.SUBMIT)} onPress={handleSubmitButtonPress} />
        </AddNewQuestionButtonBox>
      </AddNewQuestionScreenWrapper>
    </ScreenWithScrollWrapper>
  )
}

export default memo(AddNewQuestion)
