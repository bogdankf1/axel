import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { translateFunctionSelector } from '../../../app/language/selectors'
import fields from '../../../app/language/translations/translationKeys'
import AppButton from '../../components/AppButton/AppButton'
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper'
import { addQuestion } from '../../../app/questions/actions'
import { selectedCategorySelector } from '../../../app/categories/selectors'
import {
  AddNewQuestionScreenWrapper,
  AddNewQuestionInputFieldBox,
  AddNewQuestionInputField,
  AddNewQuestionButtonBox,
} from './styles'

const AddNewQuestion = () => {
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

  return (
    <ScreenWrapper>
      <AddNewQuestionScreenWrapper>
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
    </ScreenWrapper>
  )
}

export default memo(AddNewQuestion)
