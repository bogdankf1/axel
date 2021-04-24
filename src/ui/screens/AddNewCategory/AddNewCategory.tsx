import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { translateFunctionSelector } from '../../../app/language/selectors'
import fields from '../../../app/language/translations/translationKeys'
import AppButton from '../../components/AppButton/AppButton'
import ScreenWithScrollWrapper from '../../components/ScreenWithScrollWrapper/ScreenWithScrollWrapper'
import { addCategory } from '../../../app/categories/actions'
import {
  AddNewCategoryScreenWrapper,
  AddNewCategoryInputFieldBox,
  AddNewCategoryInputField,
  AddNewCategoryButtonBox,
} from './styles'

const AddNewCategory = () => {
  const dispatch = useDispatch()
  const t = useSelector(translateFunctionSelector)
  const [categoryTitle, setCategoryTitle] = useState<string>('')

  const onNewCategoryTitleChange = useCallback((newCategoryTitle: string) => {
    setCategoryTitle(newCategoryTitle)
  }, [])
  const handleSubmitButtonPress = useCallback(() => {
    dispatch(addCategory(categoryTitle))
  }, [])
  return (
    <ScreenWithScrollWrapper>
      <AddNewCategoryScreenWrapper>
        <AddNewCategoryInputFieldBox>
          <AddNewCategoryInputField
            value={categoryTitle}
            onChangeText={onNewCategoryTitleChange}
            placeholder={t(fields.CATEGORY_TITLE)}
          />
        </AddNewCategoryInputFieldBox>
        <AddNewCategoryButtonBox>
          <AppButton title={t(fields.SUBMIT)} onPress={handleSubmitButtonPress} />
        </AddNewCategoryButtonBox>
      </AddNewCategoryScreenWrapper>
    </ScreenWithScrollWrapper>
  )
}

export default memo(AddNewCategory)
