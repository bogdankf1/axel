import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigation } from '@react-navigation/core'
import { translateFunctionSelector } from '../../../app/language/selectors'
import fields from '../../../app/language/translations/translationKeys'
import AppButton from '../../components/AppButton/AppButton'
import ScreenWithScrollWrapper from '../../components/ScreenWithScrollWrapper/ScreenWithScrollWrapper'
import { addCategory } from '../../../app/categories/actions'
// import images from '../../theme/images'
// import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
// import {
//   SelectCategoryScreenTitleBox,
//   SelectCategoryScreenTitle,
//   BackIconBox,
//   BackIcon,
// } from '../SelectCategory/styles'
import {
  AddNewCategoryScreenWrapper,
  AddNewCategoryInputFieldBox,
  AddNewCategoryInputField,
  AddNewCategoryButtonBox,
} from './styles'

const AddNewCategory = () => {
  // const navigation = useNavigation()
  const dispatch = useDispatch()
  const t = useSelector(translateFunctionSelector)
  const [categoryTitle, setCategoryTitle] = useState<string>('')

  const onNewCategoryTitleChange = useCallback((newCategoryTitle: string) => {
    setCategoryTitle(newCategoryTitle)
  }, [])
  const handleSubmitButtonPress = useCallback(() => {
    dispatch(addCategory(categoryTitle))
  }, [])
  // const goToSelectCategoryScreen = useCallback(() => {
  //   navigation.navigate(SCREEN_NAMES.SELECT_CATEGORY)
  // }, [])
  return (
    <ScreenWithScrollWrapper>
      <AddNewCategoryScreenWrapper>
        {/* <SelectCategoryScreenTitleBox>
          <BackIconBox onPress={goToSelectCategoryScreen}>
            <BackIcon source={images.expandArrow} />
          </BackIconBox>
          <SelectCategoryScreenTitle>{t(fields.ADD_NEW_CATEGORY)}</SelectCategoryScreenTitle>
        </SelectCategoryScreenTitleBox> */}
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
